import React, { useContext, useEffect, useState } from 'react'
import Subject from '../../Schedule/Subject'

import CalendarSimilar from './CalendarSimilar'
import { handleTableRecent } from '../../../../algorithm/handleTableStorage'
import { handleTableSubject } from '../../../../algorithm/handleTableSubject'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { t } from 'i18next'
const ListSubject = ({ chooseDelete, setChooseDelete, similarTimetable,  chooseSorted, setChooseSorted }) => {
 
  const handleDelete = (value) => {
    if(!chooseDelete.includes(value)) {
      setChooseDelete((prev) => ([...prev, value]))
    } else {
      setChooseDelete((prev) => prev.filter((val) => val != value))
    }
  }
  const [ pages, setPages] = useState(false)

  useEffect(() => {
    if(similarTimetable.length > 0 ) setPages(true)
  }, [similarTimetable])
  const handleBack = () => {
    setPages(false)
  }
  const handleNext = () => {
    setPages(true)
  }
  return (
    <div className='py-4 px-2'>
    {!pages && similarTimetable.length > 0 &&
      <div className='flex justify-end'>
        <button 
          className='p-1 flex items-center text-xl tracking-wider rounded-lg'
          onClick={handleNext}
          >  <IoIosArrowForward color='#000' size={17}/>
        </button>
      </div>
    }
    {pages ?
        <div>
          <button 
            className='p-1 flex items-center text-xl tracking-wider rounded-lg'
            onClick={handleBack}
            >  <IoIosArrowBack color='#000' size={17}/>
          </button>
          <div className='grid grid-cols-2 gap-2'>

            {similarTimetable.map((value, index) => (
              <div key={index} className={JSON.stringify(chooseSorted) == JSON.stringify(value) ?'relative border-gray-700 dark:border-slate-50 border-2':'relative border border-gray-400' }
                    onClick={() => setChooseSorted(value)}
                >
                    <CalendarSimilar  index={index}/>
                  </div>
            ))}
          </div>
        </div>
      :
      <div className='text-center'>
        <h2 className='font-semibold text-2xl'>{t("schedule.similar.title")}</h2>
        <p className='text-xl'>{t("schedule.similar.guide")}</p>
        <div className='grid grid-cols-3 gap-2'>
          {chooseSorted.map((value, index) => (
            <div className={chooseDelete.includes(value) ? 'opacity-30 cursor-pointer': 'opacity-100 cursor-pointer' } key={index} onClick={() => handleDelete(value)}>
              <Subject value={value} notWeek/>
            </div>
          ))}
        </div>
      </div>
      }
    
    </div>
  )
}

export default ListSubject