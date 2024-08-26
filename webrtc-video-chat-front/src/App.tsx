import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import ChatSidebar from './components/ChatSidebar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChatInfoSection from './components/ChatInfoSection';
import MessageContainer from './components/MessageContainer';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100 font-poppins">
        <Sidebar />
        <div className="w-full flex flex-col">
          <div className="sticky top-0 z-20">
            <Header />
          </div>
          <div className="flex flex-grow overflow-hidden">
            <ChatSidebar />
            <div className="flex-grow">
              <Routes>
                <Route path="/chat-details/:chatId" element={<MessageContainer />} />
                <Route path="/info" element={<ChatInfoSection />} />
                <Route
                  path="/"
                  element={<MessageContainer />} // Default component for large screens
                />
              </Routes>
            </div>
            <div className="hidden lg:block lg:w-[30%] h-full">
              <ChatInfoSection />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
