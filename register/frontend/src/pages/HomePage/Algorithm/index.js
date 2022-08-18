import React from 'react'

const Algorithm = () => {
  return (
    <div className='flex m-auto'>
      <div className='flex justify-between'>
        <div className='flex flex-col p-2 bg-white w-80 h-80 rounded-xl relative mx-8'> 
          <div className='z-10 flex justify-center absolute' style={{transform: "translate(50%,-50%)"}}>
            <img className='w-24 h-24 rounded-full bg-primary overflow-hidden' src="https://avatars.dicebear.com/api/micah/0.7.svg" />
          </div>
          <div className='absolute flex flex-col mt-20 mx-4'>
            <div className='text-primary text-black'>Name: <b>Huỳnh Ngọc Vy</b> </div>
            <div className='text-primary text-black'>Major: <b>Computer Science</b> </div>
          </div>
        </div>
        <div className='flex flex-col p-2 bg-white w-80 h-80 rounded-xl relative mx-8'> 
          <div className='z-10 flex justify-center absolute' style={{transform: "translate(50%,-50%)"}}>
            <img className='w-24 h-24 rounded-full bg-primary overflow-hidden' src="https://avatars.dicebear.com/api/micah/0.7.svg" />
          </div>
          <div className='absolute flex flex-col mt-20 mx-4'>
            <div className='text-primary text-black'>Name: <b>Đặng Quốc Lộc</b> </div>
            <div className='text-primary text-black'>Major: <b>Computer Science</b> </div>
          </div>
        </div>
        <div className='flex flex-col p-2 bg-white w-80 h-80 rounded-xl relative mx-8'> 
          <div className='z-10 flex justify-center absolute' style={{transform: "translate(50%,-50%)"}}>
            <img className='w-24 h-24 rounded-full bg-primary overflow-hidden' src="https://avatars.dicebear.com/api/micah/0.7.svg" />
          </div>
          <div className='absolute flex flex-col mt-20 mx-4'>
            <div className='text-primary text-black'>Name: <b>Đinh Ngọc Thủy Tiên</b> </div>
            <div className='text-primary text-black'>Major: <b>Software Technology</b> </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Algorithm