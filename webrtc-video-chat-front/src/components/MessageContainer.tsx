import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import ChatHeader from './ChatHeader';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import { useLocation } from 'react-router-dom';

const MessageContainer: React.FC = () => {
    const location = useLocation();
    const isChatDetailsPage = /\/chat-details\/.+/.test(location.pathname);
    return (
        <div className={`md:flex-grow bg-white border-r border-gray-200 overflow-y-scroll h-full ${isChatDetailsPage ? '' : 'hidden md:block'}`}>
            <ChatHeader/>
            <div className="flex-grow p-3">
                <div className="text-center text-sm text-gray-500 mb-4">Tomorrow</div>
                <ChatBubble message="I am refer to the project structure and found some mistakes." isSender={true} time="10:30 AM" />
                <ChatBubble message="There are some bug in that project." isSender={true} time="10:31 AM" />
                <ChatBubble message="I see that Project." isSender={false} time="10:35 AM" avatarUrl="https://randomuser.me/api/portraits/women/68.jpg" />
                <ChatBubble message="Yes, there are many bugs in that project." isSender={false} time="10:36 AM" avatarUrl="https://randomuser.me/api/portraits/women/68.jpg" />

                <div className="text-center text-sm text-gray-500 my-4">Today</div>
                <ChatBubble message="Can you send me the Report?" isSender={true} time="11:00 AM" />
                <ChatBubble message="Hello Sir, How are You?" isSender={true} time="11:05 AM" />
                <ChatBubble message="Hello, I'm Fine. And You?" isSender={false} time="11:06 AM" avatarUrl="https://randomuser.me/api/portraits/women/68.jpg" />

                <div className="text-center text-sm text-gray-500 my-4">Today</div>
                <ChatBubble message="Can you send me the Report?" isSender={true} time="11:00 AM" />
                <ChatBubble message="Hello Sir, How are You?" isSender={true} time="11:05 AM" />
                <ChatBubble message="Hello, I'm Fine. And You?" isSender={false} time="11:06 AM" avatarUrl="https://randomuser.me/api/portraits/women/68.jpg" />

                <div className="text-center text-sm text-gray-500 my-4">Today</div>
                <ChatBubble message="Can you send me the Report?" isSender={true} time="11:00 AM" />
                <ChatBubble message="Hello Sir, How are You?" isSender={true} time="11:05 AM" />
                <ChatBubble message="Hello, I'm Fine. And You?" isSender={false} time="11:06 AM" avatarUrl="https://randomuser.me/api/portraits/women/68.jpg" />
            </div>
            <ChatInput/>
        </div>
    );
};

export default MessageContainer;