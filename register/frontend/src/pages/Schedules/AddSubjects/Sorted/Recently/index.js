import React, { useContext, useEffect, useRef } from 'react'
import { handleTableRecent } from '../../../../../algorithm/handleTableStorage'
import { SubjectContext } from '../../../../../components/GlobalStates/SubjectsContext'
import CalendarRecent from './CalendarRecent'

const Recently = () => {
  const { chooseSorted, setChooseSorted } = useContext(SubjectContext)
  const recentlyArr = JSON.parse(localStorage.getItem('recently')) || []
  const recentLimit = useRef([])
  if(recentlyArr.length > 6) {
    recentLimit.current = recentlyArr.reverse().slice(0,6)
  } else if(recentlyArr.length > 0) {
    recentLimit.current = recentlyArr.reverse()
  }
  useEffect(() => {
    if(recentLimit.current.length > 0 ) {
      recentLimit.current.map((val, index) => {
        handleTableRecent(val, index)
      })
    }
  }, [recentLimit.current])

  return (
    <div className='px-3'>
    <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
          {recentLimit.current.map((value, index)=> (
          <div key={index} className={JSON.stringify(chooseSorted) == JSON.stringify(value) ?'relative border-gray-700 dark:border-slate-50 border-2':'relative border border-gray-400' }
              onClick={() => setChooseSorted(value)}
          >
              <CalendarRecent  index={index}/>
            </div>
            ))
          }
      </div>

   
    </div>
  )
}

export default Recently