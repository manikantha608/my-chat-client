import { Chat, Clock, DotsThreeVertical, VideoCamera, X } from '@phosphor-icons/react'
import React from 'react'

export default function UserInfo({handletoggleUserInfo}) {
  return (
    <div className='border-l flex flex-col h-full border-stroke dark:border-strokedark'>
      <div className='sticky border-b border-stroke dark:border-strokedark flex flex-row items-center justify-between w-full px-6 py-7.5'>
         <div className='text-black dark:text-white font-semibold text-lg'>
           Profile
         </div>
         <button onClick={handletoggleUserInfo}>
           <X size={24}/>
         </button>
      </div>

      <div className='mx-auto my-8'>
        <img src="https://i.pinimg.com/736x/2a/e0/30/2ae030be9139a963501450e4cd127025.jpg" alt='profile pic' className='w-34 h-34 rounded-lg object-cover object-center'/>
      </div>

      <div className='px-6 space-y-1'>
        <div className='text-black dark:text-white text-xl font-medium'>
          Tony Stark
        </div>
        <span className='text-body text-md'>Iron man</span>
      </div>

      <div className='px-6 my-6'>
        <div className='flex flex-row items-center space-x-2'>
           <Clock size={20}/>
           <div>6:50 AM local time</div>
        </div>
      </div>

      <div className='px-6 flex flex-row space-x-2'>
       <button className='w-full border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row items-center justify-center'>
        <Chat size={20} className='mr-3'/>
        Message
       </button>
       <button className='w-full border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row items-center justify-center'>
        <VideoCamera size={20} className='mr-3'/>
        Video
       </button>
       <button className='w-full border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row items-center justify-center'>
        <DotsThreeVertical size={20} />
       </button>
      </div>
    </div>
  )
}
