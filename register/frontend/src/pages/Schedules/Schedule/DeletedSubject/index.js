import React from 'react'

import Restore from '../../../../assets/restore.png'

const DeletedSubject = ({ deletedSubject, setDeletedSubject, setGroupSubjects, color, value, isRestore }) => {
    
    const handleRestoreSubject = (value) => {
      setGroupSubjects((prev) => [...prev, value])
      setDeletedSubject(deletedSubject.filter((val) => val != value))
    }
  return (
    <div 
      key={value._id}
      id={value._id}
      onClick={() => handleRestoreSubject(value)}
      className={`subject__container opacity-40 relative py-3 px-1 my-1 w-full overflow-hidden h-full rounded-xl text-center border-2 border-slate-500 dark:border-white`} 
    >
      {isRestore && <div className={`subject__modal absolute hidden z-50 bg-note-3 top-0 right-0 bottom-0 left-0`}>
        <img className='w-10 h-w-10' src={Restore} />
      </div>  }
      <div className='subject__element'>
        <h3 className={`text-xl font-semibold text-t-bold-note-${color.number}`}>{value.title}</h3>
        <p className={`text-base font-semibold text-t-note-${color.number}`}>
        {value["sub-group"] == "" ?`Group ${value["group"]}`: `Group ${value["group"]} | Sub-group ${value["sub-group"]}`}
        </p>
        <div className='text-lg italic text-slate-600'>Tuần {value["week"]}</div>
      </div>
      
    </div>
  )
}

export default DeletedSubject