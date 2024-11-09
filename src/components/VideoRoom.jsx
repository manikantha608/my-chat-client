import { Microphone, MicrophoneSlash, PhoneDisconnect, VideoCamera, VideoCameraSlash } from '@phosphor-icons/react'
import React, { useState } from 'react'

import User1 from "../images/user/user-01.png"
import User2 from "../images/user/user-02.png"
export default function VideoRoom({open,handleClose}) {
  const [muteAudio,setMuteAudio] = useState(false)
  const [muteVideo,setMuteVideo] = useState(false)

  const handleToggleAudio = () =>{
    setMuteAudio(prev=>!prev)
  }
  const handleToggleVideo = () =>{
    setMuteVideo(prev=>!prev)
  }
  return (
    <div className={`fixed left-0 top-0 x-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${open ? "block":"hidden"}`}>
       <div className='w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12'>
         <div className='flex flex-col space-y-6'>
           {/* Video Fedd Grid */}
           <div className='grid grid-cols-2 gap-4 h-50 mb-4'>
            {/* VideoFeed 1 */}
            <div className='relative h-full w-full bg-gray dark:bg-boxdark-2 rounded-md flex items-center justify-center'>
              <div className='space-y-2'>
                <img src={User1} alt=''
                className='h-20 w-20 rounded-full object-center object-cover'/>
                <div className='font-medium text-sm text-center'>You</div>
              </div>

              <div className='absolute top-3 right-4'>
                {muteAudio && (
                  <MicrophoneSlash size={20} className='text-primary'/>
                )}
              </div>
            </div>

            {/* VideoFeed 2 */}
            <div className='relative h-full w-full bg-gray dark:bg-boxdark-2  rounded-md flex items-center justify-center'>
              <div className='space-y-2'>
                <img src={User2} alt=''
                className='h-20 w-20 rounded-full object-center object-cover'/>
                <div className='font-medium text-sm text-center'>Mani Laveti</div>
              </div>

              <div className='absolute top-3 right-4'>
                  <MicrophoneSlash size={20} className='text-primary'/>
              </div>
            </div>
           </div>

           <div className='flex flex-row items-center justify-center space-x-4'>
              {/* Microphone Button */}
              <button
              onClick={handleToggleAudio}
              className='p-3 rounded-md bg-gray dark:bg-boxdark text-black dark:text-white hover:border-opacity-80 items-center justify-center'>
               {muteAudio ? (
                <MicrophoneSlash size={20}/>
               ):(
                <Microphone size={20}/>
               )}
              </button>

              {/* Disconnect Button */}
               <button
               onClick={handleClose}
               className='p-3 rounded-full bg-red text-white hover:bg-opacity-80'>
               <PhoneDisconnect size={20}/>
               </button>
              {/* Video Button */}
              <button
              onClick={handleToggleVideo}
              className='p-3 rounded-md bg-gray dark:bg-boxdark text-black dark:text-white hover:border-opacity-80 items-center justify-center'>
               {muteVideo ? (
                <VideoCameraSlash size={20}/>
               ):(
                <VideoCamera size={20}/>
               )}
              </button>
           </div>

         </div>
       </div>
    </div>
  )
}
