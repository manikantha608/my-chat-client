import React, { useState } from "react";
import User1 from "../../images/user/user-01.png"
import {DotsThree, Gif, LinkSimple, Microphone, PaperPlaneTilt, Phone, Smiley, VideoCamera} from "@phosphor-icons/react"
import Dropdown from "../../components/Dropdown";
import EmojiPicker from "../../components/EmojiPicker";
import UserInfo from "./UserInfo";
import Giphy from "../../components/Giphy";
import { ToggleAudioModal } from "../../redux/slices/app";
import { useDispatch } from "react-redux";
import Attachment from "../../components/Attachment";
import MsgSeparator from "../../components/MsgSeparator";
import TypingIndicator from "../../components/TypingIndicator";
import { DocumentMessage, MediaMessage, TextMessage, VoiceMessage } from "../../components/Messages";
import Document from "../../components/Messages/Document";
import VideoRoom from "../../components/VideoRoom";
import AudioRoom from "../../components/AudioRoom";

export default function Inbox() {

  const [videoCall,setVideoCall] = useState(false)
  const [audioCall,setAudioCall] = useState(false)
  const dispatch = useDispatch()
  console.log(dispatch,"DD")
  const [userInfoOpen,setUserInfoOpen] = useState(false);
   
  const [gifOpen,setGifOpen] = useState(false)
  const handletoggleUserInfo = () =>{
    setUserInfoOpen((prev)=>!prev)
  }
  const handleToggleGif = (e)=>{
    e.preventDefault();
    setGifOpen((prev)=>!prev)
  }

  const handleMicClick = (e)=>{
    e.preventDefault();
    console.log(dispatch(ToggleAudioModal(true)))
  }
  const handleToggleVedio = ()=>{
     setVideoCall((prev)=>!prev)
  }
  const handleToggleAudio = ()=>{
    console.log("my audio",audioCall)
    setAudioCall((prev)=>!prev)
 }
  return (
    <>
    <div className={`flex h-full flex-col border-l border-stroke dark:border-strokedark xl:w-3/4 ${userInfoOpen ? "xl:w-1/2" : "xl:w-3/4"}`}>
     {/* Chat header */}
      <div className="sticky flex items-center flex-row justify-between border-b border-stroke dark:border-strokedark px-6 py-4.5">
        <div className="flex items-center" onClick={handletoggleUserInfo}>
          <div className="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full">
             <img src={User1} alt="avatar" className="h-full w-full object-cover object-center"/>
          </div>
          <div>
              <h5 className="font-medium text-black dark:text-white">Mani Laveti</h5>      
              <p className="text-sm">Reply to message</p>
          </div>
        </div>

        <div className="flex flex-row items-center space-x-8">
          <button onClick={handleToggleVedio}>
            <VideoCamera size={24}/>
          </button>
          <button onClick={handleToggleAudio}>
            <Phone size={24}/>
          </button>
            <Dropdown/>        
        </div>
      </div>

      {/* List of messages */}
      <div className="max-h-full space-y-3.5 overflow-auto no-scrollbar px-6 py-7.5 grow">
       <TextMessage author="Mani Laveti"
       content="Hi.,This is dummy content for checking msg https://www.npmjs.com/" read_receipt="delivered" incoming={false} timestamp="2:44pm"/>

       <div className="max-w-125 ml-auto">
         <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 dark:bg-boxdark-2">
           <p className="text-white"> ok ,please wait I  will check your appointment..!</p>
         </div>
         <p className="text-xs">1:58pm</p>
       </div>

       <div className="max-w-125">
         <p className="mb-2.5 text-sm font-medium">Ravi kumar</p>
         <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
           <p>I want to make an appointment tomorrow from 2:00 pm to 5:00?</p>
         </div>
         <p className="text-xs">1:55pm</p>
       </div>

       <div className="max-w-125 ml-auto">
         <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 dark:bg-boxdark-2">
           <p className="text-white"> ok ,please wait I  will check your appointment..!</p>
         </div>
         <p className="text-xs">1:58pm</p>
       </div>

       <MsgSeparator/>
       <div className="max-w-125">
         <p className="mb-2.5 text-sm font-medium">Ravi kumar</p>
         <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
           <p>I want to make an appointment tomorrow from 2:00 pm to 5:00?</p>
         </div>
         <p className="text-xs">1:55pm</p>
       </div>
       
        <DocumentMessage author="Mani Laveti" incoming={false} read_receipt="delivered" timestamp="4:23pm"/>
       <div className="max-w-125 ml-auto">
         <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 dark:bg-boxdark-2">
           <p className="text-white"> ok ,please wait I  will check your appointment..!</p>
         </div>
         <p className="text-xs">1:58pm</p>
       </div>
       <MediaMessage assets={[]} author="Tony stark" caption="This is a beautiful car" incoming={false} timestamp={"5.32pm"} read_receipt="sent"/>
       <div className="max-w-125">
         <p className="mb-2.5 text-sm font-medium">Ravi kumar</p>
         <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
           <p>I want to make an appointment tomorrow from 2:00 pm to 5:00?</p>
         </div>
         <p className="text-xs">1:55pm</p>
       </div>

       <VoiceMessage author="Mani Laveti" incoming={false} read_receipt="read" timestamp="6:10pm"/>

       <div className="max-w-125 ml-auto">
         <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 dark:bg-boxdark-2">
           <p className="text-white"> ok ,please wait I  will check your appointment..!</p>
         </div>
         <p className="text-xs">1:58pm</p>
       </div>

       <TypingIndicator/>
      </div>
      

      {/* Input */}
      <div className="sticky bottom-0 border-t border-stroke bg-white px-6 py-5 dark:border-strokedark dark:bg-boxdark">
          <form className="flex items-center justify-between space-x-4.5">
             <div className=" relative w-full">
               <input type="text" placeholder="Type something here" className="h-13 w-full rounded-md border border-stroke bg-gray pl-5 pr-19 text-black placeholder-body outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2 dark:text-white"/>    
               <div className="absolute right-5 top-1/2 -translate-y-1/2 items-center justify-end space-x-4">
               <button onClick={handleMicClick} className="hover:text-primary">
                <Microphone size={22}/>
               </button>
               <button className="hover:text-primary">
                <Attachment/>
               </button>
               <button onClick={handleToggleGif} className="hover:text-primary">
                <Gif size={22}/>
               </button>
               <button className="hover:text-primary">
                <EmojiPicker size={22}/>
               </button>
               </div> 
             </div>  
             <button className="flex items-center justify-center h-13 max-w-13 w-full rounded-md bg-primary text-white hover:bg-opacity-90">
               <PaperPlaneTilt size={24} weight="bold"/>
             </button>     
          </form> 

          {gifOpen && <Giphy/>}         
      </div>
    </div>
    
    {videoCall && <VideoRoom open={videoCall} handleClose={handleToggleVedio}/>}
    {audioCall && <AudioRoom open={audioCall} handleClose={handleToggleAudio}/>}
    {userInfoOpen && (
      <div className="w-1/4">
        <UserInfo handletoggleUserInfo={handletoggleUserInfo}/>
      </div>
    )}
    </>
  );
}
