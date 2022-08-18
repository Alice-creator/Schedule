import React from 'react'

const Activity = ({ value }) => {
  return (
    <div 
      key={value._id}
      id={value._id}
    //   onClick={() => handleDeleteSubject(value, groupSubjects)}
      className={`subject__container text-black relative py-3 px-1 my-1 w-full overflow-hidden h-full rounded-xl text-center`}
      style={{ backgroundColor : `${value?.color}`}} 
    >

      <div className='flex flex-col justify-between'>
        <div className="mb-5">
          <h3 className={"text-xl font-semibold"}>{value?.title}</h3>
          <p className="text-lg text-gray-600">{value?.description}</p>
        </div>
        <p className={"text-base font-medium text-gray-600 italic"}>
            {value?.start} - {value?.end}
        </p>
      </div>
      
    </div>
  )
}

export default Activity