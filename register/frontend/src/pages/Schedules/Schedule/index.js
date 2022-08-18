import React, { useContext } from 'react'
import Calendar from './Calendar'


import { SubjectContext } from '../../../components/GlobalStates/SubjectsContext';
import FunctionButtons from './FunctionButtons';
import { t } from 'i18next';
import { UserContext } from '../../../components/GlobalStates/UserContext';
const Schedule = (props) => {
    const { chooseSorted } = useContext(SubjectContext)
    const { listRegisterSubject } = useContext(UserContext)
  const handleCreate = () => {
    props.setCreateSchedule(true)
    props.setSeeResult(false)
  }
  const handleResult = () => {
    props.setSeeResult(true)
    props.setCreateSchedule(false)
  }

  return (
    <div className='flex flex-col flex-1 px-8 lg:px-10 lg:mr-5'>
      <div className='flex justify-end mb-3'>
        <button 
          data-tut="first-step"
          className='bg-primary text-white text-xl font-medium mr-4 flex items-center text-center px-6 py-3 rounded-2xl hover:shadow-headerShadow'
          onClick={handleCreate}  
        >{t("schedule.functionButtons.create")}</button> 
        {listRegisterSubject.length > 0 && 
          <button 
            className='bg-primary text-white text-xl font-medium flex items-center text-center px-6 py-3 rounded-2xl hover:shadow-headerShadow'
            onClick={handleResult}  
          >{t("schedule.functionButtons.result")}</button> 
        }
      </div>
      <Calendar />
      {chooseSorted.length > 0 &&
        <FunctionButtons value={chooseSorted} />         
      }
      </div>
  )
}

export default Schedule