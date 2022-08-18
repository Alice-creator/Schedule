import { t } from 'i18next'
import React, {  useContext, useEffect, useRef, useState } from 'react'
import { handleTableSubject } from '../../../../algorithm/handleTableSubject'
import { SubjectContext } from '../../../../components/GlobalStates/SubjectsContext'
import Calendar from '../../Schedule/Calendar'

import Recently from './Recently'
import ShowAll from './ShowAll'

const Sorted = ({ listRegisterSubject }) => {
  const [ recently, setRecently ] = useState(false)
  const { chooseSorted, setChooseSorted }  = useContext(SubjectContext)
  useEffect(() => {
    handleTableSubject(chooseSorted, setChooseSorted, [], false)
  }, [chooseSorted])
  // useEffect(() => {
  //   console.log(recentlyArr.current, "hahdhda");
  // }, [recentlyArr])
  console.log("sao nó k ra nhở");
  return (
    <div>
      <div className='flex my-2 mx-4  text-2xl items-center'>
        <div 
          className={recently ? `text-black dark:text-slate-50 px-3 py-2 mr-4` : `bg-primary text-white px-3 py-2 mr-4`}
          onClick={() => setRecently(false)}
        >{t("schedule.sorted.showAll")}</div>
          
        <div 
          className={recently ? `bg-primary text-white px-3 py-2 mr-4` : `text-black dark:text-slate-50 px-3 py-2 mr-4`}
          onClick={() => setRecently(true)}  
        >{t("schedule.sorted.recent")}</div>
      </div>
      
      {recently ? <Recently /> : <ShowAll listRegisterSubject={listRegisterSubject}/> }
      
    </div>
  )
}

export default Sorted