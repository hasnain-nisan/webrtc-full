import React from 'react';
import { FaMicrophone } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa6";
import { MdCameraAlt } from "react-icons/md";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";

const ChatInput: React.FC = () => {
  return (
    <div className="flex items-center p-3 bg-white border-t border-gray-200">
        <button className="text-gray-500 hover:text-gray-600">
            <FaMicrophone fontSize={20}/>
        </button>
        <input type="text" placeholder="Write Something..." className="flex-grow mx-3 p-2  rounded-lg focus:outline-none" />
        <div className='flex gap-2'>
            <button className="text-gray-500 hover:text-gray-600">
                <FaPaperclip fontSize={20}/>
            </button>
            <button className="text-gray-500 hover:text-gray-600">
                <MdCameraAlt fontSize={20}/>
            </button>
            <button className="text-gray-500 hover:text-gray-600">
                <FaRegFaceSmileBeam fontSize={20}/>
            </button>
            <button className="text-blue-500 hover:text-blue-600">
                <FaPaperPlane fontSize={20}/>
            </button>
        </div>
    </div>
  );
};

export default ChatInput;
