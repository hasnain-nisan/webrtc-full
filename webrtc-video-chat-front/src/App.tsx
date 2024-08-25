
import Chat from './Chat'
import ChatSidebar from './components/ChatSidebar'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Messages from './page/Messages'
import VideoChat from './VideoChat'

function App() {

  return (
    <div className="flex h-screen bg-gray-100 font-poppins">
      <Sidebar/>
      <div className='w-full flex flex-col'>
        <Header/>
        <div className='flex w-full h-full'>
          <ChatSidebar/>
          <div className='flex-grow'>
            msgContainer
          </div>
          <div className='hidden lg:block lg:w-[25%]'>
            info div
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
