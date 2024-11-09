import React from 'react'

export default function UpdatePasswordForm() {
  return (
    <div className='flex flex-col w-full p-4 space-y-6'>
     
      {/* Update password form */}
      <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark md:max-w-150'>
       <form action=''>
         <div className='flex flex-col gap-5.5 p-6.5'>
             {/* Current Password   */}
            <div>
            <label className='md-3 block text-black dark:text-white'>
             Current Password       
            </label>  
            <input
            type='text'
            placeholder='Enter your current password'
            className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'/>      
            </div>

            {/* New password */}
            <div>
            <label className='md-3 block text-black dark:text-white'>
            Chose New Password       
            </label>  
            <input
            type='text'
            placeholder='Enter new password'
            className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'/>      
            </div> 

           {/* Submit */}
           <button type='submit' className='w-full cursor-pointer rounded-lg border border-primary bg-primary py-3 px-6 text-white transition hover:bg-opacity-90'>
            Submit
           </button>
         </div>

       </form>
      </div>
      
    </div>
  )
}
