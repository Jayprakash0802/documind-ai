// History.jsx
import React from 'react';

const History = () => {
  return (
    <div className="p-6 bg-[#E5E7EB] min-h-screen space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Activity History</h2>
          <p className="text-gray-600">Track your document processing history</p>
        </div>
        <div>
          <button className="px-4 py-2 bg-white border rounded-lg text-gray-600 hover:bg-gray-50">
            Export History
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6">
        <h3 className="text-lg font-semibold mb-4">Today</h3>
        <HistoryItem
          title='Summary generated for "Annual Report 2023.pdf"'
          time="2 hours ago"
          color="bg-blue-100 text-blue-600"
        />
        <HistoryItem
          title='Uploaded "Project Proposal.docx"'
          time="5 hours ago"
          color="bg-purple-100 text-purple-600"
        />

        <h3 className="text-lg font-semibold mb-4 mt-8">Yesterday</h3>
        <HistoryItem
          title='Summary generated for "Meeting Minutes.txt"'
          time="Jan 14, 2024, 2:30 PM"
          color="bg-green-100 text-green-600"
        />
        <HistoryItem
          title='Viewed summary of "Q4 Report.pdf"'
          time="Jan 14, 2024, 11:15 AM"
          color="bg-yellow-100 text-yellow-600"
        />

        <h3 className="text-lg font-semibold mb-4 mt-8">Previous</h3>
        <HistoryItem
          title='Deleted "Old Template.docx"'
          time="Jan 13, 2024, 4:45 PM"
          color="bg-red-100 text-red-600"
        />
      </div>
    </div>
  );
};

const HistoryItem = ({ title, time, color }) => {
  return (
    <div className="flex items-start mb-6">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${color} mr-4`}>
        {/* Could place an icon here if desired */}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800">{title}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <button className="ml-auto text-blue-600 hover:text-blue-700 text-sm font-medium">View</button>
    </div>
  );
};

export default History;
