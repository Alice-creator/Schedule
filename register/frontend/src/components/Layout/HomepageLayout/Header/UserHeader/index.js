import React, { useState } from 'react'

const UserHeader = ({ user }) => {
    const [ profile, setProfile ] = useState(false)
  return (
    <div className='flex relative text-basic items-center text-black font-semibold ml-2'
        onMouseEnter={() => setProfile(true)}
        onMouseLeave={() => setProfile(false)}
    >
        <div className='px-2'>
            <img className='w-14 h-14 rounded-full bg-white' src={user.imageUrl ?user.imageUrl: `https://avatars.dicebear.com/api/micah/${Math.random()}.svg`} />
        </div>
        {profile &&
            <div className='flex flex-col py-4 px-6 border-2 rounded-lg absolute right-0 top-14 bg-notify'>
                <div className='text-2xl font-semibold'>{user.name}</div>
                <div className='text-base text-gray-400'>{user.email}</div>
            </div>
        }
    </div>
  )
}

export default UserHeader