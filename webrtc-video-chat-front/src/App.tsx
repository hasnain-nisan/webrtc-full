
import Chat from './Chat'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Messages from './page/Messages'
import VideoChat from './VideoChat'

function App() {

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar/>
      <div className='w-full flex flex-col'>
        <Header/>
        <div className='flex w-full'>
          <div className='hidden md:block w-[35%] lg:w-[25%]'>
            msgSidebar
          </div>
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
