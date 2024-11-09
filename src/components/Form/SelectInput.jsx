import { CaretDown, Globe } from '@phosphor-icons/react'
import React, { useState } from 'react'

export default function SelectInput() {
   const [selectedOption,setSelectedOption] = useState("");
   const [isOptionSelected,setIsOptionSelected] = useState(false) 
   
   const changeTextColor = () =>{
      setIsOptionSelected(true)              
   }
  return (
    <div>
      <label className='mb-3 block text-black dark:text-white'>
         Select Country           
      </label>

      <div className='relative z-20 bg-white dark:bg-form-input'>
        <span className='absolute top-1/2 left-4 -translate-y-1/2'>
           <Globe size={20}/>
        </span>

        <select
        value={selectedOption}
        onChange={(e)=>{
         setSelectedOption(e.target.value);
         changeTextColor();
        }}
        className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-12 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${isOptionSelected  ? "text-black dark:text-white":""}`}>
        <option value="" disabled className='text-body dark:text-bodydark'> Select Country</option>
        <option value="India"  className='text-body dark:text-bodydark'> India</option>
        <option value="USA"  className='text-body dark:text-bodydark'> USA</option>
        <option value="Russia"  className='text-body dark:text-bodydark'> Russia</option>
        </select>

        <span className='absolute top-1/2 right-4 z-10 -translate-y-1/2'>
           <CaretDown size={20}/>         
        </span>
      </div>
    </div>
  )
}
