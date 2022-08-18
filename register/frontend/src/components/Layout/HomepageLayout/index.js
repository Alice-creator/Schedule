import React, { useContext } from 'react'
import { ExtensionsContext } from '../../GlobalStates/ExtensionsContext'
import Header from './Header'

const HomepageLayout = ({ children }) => {
  const { darkmode } = useContext(ExtensionsContext)
  return (
    <div className={darkmode ? "dark": ""}>
      <div className='flex flex-col h-screen bg-primary-color dark:bg-blue-400'>
          <Header />
          <div className='bg-basic-home flex h-full dark:bg-darkmode'>
              { children }
          </div>
      </div>
    </div>
  )
}

export default HomepageLayout