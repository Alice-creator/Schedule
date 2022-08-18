import React from 'react'
import { colors, textColors } from '../../../data/Colors'
const SubjectTimeTable = ({ value }) => {
  let random = Math.floor(Math.random() * 6)
  let color = colors[random]
  let textColor = textColors[random]

  return (
    <div 
    key={value._id}
    id={value._id}
    //   onClick={() => handleDeleteSubject(value, groupSubjects)}
    className={`subject__container z-0 relative py-3 px-1 my-1 w-full overflow-hidden h-full rounded-xl text-center`}
    style={{ backgroundColor: `${color}`}}   
    >

    <div className='subject__element'>
      <h3 className={`text-xl font-semibold dark:text-slate-50`} style={{ color: `${textColor}`}}>{value.title}</h3>
      <p className={`text-base font-semibold`} style={{ color: `${textColor}`}}>
      {value["sub-group"] == "" ?`Group ${value["group"]}`: `Group ${value["group"]} | Sub-group ${value["sub-group"]}`}
      </p>
      <div className='text-lg italic text-slate-600'>Tiết: {value["period"]}</div>
    </div>
    
  </div>
  )
}

export default SubjectTimeTable