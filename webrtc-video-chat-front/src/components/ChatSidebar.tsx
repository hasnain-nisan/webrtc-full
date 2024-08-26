import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';

interface ChatItemProps {
    slug: string,
    name: string;
    message: string;
    time: string;
    avatarUrl: string;
    isOnline: boolean;
    isRead: boolean;
}

const ChatItem: React.FC<ChatItemProps> = ({ slug, name, message, time, avatarUrl, isOnline, isRead }) => {
    return (
        <Link to={`/chat-details/${slug}`} key={slug} className="flex items-center p-3 hover:bg-gray-300 cursor-pointer rounded-lg">
          <div className="relative">
              <img className="w-10 h-10 rounded-full" src={avatarUrl} alt={`${name}'s avatar`} />
              {isOnline && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>}
          </div>
          <div className="ml-3 flex-1">
              <div className="flex justify-between">
              <h4 className="text-sm font-medium">{name}</h4>
              <span className="text-xs text-gray-500">{time}</span>
              </div>
              <p className={`text-xs ${isRead ? 'text-gray-500' : 'text-black font-semibold'}`}>{message}</p>
          </div>
        </Link>
    );
};

const ChatSidebar: React.FC = () => {
    const chatItems = [
        { 
          slug: uuidv4(),
          name: 'Lina Ray', 
          message: "Then ok, let's meet with the client tomorrow...", 
          time: '10:36 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg', 
          isOnline: true, 
          isRead: true 
        },
        { 
          slug: uuidv4(),
          name: 'Brad Frost', 
          message: 'Nice to meet you!', 
          time: '10:29 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/75.jpg', 
          isOnline: true, 
          isRead: true 
        },
        { 
          slug: uuidv4(),
          name: 'Paul Irish', 
          message: "That's great, then start working from tomorrow.", 
          time: '09:56 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/52.jpg', 
          isOnline: false, 
          isRead: false 
        },
        { 
          slug: uuidv4(),
          name: 'Jessica Gilroy', 
          message: "That sounds good.", 
          time: '08:30 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg', 
          isOnline: false, 
          isRead: true 
        },
        { 
          slug: uuidv4(),
          name: 'John Doe', 
          message: "Hi sir, the second component will be completed today.", 
          time: '08:36 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/14.jpg', 
          isOnline: true, 
          isRead: false 
        },
        { 
          slug: uuidv4(),
          name: 'Eric Peterson', 
          message: "First of all, meet with the company CEO and BDA.", 
          time: '07:32 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/88.jpg', 
          isOnline: false, 
          isRead: true 
        },
        { 
          slug: uuidv4(),
          name: 'Clara Smith', 
          message: "The project deadline is next Monday.", 
          time: '07:20 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/women/23.jpg', 
          isOnline: true, 
          isRead: false 
        },
        { 
          slug: uuidv4(),
          name: 'Michael Johnson', 
          message: "I'll send the documents later today.", 
          time: '06:45 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/22.jpg', 
          isOnline: true, 
          isRead: true 
        },
        { 
          slug: uuidv4(),
          name: 'Emily Davis', 
          message: "Can we reschedule our meeting?", 
          time: '05:30 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/women/56.jpg', 
          isOnline: false, 
          isRead: false 
        },
        { 
          slug: uuidv4(),
          name: 'David Lee', 
          message: "I have updated the project report.", 
          time: '04:15 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/17.jpg', 
          isOnline: true, 
          isRead: true 
        },
        { 
          slug: uuidv4(),
          name: 'John Doe', 
          message: "Hi sir, the second component will be completed today.", 
          time: '08:36 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/14.jpg', 
          isOnline: true, 
          isRead: false 
        },
        { 
          slug: uuidv4(),
          name: 'Eric Peterson', 
          message: "First of all, meet with the company CEO and BDA.", 
          time: '07:32 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/88.jpg', 
          isOnline: false, 
          isRead: true 
        },
        { 
          slug: uuidv4(),
          name: 'Clara Smith', 
          message: "The project deadline is next Monday.", 
          time: '07:20 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/women/23.jpg', 
          isOnline: true, 
          isRead: false 
        },
        { 
          slug: uuidv4(),
          name: 'Paul Irish', 
          message: "That's great, then start working from tomorrow.", 
          time: '09:56 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/52.jpg', 
          isOnline: false, 
          isRead: false 
        },
        { 
          slug: uuidv4(),
          name: 'Jessica Gilroy', 
          message: "That sounds good.", 
          time: '08:30 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg', 
          isOnline: false, 
          isRead: true 
        },
        { 
          slug: uuidv4(),
          name: 'John Doe', 
          message: "Hi sir, the second component will be completed today.", 
          time: '08:36 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/14.jpg', 
          isOnline: true, 
          isRead: false 
        },
        { 
          slug: uuidv4(),
          name: 'Eric Peterson', 
          message: "First of all, meet with the company CEO and BDA.", 
          time: '07:32 AM', 
          avatarUrl: 'https://randomuser.me/api/portraits/men/88.jpg', 
          isOnline: false, 
          isRead: true 
        },
    ];

    const location = useLocation();
    const isChatDetailsPage = /\/chat-details\/.+/.test(location.pathname);
    

    return (
        <div className={`p-3 bg-white border-r border-gray-200 overflow-auto w-full md:w-[40%] lg:w-[30%] ${isChatDetailsPage ? 'hidden md:block' : ''}`}>
            {chatItems.map((item, index) => (
                <ChatItem key={index} {...item} />
            ))}
        </div>
    );
};

export default ChatSidebar;
