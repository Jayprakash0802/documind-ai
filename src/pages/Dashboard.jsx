// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { FaFileUpload, FaTrash } from 'react-icons/fa';
import { auth, db, storage } from '../utils/firebase.utils';
import { addDoc, collection, doc, setDoc, getDocs, query, orderBy, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, deleteObject, uploadBytesResumable } from 'firebase/storage';
import { LinearProgress } from '@mui/material';
import axios from 'axios';

const Dashboard = () => {
  const uid = auth.currentUser.uid;
  const backendURL = import.meta.env.VITE_API_URL;
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    const inputValue = e.target.value.trim();
    setSearchQuery(inputValue);

    if (inputValue.length > 1) {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`${backendURL}/search?query=${encodeURIComponent(inputValue)}`);

        if (!response.ok) throw new Error("Failed to fetch results");

        const data = await response.json();
        // Ensure response data is properly structured
        setResults(Array.isArray(data.documents) ? data.documents : []);
        setSuggestions(Array.isArray(data.suggestions) ? data.suggestions : []);

      } catch (err) {
        console.error("Error fetching search results:", err);
        setError("Error fetching results. Please try again.");
        setResults([]);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    } else {
      setResults([]);
      setSuggestions([]);
      setError("");
    }
  };



  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    if (!files.length) return;
    setSelectedFiles(files);
  };

  const handleUploadSelectedFiles = async () => {
    setIsUploading(true);
    setUploadProgress(0);

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      try {
        const docRef = await addDoc(collection(db, "users", uid, "documents"), {
          fileName: file.name,
          uploaded_at: new Date(),
          filesize: file.size,
          status: 'uploaded',
        });

        const storageRef = ref(storage, `/documents/${uid}/${docRef.id}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        });

        await uploadTask;
        console.log("File uploaded successfully!");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
    fetchDocuments();
    setSelectedFiles([]);
    setIsUploading(false);
  };


  const handleGenerateSummary = async (id) => {
    // const str = await fetch(`${generateURI}/process`)
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    const response = await axios.get(`${backendURL}/process`,
      {
        params: {
          user_id: uid,
          document_id: id,
        }
      }
    )
    console.log(response, "this is from fast api str")
  };

  const handleDelete = async (docId, filePath) => {
    try {
      // Delete the document from Firestore
      await deleteDoc(doc(db, "users", uid, "documents", docId));

      // Delete the file from Firebase Storage
      const fileRef = ref(storage, filePath);
      await deleteObject(fileRef);

      console.log("Document and file deleted successfully!");
      // Optionally, refresh the documents list
      fetchDocuments();
    } catch (error) {
      console.error("Error deleting document and file:", error);
    }
  };


  // Fetch documents from Firestore
  const fetchDocuments = async () => {
    const querySnapshot = await getDocs(query(collection(db, "users", uid, "documents"), orderBy("uploaded_at", "desc")));
    const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setDocuments(docs);
  };
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    if (uid) {
      fetchDocuments();
    }
  }, [uid]);
  const getDate = (date) => {
    const timestamp = new Date(date.seconds * 1000); // Convert seconds to milliseconds
    const options = { day: "2-digit", month: "long", year: "numeric" };

    return timestamp.toLocaleDateString("en-US", options);
  }

  return (
    <div className="p-6 bg-[#E5E7EB] min-h-screen space-y-8">
      {/* Upload Section */}
      <div className="bg-white w-full p-4 border border-gray-300 rounded-lg shadow-md">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for documents..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />

        {/* Loading Indicator */}

        {/* Error Message */}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <ul className="mt-2 bg-gray-100 p-2 rounded-md shadow-sm">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200 transition duration-200"
                onClick={() => setSearchQuery(suggestion)} // Clicking suggestion fills input
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}

        {/* Search Results */}
        {results.length > 0 ? (
          <ul className="mt-4 border-t pt-2">
            {results.map((doc) => (
              <li key={doc.unique_id  } className="py-2 border-b last:border-none">
                <strong className="text-lg">{doc.title}</strong>
                <p className="text-sm text-gray-600">
                  {doc.summary ? doc.summary.substring(0, 100) + "..." : "No summary available"}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          searchQuery.length > 1 && !loading && <p className="mt-2 text-gray-500">No results found.</p>
        )}
      </div>

      <div className="p-6 bg-white rounded-lg border border-neutral-200">
        <div className="text-center">
          {isUploading ? (
            <>
              <LinearProgress variant="determinate" value={uploadProgress} />
              <p className="mt-2 text-gray-600">Uploading: {Math.round(uploadProgress)}%</p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload Documents</h2>
              <p className="text-gray-600 mb-6">Drag and drop your documents or click to browse</p>
              <div className="border-2 border-dashed border-neutral-200 rounded-lg p-8 hover:border-blue-400 transition-colors">
                <input type="file" id="fileInput" className="hidden" accept=".pdf,.doc,.docx,.txt" multiple onChange={handleFileUpload} />
                <label htmlFor="fileInput" className="cursor-pointer">
                  <FaFileUpload className="mx-auto text-gray-400 mb-4" size={48} />
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Choose Files
                  </span>
                </label>
              </div>
            </>
          )}
        </div>
        {selectedFiles.length > 0 && !isUploading && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Selected Files:</h3>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index} className="text-gray-600">{file.name}</li>
              ))}
            </ul>
            <button onClick={handleUploadSelectedFiles} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Save Selected Documents
            </button>
            <button onClick={handleGenerateSummary} className="cursor-pointer mt-2 ml-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Generate Summary
            </button>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="24" subtitle="Documents Processed" bg="bg-blue-100" iconColor="text-blue-600" />
        <StatCard title="18" subtitle="Summaries Created" bg="bg-green-100" iconColor="text-green-600" />
        <StatCard title="85%" subtitle="Accuracy Rate" bg="bg-purple-100" iconColor="text-purple-600" />
        <StatCard title="2.5min" subtitle="Avg. Process Time" bg="bg-yellow-100" iconColor="text-yellow-600" />
      </div>

      {/* Uploaded Documents */}
      <div className="bg-white rounded-lg border border-neutral-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Uploaded Documents</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left text-sm font-semibold">Document Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold">Date</th>
                <th className="py-3 px-4 text-left text-sm font-semibold">Status</th>
                <th className="py-3 px-4 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Fetch documents from Firestore ordered by uploaded_at */}
              {documents.map(doc => (
                <TableRow
                  key={doc.id}
                  name={doc.fileName}
                  date={getDate(doc.uploaded_at)}
                  status={doc.status}
                  statusColor={doc.status === 'uploaded' ? 'green' : 'yellow'}
                  canView={doc.status === 'uploaded'}
                  onDelete={() => handleDelete(doc.id, `/documents/${uid}/${doc.id}`)}
                  onGenerateSummary={() => handleGenerateSummary(doc.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// A small stat card sub-component
const StatCard = ({ title, subtitle, bg, iconColor }) => {
  return (
    <div className={`bg-white p-4 rounded-lg border border-neutral-200 flex items-center`}>
      <div className={`p-3 ${bg} rounded-lg`}>
        <svg
          className={`w-6 h-6 ${iconColor}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7..." />
        </svg>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

// Table row sub-component
const TableRow = ({ name, date, status, statusColor, canView, onDelete, onGenerateSummary }) => {
  return (
    <tr className="border-b">
      <td className="py-3 px-4 text-sm">{name}</td>
      <td className="py-3 px-4 text-sm">{date}</td>
      <td className="py-3 px-4">
        <span
          className={`px-2 py-1 text-xs font-medium bg-${statusColor}-100 text-${statusColor}-700 rounded-full`}
        >
          {status}
        </span>
      </td>
      <td className="py-3 px-4 flex items-center">
        {canView ? (
          <>
            <button className="ml-2 text-green-600 hover:text-green-800 cursor-pointer" onClick={onGenerateSummary}>
              Generate Summary</button>
            <button onClick={onDelete} className="ml-2 text-red-600 hover:text-red-800">
              <FaTrash />
            </button>
          </>
        ) : (
          <button className="text-gray-400 cursor-not-allowed">View Summary</button>
        )}
      </td>
    </tr>
  );
};

export default Dashboard;
