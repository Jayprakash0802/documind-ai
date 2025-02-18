// Documents.jsx
import React from 'react';
import { FaFilter, FaUpload } from 'react-icons/fa';

const Documents = () => {
  return (
    <div className="p-6 bg-[#E5E7EB] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Documents</h2>
          <p className="text-gray-600">Manage and organize your documents</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white border rounded-lg text-gray-600 hover:bg-gray-50">
            <FaFilter className="mr-2" /> Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <FaUpload className="mr-2" /> Upload Document
          </button>
        </div>
      </div>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DocumentCard
          name="Annual Report 2023.pdf"
          time="2 hours ago"
          size="2.4 MB"
          status="Summarized"
          statusColor="green"
        />
        <DocumentCard
          name="Project Proposal.docx"
          time="5 hours ago"
          size="1.8 MB"
          status="Processing"
          statusColor="yellow"
        />
        <DocumentCard
          name="Meeting Minutes.txt"
          time="1 day ago"
          size="156 KB"
          status="Summarized"
          statusColor="green"
        />
      </div>
    </div>
  );
};

const DocumentCard = ({ name, time, size, status, statusColor }) => {
  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">Added {time}</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">...</button>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
        <span>Size: {size}</span>
        <span
          className={`px-2 py-1 bg-${statusColor}-100 text-${statusColor}-700 rounded-full text-xs`}
        >
          {status}
        </span>
      </div>
      <div className="flex space-x-2">
        {status === 'Summarized' ? (
          <button className="flex-1 px-3 py-2 text-sm text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100">
            View Summary
          </button>
        ) : (
          <button className="flex-1 px-3 py-2 text-sm text-gray-400 bg-gray-50 rounded-lg cursor-not-allowed">
            View Summary
          </button>
        )}
        <button className="flex-1 px-3 py-2 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100">
          Download
        </button>
      </div>
    </div>
  );
};

export default Documents;
