import React, { useEffect, useState } from 'react'
import { BsBell } from "react-icons/bs"
import moment from 'moment'
import axios from 'axios'
import ModalTimetable from '../../../../ModalTimetable'
import { TbTrash } from 'react-icons/tb'
import { t } from 'i18next'

const NotifyHeader = ({ user }) => {
  const [ isNotify, setIsNotify ] = useState(false)

  const [ notifications, setNotifications ] = useState([])
    // handleReminder(user)
    useEffect(() => {
        const getNotify = async () => {

            const config = {
                method: 'GET',
                url: 'users/notify',
                params: { email: user.email },
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    // Authorization: `Bearer ${cookies.token}`,
                },
            }
            const { data } = await axios(config)
            setNotifications(data)
        }
        getNotify()
    }, [])
    const [modalTimeTable, setModalTimeTable] = useState(false)
    const [ chooseNotify, setChooseNotify ] = useState()
    const handleIsModal = (value) => {
        setChooseNotify(value?.timetable)
        setModalTimeTable(true)    
    }
    const handleDeleteAllNotify = async () => {
        const config = {
            method: 'PUT',
            url: 'users/delete/notify',
            params: { email: user.email },
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            }
        }
        const { data } = await axios(config)
    }
//   moment(blog.published).startOf('ss').fromNow()
  return (
    <>
        <div className='relative px-2 border-2 border-slate-900 dark:border-slate-50 text-basic rounded-full w-12 h-12 mx-6 flex justify-center items-center'
            onMouseMove={() => setIsNotify(true)}
            onMouseOut={() => setIsNotify(false)}
        >
            <BsBell size={18} />
            {notifications.length > 0 && (
                <div className='absolute -top-4 -right-2 bg-red-600 text-white text-center rounded-full text-lg w-7 h-w-7'>{notifications.length}</div>
            )}
            {isNotify &&
                <div className='scale-up-tr rounded-xl overflow-hidden py-6 px-4 flex flex-col bg-notify shadow border-sm border-slate-200 w-xl h-xl overflow-x-hidden overflow-y-auto z-50 absolute top-11 right-0'>
                    <div className='flex justify-between'>
                        <h2 className='text-2xl mb-4 font-semibold text-black'>{t("notify.title")}</h2>
                        <div className='text-black cursor-pointer'
                            onClick={handleDeleteAllNotify}
                        >
                            <TbTrash size={20} /> 
                        </div>
                    </div>
                    {notifications.length == 0 &&
                        <div className='m-auto text-2xl'>{t("notify.remind")}</div>
                    }
                    {notifications?.map((value) => (
                        <div className='w-full rounded-lg my-2 flex flex-col hover:bg-note-3 border cursor-pointer'
                            onClick={() => handleIsModal(value)}
                        >
                            <div className='p-2'>
                                <div className='text-lg flex mb-1'>
                                    <p className='text-slate-700'> <b className="text-black">{value.name}</b> {value.content}</p>
                                </div>
                                <div className='text-lg italic text-gray-400'>{moment(value.time).startOf('ss').fromNow()}</div>
                            </div>
                        </div>
                        
                    ))}
                    
                </div>
            }
        </div>
        {chooseNotify  && 
            <ModalTimetable timetable={chooseNotify} modalTimeTable={modalTimeTable} setModalTimeTable={setModalTimeTable} storage/>}
    </>
  )
}

export default NotifyHeader