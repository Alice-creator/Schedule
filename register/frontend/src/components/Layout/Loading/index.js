import React from 'react'
import loading from '../../../assets/loading.gif'
const Loading = () => {
  return (
    <div className='fixed flex top-0 right-0 bottom-0 left-0 bg-white dark:bg-darkmode z-50'>
    <div className='m-auto flex flex-col justify-center'>
      <img className='w-32 h-32' src={loading} />
      <div className='text-black dark:text-white text-3xl'>Loading.....</div>
    </div>

    </div>
  )
}

export default Loading
