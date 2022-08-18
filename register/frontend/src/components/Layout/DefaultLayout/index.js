import React, { useContext, useEffect, useRef } from 'react'
import { ExtensionsContext } from '../../GlobalStates/ExtensionsContext'
import Header from './Header'
import Sidebar from './Sidebar'

const DefaultLayout = ({ children }) => {
  const { darkmode } = useContext(ExtensionsContext)
  
  return (
    
    <div className={darkmode ? "dark": ""}>
      <div className='flex relative w-full dark:bg-darkmode'>
        <Sidebar />
        <div className='flex flex-col float-right flex-1 bg-blue-50 dark:bg-darkmode dark:text-slate-50 min-h-screen'>
            <Header />
            <div className="">
                { children }
            </div>
        </div>
      </div>

    </div>
  )
}

export default DefaultLayout