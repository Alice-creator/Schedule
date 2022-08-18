import React, { useContext, useEffect, useRef, useState } from 'react'
import { handleScheduleWeek } from '../../algorithm/handleScheduleWeek'
import { UserContext } from '../../components/GlobalStates/UserContext'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi'
import { RiMenuAddLine } from 'react-icons/ri'
import Modals from './Modals'
import CalendarWeek from './CalendarWeek';
import { handleTableWeek } from '../../algorithm/handleTableWeek';
import axios from 'axios';
import { formatDate } from '../../algorithm/formatDate';
import { numberDay } from '../../algorithm/numberDay';
import { createRootGroup, rootDay } from '../../algorithm/handleRootDay';
import { t } from 'i18next';
const ScheduleWeek = () => {
  const { user, favouriteSubject } = useContext(UserContext)
  const [ activity, setActivity ] = useState([])
  const [ scheduleWeekArray, setScheduleWeekArray ] = useState([])
  const [ modal, setModal ] = useState(false)
  const [ isDateRange, setIsDateRange ] = useState(false)
  const [ rangeDay, setRangeDay ] = useState([
    {
      endDate: null,
      startDate: new Date(),
      key: 'selection'
    }
  ]);

  const dateChoose = rangeDay[0]?.startDate
  const startWeek = new Date(dateChoose)
  startWeek.setDate(dateChoose.getDate() - rangeDay[0].startDate.getDay() + 1)
  const endWeek = new Date(dateChoose)
  endWeek.setDate(dateChoose.getDate() + 7 - rangeDay[0].startDate.getDay())
  rangeDay[0].startDate = startWeek
  rangeDay[0].endDate = endWeek


  

  const handleBack = () => {
    startWeek.setDate( startWeek.getDate() - 7)
    endWeek.setDate( endWeek.getDate() - 7)

    setRangeDay((prev) => ([{ startDate: startWeek, endDate: endWeek}]))
  } 
  const handleNext = () => {
    startWeek.setDate( startWeek.getDate() + 7)
    endWeek.setDate( endWeek.getDate() + 7)

    setRangeDay((prev) => ([{ startDate: startWeek, endDate: endWeek}]))
  }
  // console.log(endWeek)
  useEffect(() => {
    const getActivity = async () => {
      const config = {
        method: 'GET',
        url: 'users/activity',
        params:{ email: user.email },
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          // Authorization: `Bearer ${cookies.token}`,
        }
  
      }
      const { data } = await axios(config)
      setActivity(data)
      // console.log('hihih');
      // console.log(data, 'hdajhdkahdja');
    } 
    getActivity()
  }, [])

  // const date = new Date(activity[0]?.date)
  const [ activityWeek, setActivityWeek ] = useState([])
  useEffect(() => {
    let array = []

    for(let i = 0; i < activity.length; i++) {
      const date = new Date(activity[i]?.date)
      if(date.getTime() > rangeDay[0].startDate.getTime() && date.getTime() < rangeDay[0].endDate.getTime()) {
        console.log(activity[i], "yes");
        array.push(activity[i])
      }
    }
    setActivityWeek(array)
  }, [rangeDay, activity])

  // useEffect(() => {
  //   console.log(scheduleWeekArray, "ha hah ha a");
    
  // }, [rangeDay])

  useEffect(() => {
    function weekOnDay(list, requestedDay, rootNumDay)
    {
      return list[Math.floor((requestedDay - rootNumDay) / 7)]
    }
    console.log(favouriteSubject, "favouriteSubject");
    if(favouriteSubject.length > 0) {
      let requestedDay = numberDay(formatDate(startWeek,'/'))
      const scheduleWeeks = handleScheduleWeek(favouriteSubject)

      console.log(scheduleWeeks, "scheduleWeeks");
      if(scheduleWeeks) {
        let rootNumDay = rootDay(createRootGroup(scheduleWeeks))
        //console.log((requestedDay - rootNumDay) / 7 + 2)
        console.log((scheduleWeeks), "root huh");
  
        console.log(createRootGroup(scheduleWeeks), "root");
        const res = weekOnDay(scheduleWeeks, requestedDay, rootNumDay)
        setScheduleWeekArray(res)
      }
    }
  }, [rangeDay])
  handleTableWeek(scheduleWeekArray,setScheduleWeekArray, activityWeek, setActivityWeek)
  return (
    <DefaultLayout>    
    <div className='h-full flex flex-col justify-between m-5'>
      <div className='flex justify-between'>
      <div>
        <button 
          className='mx-6 flex items-center bg-primary text-basic text-white px-4 py-2 rounded-lg  hover:shadow-headerShadow'
          onClick={() => setModal(true)}
        > <RiMenuAddLine className='mr-2' /> {t("scheduleWeek.buttons.addTask")}
        </button>   
        {modal && <Modals modal={modal} setModal={setModal} />}  
      </div>
      <div className='flex relative items-center justify-between my-3 mx-7'>
          <button className='flex items-center bg-primary text-xl justify-center text-white rounded-lg px-4 py-2 hover:shadow-headerShadow' 
            onClick={handleBack}
          >
            <FiChevronLeft /> {t("scheduleWeek.buttons.lastWeek")}
          </button>
          <div className='group flex text-center relative text-xl justify-center border-2 border-black dark:border-white rounded-lg px-4 py-2 mx-2 hover:shadow-headerShadow'
          >
            {formatDate(startWeek,'/')} - {formatDate(endWeek, '/')}
            <div className='group-hover:flex hidden absolute top-10 right-0'>
                <DateRange
                className='daterange__container scale-up-tr absolute right-0 top-2 w-xl z-40'
                editableDateInputs={true}
                onChange={item => setRangeDay([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={rangeDay}
                />
            </div>
            
          </div>
            <button className='flex items-center bg-primary text-xl text-white rounded-lg px-4 py-2 hover:shadow-headerShadow' 
              onClick={handleNext}
            >
              {t("scheduleWeek.buttons.nextWeek")} <FiChevronRight /> 
            </button>
            
        </div>   
      </div>
      <CalendarWeek />
    </div>
        
    </DefaultLayout>
  )
}

export default ScheduleWeek