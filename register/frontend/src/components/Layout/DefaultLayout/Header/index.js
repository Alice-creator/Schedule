import React, { memo, useContext, useState } from 'react'
import { ExtensionsContext } from '../../../GlobalStates/ExtensionsContext'
import { UserContext } from '../../../GlobalStates/UserContext'
import Toggle from "react-toggle"
import "react-toggle/style.css"

import {  BsMoonFill } from "react-icons/bs"
import { TiAdjustBrightness } from "react-icons/ti"

import UserHeader from './UserHeader'
import NotifyHeader from './NotifyHeader'


const Header = () => {
  const { darkmode, setDarkmode } = useContext(ExtensionsContext)
  // const [ darkmode, setDarkmode ] = useLocalStorage('darkMode', false)
  const { user } = useContext(UserContext)
	
  return (
    <div className='dark:bg-darkmode bg-white shadow-navbar flex justify-end py-2 px-24'>
      <div className='flex items-center'>
        <label>
          <Toggle
            className='toggle'
            defaultChecked={true}
            icons={{
              checked: <BsMoonFill />,
              unchecked: <TiAdjustBrightness />,
            }}
            onChange={() => setDarkmode(!darkmode)} />
        </label>
        <NotifyHeader user={user} />
        <UserHeader user={user}/>
      </div>

    
    </div>
  )
}

export default memo(Header)