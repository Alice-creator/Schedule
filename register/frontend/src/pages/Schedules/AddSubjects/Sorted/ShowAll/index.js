import React, { useContext, useEffect, useRef, useState } from 'react'
import { handleSort } from '../../../../../algorithm/handleSort'
import { ExtensionsContext } from '../../../../../components/GlobalStates/ExtensionsContext'
import { SubjectContext } from '../../../../../components/GlobalStates/SubjectsContext'
import { useLocalStorage } from '../../../../../components/LocalStorage'
import { toast } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight
} from 'react-icons/fi'
import { t } from 'i18next'

const ShowAll = ({ listRegisterSubject}) => {
  const { sorted, setSorted, chooseSorted, setChooseSorted } = useContext(SubjectContext)
  const { setLoading } = useContext(ExtensionsContext)
  
  useEffect(() => {
    if(listRegisterSubject.length > 0 ) {
      setLoading(true)
      handleSort(listRegisterSubject, setSorted)
      setLoading(false)
    }
  }, [listRegisterSubject])
  const [recent, setRecent] = useLocalStorage("recently", [])
  const recentlyArray = JSON.parse(localStorage.getItem('recently')) || []
  console.log(recent, "recent");
  useEffect(() => {
    if(chooseSorted.length > 0) {
      const filterRecent = (recent, choose) => {
          for(let i = 0; i < recent.length; i++) {
            if(recent[i] == choose) {

              return setRecent(recentlyArray)
            }
          }
          console.log(chooseSorted, "chooseSorted 1");
          return setRecent((prev) => [...prev, choose])
      } 
      filterRecent(recentlyArray, chooseSorted)
    }
  }, [chooseSorted])
  
  let arrLength = sorted.length/40
  const sortedSlice = []
  for(let i = 0; i < arrLength; i++) {
    sortedSlice.push(sorted.slice(40*i,40*(i+1)))
  }
  
  const handleBack = () => {
    if(index.current === 0) {
      index.current = arrLength
    }
    index.current--
    setIndexArr(Math.round(index.current))
  } 
  const handleNext = () => {
    index.current++
    index.current = index.current % arrLength
    setIndexArr(Math.round(index.current))

  }
  const handleFirst = () => {
    index.current = 0
    setIndexArr(index.current)

  }
  const handleEnd = () => {
    index.current = arrLength - 1
    if(index.current % arrLength != 0) {
      index.current += 1
    }
    setIndexArr(Math.round(index.current))
  }
  const index = useRef(0)
  const [indexArr, setIndexArr] = useState(0)

  const handleChooseSorted = (value) => {
    setChooseSorted(value)
    toast.success(t("toast.recent"));

  }
  console.log(sorted, "đa ");
  return (
    <div className='px-2 py-1'>
        <h3 className='dark:text-white px-2 mb-2'>
          {t("schedule.sorted.title",{number : `${sorted.length}`})}
        </h3>
        
        <div className='grid grid-cols-3 gap-2 px-2'>
          {sortedSlice.length > 0 && sortedSlice[indexArr]?.map((value, index) => (
              <div 
                className={chooseSorted == value ?'text-center text-xl cursor-pointer rounded-xl bg-primary text-white py-0.5': 'text-center text-xl cursor-pointer bg-blue-100 dark:bg-slate-600 dark:text-white rounded-xl transition duration-300 py-0.5 hover:bg-primary hover:text-white'} key={index} 
                onClick={() => handleChooseSorted(value)}>
                  <div className='text-xl font-semibold'>{indexArr*40 + index+1}</div>
              </div>
          ))}
        </div>   
        {sorted.length > 0 &&
          <div className='flex items-center justify-between my-2 mx-7 dark:text-slate-50'>
              <div>
                <button className='' onClick={handleFirst}>
                  <FiChevronsLeft />
                </button>
                <button className='' onClick={handleBack}>
                  <FiChevronLeft />
                </button>
              </div>
              <div>{Math.round(indexArr) + 1}</div>
              <div>
                <button className='' onClick={handleNext}>
                  <FiChevronRight />
                </button>
                <button className='' onClick={handleEnd}>
                  <FiChevronsRight />
                </button>
              </div>
          </div>   
        }
      </div>
  )
}

export default ShowAll