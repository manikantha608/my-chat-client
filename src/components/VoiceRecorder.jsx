import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToggleAudioModal } from '../redux/slices/app';
import {AudioRecorder,useAudioRecorder} from "react-audio-voice-recorder"

export default function VoiceRecorder() {
  const dispatch = useDispatch()
  const audioRef = useRef(null);

   const {audio} = useSelector((state)=>state.app.modals);     

console.log("audio",audio)
  
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (audio && keyCode === 27) {
        dispatch(ToggleAudioModal(false)); // Close the GIF modal, no need to pass URL here
      }
    };

    // Add the keydown event listener
    document.addEventListener("keydown", keyHandler);

    // Clean up the event listener on component unmount
    return () => document.removeEventListener("keydown", keyHandler);
  }, [audio, dispatch]); // Add dependencies to prevent unnecessary re-runs


  const recorderControls = useAudioRecorder({
      noiseSuppression:true,
      echoCancellation:true              
  },(err)=>console.log(err)); //onNot allowed Or not found

  const addAudioElement = (blob)=>{
      const url = URL.createObjectURL(blob);

      const audio = document.createElement("audio")
      audio.src=url ;
      audio.controls = true;

      const targetContainer = document.getElementById("audio-container");
      targetContainer.appendChild(audio)
  }
  return (
    <div className={`fixed left-0 top-0 z-9999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-2 py-5 ${
                    audio ? "block":"hidden"
    }`}>
      <div ref={audioRef} className='md:px-17.5 w-100  max-w-142.5 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12'>
        
       <div id='audio-container' className=' flex flex-col space-y-8 items-center '>
         <AudioRecorder
         showVisualizer={true}
         onRecordingComplete={(blob)=>addAudioElement(blob)}
         recorderControls={recorderControls}
         downloadOnSavePress={true}
         downloadFileExtension='mp3'/>

         <div className='flex flex-row items-center space-x-4 w-full mt-8'>
           <button className='w-full bg-primary rounded-lg p-2 text-white hover:bg-opacity-90'>Send</button>
           <button
            onClick={()=>{
               dispatch(ToggleAudioModal(false))     
            }}
            className='w-full border bg-transparent border-red rounded-lg p-2 text-red'>Cancle</button>
         </div>
        </div>           
      </div>
    </div>
  )
}
