import React, { useContext, useState } from 'react'
import Modal from 'react-modal';
import { CirclePicker } from 'react-color'
import { UserContext } from '../../../components/GlobalStates/UserContext';
import Select from 'react-select';
import axios from 'axios';
import { reminderOptions } from '../../../data/ReminderSections';

import { toast } from 'react-toastify';

import { IoNotificationsOutline, IoColorPaletteOutline, IoTimeOutline } from 'react-icons/io5'
import { IoIosCalendar } from 'react-icons/io'
import { constants } from '../../../constants';
import { t } from 'i18next';

const Modals = ({ modal, setModal }) => {
  const { user } = useContext(UserContext)
  const [ activities, setAcitivities ] = useState({
    title: '',
    date: new Date(),
    reminder: true,
    color: 'transparent',
    start: '',
    end: '',
    description: ''

  })
  const handleChange = (e) => {
    setAcitivities((prev) =>({...prev, [e.target.id] : e.target.value}))
  }
  console.log(activities);
  const handleCheckActivity = (act) => {
    if(act.title) {
      toast.error('Bạn chưa điền')
      return false
    }
  }
  const handleSubmit = async () => {
    handleCheckActivity(activities)
    const config  = {
      method: 'PUT',
      url: 'users/activity',
      data: activities,
      params: { email:  user.email},
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // Authorization: `Bearer ${cookies.token}`,
      }
    }
    const { data } = await axios(config)
    setModal(false)
    window.location.reload()
  }
  return (
    <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={constants.customStyles}
        // contentLabel="Example Modal"
      >
      <h2 className='text-3xl font-semibold'>{t("scheduleWeek.createTask.title")}</h2>
      <div className='text-basic'>
        <input type='text' 
          id='title'
          onChange={(e) => handleChange(e)} 
          placeholder={t("scheduleWeek.createTask.inputTitle")} 
          className='outline-none text-slate-700 text-3xl mb-4 w-full border-b-2 border-slate-700 tracking-wide py-2 transition-all ease-out duration-200 active:border-primary hover:border-primary' 
        />
        <div className='my-2'>
          <div className='flex items-center mb-2 text-basic font-medium'>
            {t("scheduleWeek.createTask.reminder")}
          </div>
          <Select
              onChange={(e) => setAcitivities((prev) => ({...prev, reminder: e.value}))}
              // components={makeAnimated()}
              defaultValue={activities.reminder}
              options={reminderOptions}
            />
        </div>
        <div className='my-2 flex justify-between w-full items-center'>
          <div className='flex items-center mb-2 text-basic font-medium'>
            {t("scheduleWeek.createTask.color")}
          </div>
          <div className=''>
            <CirclePicker
              onChangeComplete={(color) => setAcitivities((prev) =>({...prev, color : color.hex}))}
              colors = {['#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB']}
              circleSize = {19}
              circleSpacing = {10}
            />
          </div>
        </div>
        <div className='my-2 flex flex-row justify-between'>
          <label htmlFor='date' className='flex items-center text-basic font-medium'> {t("scheduleWeek.createTask.date")}</label>
          <input type='date' id='date' onChange={(e) => handleChange(e)} />
        </div>
        <div className='my-2 flex justify-between'>
          <div className='flex flex-col'>
            <label htmlFor='start' name='start' className='flex items-center text-basic font-medium'> {t("scheduleWeek.createTask.start")}</label>
            <input type='time' id='start' name='start' onChange={(e) => handleChange(e)} />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='end' className='flex items-center text-basic font-medium'> {t("scheduleWeek.createTask.end")}</label>
            <input type='time' id='end' onChange={(e) => handleChange(e)} />
          </div>
        </div>
        <div>
          <label htmlFor='desc' className='flex items-center text-basic font-medium'> {t("scheduleWeek.createTask.desc")}</label>
          <textarea className='w-full h-24 outline-slate-300 border-slate-200 border p-2' id='description'
                    onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
      </div>
      <div className='flex justify-end mt-5'>
        <button className='bg-zinc-600 text-white ml-3 py-1 px-5 text-basic font-medium tracking-wide rounded-lg'
          onClick={() => setModal(false)}
        >{t("scheduleWeek.createTask.cancel")}</button>
        <button className='bg-primary text-white ml-3 py-1 px-5 text-basic font-medium tracking-wide rounded-lg'
          onClick={handleSubmit}
        >{t("scheduleWeek.createTask.create")}</button>

      </div>
      </Modal>
  )
}

export default Modals