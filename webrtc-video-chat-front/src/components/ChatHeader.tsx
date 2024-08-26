import React from 'react';
import { IoVideocam } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const ChatHeader: React.FC = () => {
  return (
    <div className="hidden md:flex items-center justify-between p-3 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-10 h-10 rounded-full" />
        <div className="ml-3">
          <h4 className="text-lg font-semibold">Dianne Vanhorn</h4>
          <p className="text-sm text-green-500">Online</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
            <IoCall fontSize={22}/>
        </button>
        <button className="text-gray-600 hover:text-gray-800">
            <IoVideocam fontSize={22}/>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
