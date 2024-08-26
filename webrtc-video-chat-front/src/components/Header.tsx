import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaBell, FaInfoCircle } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { IoCall, IoVideocam } from 'react-icons/io5';

const Header: React.FC = () => {
    const location = useLocation();
    const isChatDetailsPage = /\/chat-details\/.+/.test(location.pathname);
    return (
        <div className="h-16 border border-b-1 flex items-center px-3 bg-white">
            <div className={`${isChatDetailsPage ? 'w-full flex justify-between' : 'hidden'}`}>
                <div className="flex items-center">
                    <div className='p-2 mr-2 rounded-lg cursor-pointer hover:bg-gray-500 group'>
                        <FaArrowLeftLong fontSize={25} className='text-gray-800 group-hover:text-white'/>
                    </div>
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
                    <button className="text-gray-600 hover:text-gray-800">
                        <FaInfoCircle fontSize={22}/>
                    </button>
                </div>
            </div>
            <div className={`${isChatDetailsPage ? 'hidden' : 'flex flex-grow'}`}>
                <div className='flex flex-grow items-center gap-5'>
                    <div className='p-2 rounded-lg cursor-pointer hover:bg-gray-500 group'>
                        <FaArrowLeftLong fontSize={25} className='text-gray-800 group-hover:text-white'/>
                    </div>
                    <div>
                        <p className='text-xl tracking-wide'>Messages</p>
                    </div>
                </div>
                <div className='p-2 rounded-lg cursor-pointer hover:bg-gray-500 group'>
                    <FaBell fontSize={25} className='text-gray-800 group-hover:text-white'/>
                </div>
            </div>
        </div>
    );
};

export default Header;