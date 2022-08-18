import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios';

import ChooseSubjects from './ChooseSubjects';
import Sorted from './Sorted';
import ListSubject from './ListSubject';

import { UserContext } from '../../../components/GlobalStates/UserContext';
import { ExtensionsContext } from '../../../components/GlobalStates/ExtensionsContext';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { eventArr } from '../../../data/EventSections';
import { handleSort } from '../../../algorithm/handleSort';
import { SubjectContext } from '../../../components/GlobalStates/SubjectsContext';
import { t } from 'i18next';
import { mostSuitableSchedule } from '../../../algorithm/handleFindSimiar';
import { handleTableRecent } from '../../../algorithm/handleTableStorage';
import { handleTableSubject } from '../../../algorithm/handleTableSubject';
const AddSubjects = ({createSchedule, seeResult, setCreateSchedule, setSeeResult }) => {
  const { user, registerSubject, listRegisterSubject } = useContext(UserContext)
  const { sorted, chooseSorted , setChooseSorted } = useContext(SubjectContext)
  const { setLoading } = useContext(ExtensionsContext)
  
  const [ chooseDelete, setChooseDelete ] = useState([])
  const [ similarTimetable, setSimilarTimetable ] = useState([])

  const [ event, setEvent ] = useState(eventArr[0])
  const index = useRef(0)
  const handleBack = () => {
    if(index.current === 0) {
      index.current = eventArr.length
    }
    index.current--
    setEvent(eventArr[index.current])
  } 
  const handleNext = () => {
    index.current++
    index.current = index.current % eventArr.length
    setEvent(eventArr[index.current])

  }
  console.log(event)
  const handleSubmitRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    const config = {
      method: 'PUT',
      url: 'users',
      data:  registerSubject, 
      params: {email : user.email},
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // Authorization: `Bearer ${cookies.token}`,
      },
    }
    const {data} = await axios(config)
    // console.log(listRegisterSubject, 'listRegisterSubject');
    // handleSort(registerSubject, setSorted)
    window.location.reload()
    setLoading(false)
  }
  const handleCancel = () => {
    if(createSchedule) {
      setCreateSchedule(false)
      setChooseSorted([])
    } 
    setSeeResult(false)
    setChooseSorted([])
  }
  const handleFind = () => {
    setSimilarTimetable(mostSuitableSchedule(sorted, chooseSorted, chooseDelete))

  }
   
  useEffect(() => {
    if(similarTimetable.length > 0 ) {
      similarTimetable.map((val, index) => {
        handleTableRecent(val, index)
        handleTableSubject(chooseSorted, setChooseSorted, [], false)
      })
    }
  }, [chooseSorted])
  // {event.name == 'ListSubject' && <ListSubject listRegisterSubject={listRegisterSubject}  /> }
  return (
    <div className='w-base lg:w-xl md:w-lg mt-16'>
      <div className='flex justify-between transition-opacity-custom duration-1000 w-full relative h-2xl text-black flex-col bg-blue-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl'>
        <div className='flex-auto h-9/10  overflow-y-auto overflow-x-hidden '>
          {createSchedule && <ChooseSubjects /> }
          {seeResult && event.name =='Sorted' && <Sorted listRegisterSubject={listRegisterSubject} /> }
          {seeResult && event.name =='ListSubject' && <ListSubject chooseDelete={chooseDelete} setChooseDelete={setChooseDelete} similarTimetable={similarTimetable} chooseSorted={chooseSorted} setChooseSorted={setChooseSorted} /> }

        </div>
        <div className='w-full p-4 h-1/10 flex justify-between items-center bg-blue-400 dark:bg-gray-900'
            // style={{ backgroundColor: "#60a5f8"}}
        >
            <div className='flex justify-between items-center'> 
              {seeResult && chooseSorted.length > 0 &&
                <div className='flex'>
                  <button 
                    className='p-1 mr-2 flex items-center bg-slate-50 border-2 border-black text-xl tracking-wider rounded-lg'
                    onClick={handleBack}
                    >  <IoIosArrowBack color='#000' size={12}/>
                  </button>
                  <button 
                    className='p-1 flex items-center bg-slate-50 border-2 border-black text-xl tracking-wider rounded-lg'
                    onClick={handleNext}
                    >  <IoIosArrowForward color='#000' size={12}/>
                  </button>
                  
                </div>
              }
            </div>
            <div className='flex justify-end'>
              <button className='bg-slate-500 px-5 py-2 text-xl tracking-wider text-slate-300 rounded-lg border-2 border-black' onClick={handleCancel}>{t("schedule.createTimetable.cancel")}</button>
              {seeResult && chooseDelete.length > 0 &&
                <button className='bg-primary ml-4 px-5 py-2 text-xl tracking-wider rounded-lg border-2 border-black' onClick={handleFind}>{t("schedule.createTimetable.find")}</button>
              }
              {createSchedule &&
                <button data-tut="fourth-step" className='bg-primary ml-4 px-5 py-2 text-xl tracking-wider rounded-lg border-2 border-black' onClick={handleSubmitRegister}>{t("schedule.createTimetable.create")}</button>
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddSubjects