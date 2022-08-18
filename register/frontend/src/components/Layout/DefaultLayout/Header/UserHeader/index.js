import React, { memo, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io"

import { AiOutlineLogout } from 'react-icons/ai'
const UserHeader = ({ user }) => {
    const [ dropdown, setDropdown ] = useState(false)

    const email = user?.email.length > 15 ? user.email.slice(0,16) + '....' : user.email 

    const handleLogOut = () => {
    // removeCookie('access_token', {path: '/'})
        document.cookie = 'access_token' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location.href = '/'
    }

  return (
    <>
    <div
        onMouseMove={() => setDropdown(true)}
        onMouseOut={() => setDropdown(false)}
        className='relative flex items-center justify-center cursor-pointer rounded-2xl py-2 bg-note-3 text-black'
    >
        <div className='px-2'>
            <img className='w-14 h-14 rounded-full' src={user.imageUrl ?user.imageUrl: `https://avatars.dicebear.com/api/micah/${Math.random()}.svg`} />
        </div>
        <div className='flex flex-col'>
            <div className='text-xl font-semibold'>{user.name ? user.name : "Nguyen Van A"}</div>
            <div className='text-base'>{user.email ? email : "you@domain.com"}</div>
        </div>
        <div className='px-2'>
            <IoMdArrowDropdown className={dropdown ? 'duration-300 transform rotate-180' : 'duration-300'} size={18}/>
        </div>
        {dropdown && 
            <div className='scale-up-tr flex flex-col rounded-xl text-black overflow-hidden py-6 bg-notify shadow border-sm border-slate-200 w-80 z-50 absolute top-16 right-0'>
                <div className='mx-4'>
                    <h2 className='text-2xl mb-4 font-semibold'>{user.name}</h2>
                    <div className='h-1 w-full bg-slate-200'></div>
                </div>
                <div className='flex flex-col justify-between h-full'>
                    <div className='text-xl mx-4 '>
                        <div>Email: {user.email}</div>
                    </div>
                    <div
                        onClick={() => handleLogOut()} 
                        className=' flex items-center text-xl mt-4 transition duration-300 hover:bg-slate-200 justify-end p-2'> 
                        <div className='mr-2'>
                            <AiOutlineLogout size={17} /> 
                        </div>
                        <p>Log out</p>
                    </div>
                        
                </div>
                
            </div>
        }
        
    </div>
    
    </>
  )
}

export default memo(UserHeader)