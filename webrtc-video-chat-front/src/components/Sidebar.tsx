import React from 'react';
import { FaTachometerAlt } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";
import { IoChatbubbles } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

interface SidebarItemProps {
    icon: React.ReactNode;
    isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, isActive = false }) => (
    <div className={`p-1 rounded-lg cursor-pointer ${isActive ? 'bg-indigo-500' : 'hover:bg-gray-600'}`}>
        {icon}
    </div>
);

const Sidebar: React.FC = () => {
    return (
        <div className="hidden w-16 bg-gray-900 text-white lg:flex flex-col items-center justify-center py-4 space-y-6">
            <SidebarItem icon={<FaTachometerAlt fontSize={25}/>} />
            <SidebarItem icon={<IoChatbubbleSharp fontSize={25}/>} isActive={true} />
            <SidebarItem icon={<IoChatbubbles fontSize={25}/>} />
            <SidebarItem icon={<FaUserCircle fontSize={25}/>} />
            <SidebarItem icon={<IoSettingsSharp fontSize={25}/>} />
        </div>
    );
};

export default Sidebar;