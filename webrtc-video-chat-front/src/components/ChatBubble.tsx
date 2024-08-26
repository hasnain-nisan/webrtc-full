import React from 'react';

interface ChatBubbleProps {
  message: string;
  isSender: boolean;
  time: string;
  avatarUrl?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isSender, time, avatarUrl }) => {
  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isSender && (
        <img src={avatarUrl} alt="User" className="w-8 h-8 rounded-full mr-2 self-end" />
      )}
      <div className={`max-w-xs ${isSender ? 'bg-blue-300' : 'bg-gray-300'} p-3 rounded-lg text-black'}`}>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
