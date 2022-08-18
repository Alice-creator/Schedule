import { t } from 'i18next';
import React, { memo, useContext, useEffect, useLayoutEffect, useState } from 'react'
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { handleSaveAs } from '../../algorithm/handleSaveAs';
import { handleTableModalTimeTable } from '../../algorithm/handleTableSubject';
import { constants } from '../../constants';
import { AddStorge } from '../../services/SubjectApi';
import { UserContext } from '../GlobalStates/UserContext';
// import { handleScheduleWeek } from '../../../algorithm/handleScheduleWeek';
// import { handleTableSubject } from '../../../algorithm/handleTableSubject';
import { BsCloudDownload } from 'react-icons/bs'
import { IoSaveOutline } from 'react-icons/io5'
import CalendarTimetable from './CalendarTimetable';

const ModalTimeTable = ({ modalTimeTable, setModalTimeTable, timetable, storage }) => {
//   handleTableSubject(timetable)
const [ state, setState ] = useState(true)
// setState(false)
const { user } = useContext(UserContext)

useEffect(() => {
    setState(false)
}, [])
handleTableModalTimeTable(timetable)

console.log(handleTableModalTimeTable(timetable));

console.log(timetable, state);
const handleStorage = async (e) => {
    e.preventDefault()
    const dataStorage = await AddStorge(user.email, timetable)

    toast.success('The timetable has been successfully added to Storage')
  }
  return (
    <Modal
        isOpen={modalTimeTable}
        onRequestClose={() => setModalTimeTable(false)}
        style={constants.customStylesTimetable}
        ariaHideApp={false}
        // contentLabel="Example Modal"
      > 
      {
        
      }
        <CalendarTimetable />
        {storage && 
            <div className='flex justify-center'>
                <button 
                className='group relative bg-primary ml-3 mt-4 text-white text-xl font-medium flex items-center text-center px-6 py-3 rounded-2xl hover:shadow-headerShadow'
                onClick={handleStorage}  
            > 
                <IoSaveOutline size={15} className="mr-3"/> {t("schedule.functionButtons.storage")}
                <div className='group-hover:flex hidden absolute z-40 -top-24 -right-1/2 p-4 text-slate-500 text-xl font-medium border rounded-lg bg-notify w-96'>
                    {t("script.storage")}
                </div>
            </button> 
            <button 
                className='group relative bg-primary ml-3 mt-4 text-white text-xl font-medium flex items-center text-center px-6 py-3 rounded-2xl hover:shadow-headerShadow'
                onClick={() => handleSaveAs('myModalTimetable')}  
            > 
                <BsCloudDownload size={15} className="mr-3"/> {t("schedule.functionButtons.download")}
                <div className='group-hover:flex hidden absolute z-40 -top-24 -right-1/2 p-4 text-slate-500 text-xl font-medium border rounded-lg bg-notify w-96'>
                    {t("script.download")}
                </div>
            </button> 
            </div>
            
        }
      </Modal>
  )
}

export default memo(ModalTimeTable)