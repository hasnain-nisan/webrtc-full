import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <div className="h-16 border border-b-1 flex items-center px-5">
            <div className='flex flex-grow items-center gap-5'>
                <div className='p-2 rounded-lg cursor-pointer hover:bg-gray-600 group'>
                    <FaArrowLeftLong fontSize={25} className='text-gray-800 group-hover:text-white'/>
                </div>
                <div>
                    <p className='text-xl tracking-wide'>Messages</p>
                </div>
            </div>
            <div className='p-2 rounded-lg cursor-pointer hover:bg-gray-600 group'>
                <FaBell fontSize={25} className='text-gray-800 group-hover:text-white'/>
            </div>
        </div>
    );
};

export default Header;