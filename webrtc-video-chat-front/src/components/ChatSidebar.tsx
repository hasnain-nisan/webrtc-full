import React from 'react';

interface ChatItemProps {
    name: string;
    message: string;
    time: string;
    avatarUrl: string;
    isOnline: boolean;
    isRead: boolean;
}

const ChatItem: React.FC<ChatItemProps> = ({ name, message, time, avatarUrl, isOnline, isRead }) => {
    return (
        <div className="flex items-center p-3 hover:bg-gray-100 cursor-pointer">
        <div className="relative">
            <img className="w-10 h-10 rounded-full" src={avatarUrl} alt={`${name}'s avatar`} />
            {isOnline && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>}
        </div>
        <div className="ml-3 flex-1">
            <div className="flex justify-between">
            <h4 className="text-sm font-medium">{name}</h4>
            <span className="text-xs text-gray-500">{time}</span>
            </div>
            <p className={`text-sm ${isRead ? 'text-gray-500' : 'text-black font-semibold'}`}>{message}</p>
        </div>
        </div>
    );
};

const ChatSidebar: React.FC = () => {
    const chatItems = [
        { 
          name: 'Lina Ray', 
          message: "Then ok, let's meet with the client tomorrow...", 
          time: '10:36 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg', 
          isOnline: true, 
          isRead: true 
        },
        { 
          name: 'Brad Frost', 
          message: 'Nice to meet you!', 
          time: '10:29 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/75.jpg', 
          isOnline: true, 
          isRead: true 
        },
        { 
          name: 'Paul Irish', 
          message: "That's great, then start working from tomorrow.", 
          time: '09:56 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/52.jpg', 
          isOnline: false, 
          isRead: false 
        },
        { 
          name: 'Jessica Gilroy', 
          message: "That sounds good.", 
          time: '08:30 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg', 
          isOnline: false, 
          isRead: true 
        },
        { 
          name: 'John Doe', 
          message: "Hi sir, the second component will be completed today.", 
          time: '08:36 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/14.jpg', 
          isOnline: true, 
          isRead: false 
        },
        { 
          name: 'Eric Peterson', 
          message: "First of all, meet with the company CEO and BDA.", 
          time: '07:32 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/88.jpg', 
          isOnline: false, 
          isRead: true 
        },
        { 
          name: 'Clara Smith', 
          message: "The project deadline is next Monday.", 
          time: '07:20 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/women/23.jpg', 
          isOnline: true, 
          isRead: false 
        },
        { 
          name: 'Michael Johnson', 
          message: "I'll send the documents later today.", 
          time: '06:45 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/22.jpg', 
          isOnline: true, 
          isRead: true 
        },
        { 
          name: 'Emily Davis', 
          message: "Can we reschedule our meeting?", 
          time: '05:30 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/women/56.jpg', 
          isOnline: false, 
          isRead: false 
        },
        { 
          name: 'David Lee', 
          message: "I have updated the project report.", 
          time: '04:15 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/17.jpg', 
          isOnline: true, 
          isRead: true 
        }
    ];
      

    return (
        <div className="hidden md:block w-80 p-5 bg-white border-r border-gray-200 overflow-y-scroll h-full">
            {chatItems.map((item, index) => (
                <ChatItem key={index} {...item} />
            ))}
        </div>
    );
};

export default ChatSidebar;
