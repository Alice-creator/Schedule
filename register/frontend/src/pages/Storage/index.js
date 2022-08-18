import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../components/GlobalStates/UserContext'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import { handleTableStorage } from '../../algorithm/handleTableStorage'

import { TbTrash } from 'react-icons/tb'
import Preview from "../../assets/preview.png"
import ModalTimetable from '../../components/ModalTimetable'
import { t } from 'i18next'

const Storage = () => {
  const [ storage, setStorage ] = useState([])
  const [ chooseStorage, setChooseStorage ] = useState([])

  const [ modalTimeTable, setModalTimeTable ] = useState(false)
  const [ del, setDel ] = useState('')
  const { user, favouriteSubject } = useContext(UserContext)
  useEffect(() => {
    const getStorage = async () => {
      const config = {
        method: 'GET',
        url: 'users/storage',
        params: { email: user.email },
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        }
      }
      const { data } = await axios(config)
      setStorage(data)
    }
    getStorage()
  }, [del])
  useEffect(() => {
    if(storage.length > 0 ) {
      storage.map((val, index) => {
        handleTableStorage(val, index)
      })
    }
  }, [storage])
  const handleTimetable = (value) => {
    setChooseStorage(value)
    setModalTimeTable(true)
  }
  const handleDeleteTimetable = async (value) => {
    const config = {
      method: 'PUT',
      url: 'users/delete/storage',
      params: { email: user.email },
      data: value,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      }
    }
    const { data } = await axios(config)
    setDel(value)
    // alert("Delete")
  }
  return (
    <DefaultLayout>
      {storage.length == 0 &&
        <div className="text-3xl font-semibold flex justify-center items-center">{t("remind.storage")}</div>
      }
      <div className='grid grid-cols-3 gap-6 lg:grid-cols-4 m-10'>
          {storage.length > 0 && storage.map((value, index)=> (
          <div key={index} className='relative'>
            <table className={JSON.stringify(value)==JSON.stringify(favouriteSubject) ? `table-storage-${index} w-full h-full text-lg table-fixed dark:bg-darkmode bg-white border border-red-700`: `table-storage-${index} w-full h-full bg-white text-lg table-fixed dark:bg-darkmode  border border-gray-400`}>
            <thead>
                <tr className='bg-primary-color dark:bg-slate-600 py-2'>
                    <th className='py-2'>MON</th>
                    <th className='py-2'>TUE</th>
                    <th className='py-2'>WEB</th>
                    <th className='py-2'>THU</th>
                    <th className='py-2'>FRI</th>
                    <th className='py-2'>SAT</th>
                    <th className='py-2'>SUN</th>
                </tr>
            </thead>
            <tbody>
              <tr className='h-32 text-center'>                  
              <td className="py-2 st1-2"></td>
              <td className="py-2 st1-3"></td>
                    <td className="py-2 st1-4"></td>
                    <td className="py-2 st1-5"></td>
                    <td className="py-2 st1-6"></td>
                    <td className="py-2 st1-7"></td>
                    <td className="py-2 st1-8"></td>
                </tr>
                <tr className='h-32 text-center'>
                    <td className="py-2 st2-2"></td>
                    <td className="py-2 st2-3"></td>
                    <td className="py-2 st2-4"></td>
                    <td className="py-2 st2-5"></td>
                    <td className="py-2 st2-6"></td>
                    <td className="py-2 st2-7"></td>
                    <td className="py-2 st2-8"></td>
                </tr>
                
                
            </tbody>
            </table>
            {JSON.stringify(value)==JSON.stringify(favouriteSubject) &&
              <div className='absolute bottom-0 right-0 rounded-tl-xl bg-red-700 text-white py-1 px-3 text-xl'>{t("schedule.functionButtons.mark")}</div>
            }
            <div className='opacity-0 hover:opacity-100'>
              <div className='absolute z-30 top-0 right-0 left-0 bottom-0 bg-black dark:bg-slate-300 dark:bg-opacity-40 bg-opacity-30 flex cursor-pointer'
                  onClick={() => handleTimetable(value)}
              >
                <div className='m-auto w-20 opacity-70'><img src={Preview} /></div>
              </div>
              <div className='absolute z-40 right-5 cursor-pointer top-5 w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-slate-300 dark:hover:bg-red-700 text-black hover:bg-red-700 rounded-lg'
                    onClick={() => handleDeleteTimetable(value)}
              > <TbTrash size={21} /> 
              </div>
            </div>
            </div>
            ))
          }
          {modalTimeTable && <ModalTimetable timetable={chooseStorage} modalTimeTable={modalTimeTable} setModalTimeTable={setModalTimeTable}/>}
      </div>
    </DefaultLayout>
  )
}

export default Storage