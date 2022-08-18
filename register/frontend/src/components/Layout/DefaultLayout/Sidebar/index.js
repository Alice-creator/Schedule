import React, { useContext, useState } from 'react'
import { useTranslation } from "react-i18next"
import { NavLink } from 'react-router-dom'
import Home from "../../../../assets/home.png"
import Saved from "../../../../assets/saved.png"
import Manage from "../../../../assets/manage.png"

import Schedule from "../../../../assets/schedule.png"
import ScheduleWeek from "../../../../assets/scheduleweek.png"
import { IoSettingsOutline } from "react-icons/io5"
import { FiHelpCircle } from "react-icons/fi"
import Dropdown from '../../Dropdown'
import { ExtensionsContext } from '../../../GlobalStates/ExtensionsContext'
import bg from "../../../../assets/BgSignIn.png"
import { UserContext } from '../../../GlobalStates/UserContext'

const Sidebar = () => {
  const { t } = useTranslation()
  const [dropdown, setDropdown] = useState(false)
  const { bgImg, setIsTourOpen } = useContext(ExtensionsContext)
  const { user } = useContext(UserContext)
  const navLinkClass = ({ isActive }) => {
    return isActive ? 'flex items-center p-3 my-3 rounded-lg text-basic text-primary font-semibold bg-primary-color dark:bg-secondary-dark-sidebar dark:text-slate-50' 
                    : 'flex items-center p-3 transition duration-300 my-3 rounded-lg border-2 border-transparent font-semibold text-basic text-primary text-sidebar-text hover:bg-primary-color dark:hover:bg-secondary-dark-sidebar dark:hover:text-slate-50'
  }
  return (
    <div className='sidebar__container relative h-full w-28'>
      <div className=' absolute dark:text-slate-400 text-black h-full w-28'>
        <div className='sidebar__container-fixed w-28 hover:w-lg transition-all duration-500 z-40 bg-white dark:bg-sidebar-darkmode-color fixed h-full border-r-2 border-secondary-sidebar'>
        {bgImg && 
          <img className='w-full h-full object-cover object-center absolute opacity-30 left-0 top-0 z-10' src={bg}/>
        }
          <div className='py-8 px-5 h-screen overflow-y-auto overflow-x-hidden flex flex-col justify-between'>
            <div className='z-20'>
                <NavLink to="/" className={navLinkClass}>
                  <div className='flex'>
                    <img className='w-9 h-9' src={Home} />
                    <div className='sidebar__element duration-200 transition-all'>{t("sidebar.home")}</div>          
                  </div>
                </NavLink>
                <NavLink to="/editor" className={navLinkClass}>
                  <div className='flex '>
                    <img className='w-9 h-9' src={Schedule} />
                    <div className='sidebar__element duration-200 transition-all'>{t("sidebar.schedule")}</div>          
                  </div>        
                </NavLink>
                <NavLink to="/editor/schedule-week" className={navLinkClass}>
                  <div className='flex '>
                    <img className='w-9 h-9' src={ScheduleWeek} />
                    <div className='sidebar__element duration-200 transition-all'>{t("sidebar.schedule week")}</div>          
                  </div>         
                </NavLink>
                <NavLink to="/editor/storage" className={navLinkClass}>          
                  <div className='flex '>
                    <img className='w-9 h-9' src={Saved} />
                    <div className='sidebar__element duration-200 transition-all'>{t("sidebar.storage")}</div>          
                  </div> 
                </NavLink>   
                {user.isAdmin  &&
                  <NavLink to="/editor/manage" className={navLinkClass}>          
                    <div className='flex '>
                      <img className='w-9 h-9' src={Manage} />
                      <div className='sidebar__element duration-200 transition-all'>{t("sidebar.manage")}</div>          
                    </div> 
                  </NavLink>   
                }
                 
            </div>
            <div className='z-20'>
                <div className='px-2 font-semibold support'>{t("sidebar.support")}</div>
                <div className=''>
                  <div className="flex flex-col font-semibold text-basic text-sidebar-text"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >          
                    <div className='flex rounded-lg border-2 border-transparent transition p-3 my-3 duration-300 hover:bg-primary-color dark:hover:bg-secondary-dark-sidebar dark:hover:text-slate-50'>
                      <IoSettingsOutline className='w-9 h-9' color='#325ae7'/>
                      <div className='sidebar__element duration-200 transition-all'>{t("sidebar.setting")}</div>          
                    </div> 
                    {dropdown && <Dropdown sidebar/> }
                  </div>   
    

                  <div className="flex items-center p-3 transition duration-300 my-3 rounded-lg border-2 border-transparent font-semibold text-basic text-sidebar-text hover:bg-primary-color dark:hover:bg-secondary-dark-sidebar dark:hover:text-slate-50"
                  onClick={() => setIsTourOpen(true)}
                  >          
                    <div className='flex '>
                      <FiHelpCircle className='w-9 h-9' color='#325ae7'/>
                      <div className='sidebar__element duration-200 transition-all'>{t("sidebar.help")}</div>          
                    </div> 
                  </div>   
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Sidebar