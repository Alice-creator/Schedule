import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Schedules from "./Schedules"
import Manage from "./Admin/Manage"
import ScheduleWeek from './ScheduleWeek'

import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";
import { ExtensionsContext } from '../components/GlobalStates/ExtensionsContext'
import Storage from './Storage'
import i18n from '../i18next'


const Pages = () => {
  const { darkmode, language } = useContext(ExtensionsContext)

  if(language) {
    i18n.changeLanguage('en')
  } else {
    i18n.changeLanguage('vi')
  }
  return (
    <>
      <Routes>
        <Route index element={<Schedules />} />
        <Route path='schedule-week' element={<ScheduleWeek />} />
        <Route path='manage' element={<Manage />} />
        <Route path='storage' element={<Storage />} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={1500} theme={darkmode ? 'dark' : 'light'} newestOnTop/>
    </>
  )
}

export default Pages