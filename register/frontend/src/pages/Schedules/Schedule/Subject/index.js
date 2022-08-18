import React, { memo, useRef, useState } from 'react'
import { handleDeleteSubject } from '../../../../algorithm/handleDeleteSubject';
import Delete from "../../../../assets/delete_icon.png"
import { colors, textColors } from '../../../../data/Colors';
const Subject = ({ groupSubjects, setGroupSubjects, deletedSubject ,setDeletedSubject, value, isDelete, notWeek }) => {
  let random = Math.floor(Math.random() * 6)
  let color = colors[random]
  let textColor = textColors[random]
  const handleDelete = (deleted, list) => {
    if(isDelete) {
      handleDeleteSubject(deleted, list, setGroupSubjects, setDeletedSubject) 
    }
  }


  return (
    <div 
      key={value._id}
      id={value._id}
      onClick={() => handleDelete(value, groupSubjects)}
      className={`subject__container bg-blue z-0 relative py-3 px-1 my-1 w-full overflow-hidden h-full rounded-xl text-center`}
      style={{ backgroundColor: `${color}`}} 
    >
      {isDelete && <div className={`subject__modal absolute hidden z-50 bg-note-3 top-0 right-0 bottom-0 left-0`}>
        <img className='w-10 h-w-10' src={Delete} />
      </div>  }
      <div className='subject__element'>
        <h3 className={`text-xl font-semibold dark:text-slate-50`} style={{ color: `${textColor}`}}>{value.title}</h3>
        <p className={`text-base font-semibold`} style={{ color: `${textColor}`}}>
        {value["sub-group"] == "" ?`Group ${value["group"]}`: `Group ${value["group"]} | Sub-group ${value["sub-group"]}`}
        </p>
        {!notWeek &&
          <div className='text-lg italic text-slate-600'>Tuần {value["week"]}</div>
        }
      </div>
      
    </div>
  )
}

export default memo(Subject)