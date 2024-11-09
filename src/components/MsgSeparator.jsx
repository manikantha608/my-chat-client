
import React from 'react'

export default function MsgSeparator({data}) {
  return (
    <div className='flex flex-row items-center space-x-5 w-full py-2'>
      <div className='border-b border-stroke dark:border-strokedark grow'></div>
      <div className='p-2 bg-gray dark:bg-boxdark-2 rounded-md text-xs text-bod font-medium'>
        Today
      </div>
      <div className='border-b border-stroke dark:border-strokedark grow'></div>
    </div>
  )
}
