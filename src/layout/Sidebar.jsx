import React, { useState } from 'react'
import {Chat, ChatTeardropText, DotsThreeCircle, Shapes, UserCircle,Users} from "@phosphor-icons/react"
import { SignOut } from '@phosphor-icons/react/dist/ssr'
// import DarkModeSwitcher from '../../components/DarkModeSwitcher'
import DarkModeSwitcher from '../components/DarkModeSwitcher'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Navigation=[
    {
      key:0,
      title:"DMs",
      icon:<Chat size={24}/>,
      path:"/dashboard"
    },
    {
      key:1,
      title:"Profile",
      icon:<UserCircle size={24}/>,
      path:"/dashboard/profile"
    },
    {
      key:2,
      title:"Groups",
      icon:<Users size={24}/>
    },
    {
      key:3,
      title:"More",
      icon:<DotsThreeCircle size={24}/>
    }
  ]

export default function Sidebar() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [selected,setSelected] = useState(0);

  const handleClick = (key)=>{

    navigate(Navigation[key].path)  
             
    setSelected(key)
  }

  
  return (
    <div className='flex flex-col border-r border-stroke p-2 dark:border-strokedark'>

      <div className='flex flex-col items-center space-y-5'>
        {/* <div className='space-y-2 flex flex-col text-center'>
          <div className='mx-auto border rounded-md border-stroke p-2 dark:border-strokedark'>
           <Shapes size={24}/>
          </div>
          <span className='font-medium text-sm'>Workspace</span>
        </div> */}
        <ChatTeardropText size={32} weight='bold' className='text-primary'/>

        {
          Navigation.map(({icon,key,title})=>{
            return <>
            <div key={key} className='space-y-2 flex flex-col text-center hover:cursor-pointer hover:text-primary' onClick={()=>{handleClick(key)}}>
              <div className={`mx-auto border rounded-md border-stroke p-2 dark:border-strokedark ${selected === key && "bg-primary bg-opacity-90 text-white"} hover:border-primary dark:hover:border-primary`}>
                {icon}
              </div>
              <span className={`font-medium text-sm ${selected === key && "text-primary"}`}>{title}</span>
            </div>
            </>
          })
        }
      </div>

      <div className='flex flex-col grow'> </div>

      <div className='space-y-4.5'>
        <div className='flex flex-row items-center justify-center'>
        <DarkModeSwitcher/>
        </div>
        
      <button onClick={()=>{navigate("/")}} className='w-full flex flex-row items-center justify-center border rounded-md border-stroke p-2 dark:border-strokedark hover:bg-stone-100 hover:cursor-pointer'>
         <SignOut size={24}/>         
      </button>            
      </div>
    </div>
  )
}