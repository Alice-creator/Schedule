import React from 'react'


const SignInLayout = ({ children }) => {
  
  return (
    <div className='flex justify-center items-center bg-primary-background-color fixed p-80 top-0 bottom-0 left-0 right-0'>
      <div className='w-full'> 
        {children}
      </div>      
    </div>
  )
}

export default SignInLayout