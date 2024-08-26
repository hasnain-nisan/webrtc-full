import React from 'react';
import { FaUserFriends, FaHeart } from 'react-icons/fa';

const ChatInfoSection: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-md shadow-sm h-full">
      {/* Options */}
      <div className="mb-6">
        <div className="flex items-center mb-3 cursor-pointer">
          <FaUserFriends className="text-gray-500 mr-2" />
          <span className="text-gray-700">View Friends</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <FaHeart className="text-gray-500 mr-2" />
          <span className="text-gray-700">Add to Favorite</span>
        </div>
      </div>

      {/* Attachments */}
      <div>
        <h3 className="text-gray-700 font-semibold mb-3">Attachments</h3>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-blue-100 rounded-md flex justify-center items-center h-16 cursor-pointer">
            <span className="text-blue-700 font-medium">PDF</span>
          </div>
          <div className="bg-blue-100 rounded-md flex justify-center items-center h-16 cursor-pointer">
            <span className="text-blue-700 font-medium">Video</span>
          </div>
          <div className="bg-blue-100 rounded-md flex justify-center items-center h-16 cursor-pointer">
            <span className="text-blue-700 font-medium">MP3</span>
          </div>
          <div className="bg-blue-100 rounded-md flex justify-center items-center h-16 cursor-pointer">
            <span className="text-blue-700 font-medium">Image</span>
          </div>
        </div>
        <button className="text-blue-600 border border-blue-600 rounded-full px-3 py-1 text-sm">
          View All
        </button>
      </div>
    </div>
  );
};

export default ChatInfoSection;
