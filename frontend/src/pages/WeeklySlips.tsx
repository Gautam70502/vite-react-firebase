
import React from 'react';

const WeeklySlips = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Weekly Slips</h1>
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Track Your Weekly Activities</h2>
          <p className="text-gray-600 mb-4">
            Use this page to submit and track your weekly business and networking activities. 
            Regular submissions help measure your engagement and progress within the GPS network.
          </p>
          <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mb-6">
            <p className="text-sm text-blue-700">
              Weekly slip submissions are due every Friday by 5:00 PM.
            </p>
          </div>
          <button className="bg-gps-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Submit New Weekly Slip
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Previous Submissions</h2>
          <p className="text-gray-500 italic">No previous submissions found.</p>
        </div>
      </div>
    </div>
  );
};

export default WeeklySlips;
