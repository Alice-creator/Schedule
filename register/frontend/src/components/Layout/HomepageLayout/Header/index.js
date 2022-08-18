import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoHome, IoRocket } from 'react-icons/io5'
import { IoMdPeople } from 'react-icons/io'
import {AiOutlineLogout} from 'react-icons/ai'
import { UserContext } from '../../../GlobalStates/UserContext'
import { t } from 'i18next'
import UserHeader from './UserHeader'

import { ExtensionsContext } from '../../../GlobalStates/ExtensionsContext'
import LanguageHeader from './LanguageHeader'


const Header = () => {
  const { user } = useContext(UserContext)
  const { language, setLanguage } = useContext(ExtensionsContext)
  const handleLogOut = () => {
		// removeCookie('access_token', {path: '/'})
    document.cookie = 'access_token' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		window.location.href = '/'
	}
  return (
    <div className='h-24 w-full py-2 flex items-center justify-center '>
        <div className='flex flex-row flex-1 justify-between mx-32 relative'>
          <div className='flex items-center'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'mr-7 font-semibold text-primary text-3xl' : 'mr-7  transition duration-300 text-white hover:text-primary hover:font-semibold'}>
              <div className='flex items-center'> <IoHome size={18} className='mr-3' /> {t("homepage.header.home")} </div>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'mr-7 font-semibold text-primary text-3xl' : 'mr-7  transition duration-300 text-white hover:text-primary hover:font-semibold'}>
              <div className='flex items-center'> <IoMdPeople size={18} className='mr-3' /> {t("homepage.header.about")}</div>
            </NavLink>
            <NavLink to="/algorithm" className={({ isActive }) => isActive ? 'mr-7 font-semibold text-primary text-3xl' : 'mr-7  transition duration-300 text-white hover:text-primary hover:font-semibold'}>
              <div className='flex items-center'> <IoRocket size={18} className='mr-3' />Algorithm</div>
            </NavLink>
          </div>
          <div className='flex items-center'>
            <div className='mr-5'>
              {
                language ? 
                <LanguageHeader setLanguage={setLanguage} en/>
                
                :
                <LanguageHeader setLanguage={setLanguage}/>
                
              }
            </div>
            {user ?           
              <UserHeader user={user}/>
              : 
              <div className=''>
                <Link to='login'>
                  <button className='border-2 border-primary rounded-xl px-8 py-2 tracking-wider text-lg font-semibold text-primary transition duration-300 hover:shadow-headerShadow mx-4'>{t("homepage.header.login")}</button>
                </Link>
                <Link to='signup'>
                  <button className='border-2 border-primary bg-primary rounded-xl px-8 py-2 tracking-wider text-lg font-semibold transition duration-300 hover:shadow-headerShadow text-white'>{t("homepage.header.signup")}</button>
                </Link>
              </div>
            }
          </div>
        </div>    
  
    </div>
  )
}

export default Header