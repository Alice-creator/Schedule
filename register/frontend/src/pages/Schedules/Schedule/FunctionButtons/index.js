import React, { useContext, useState } from 'react'
import html2canvas from 'html2canvas';

import axios from 'axios';

import { toast }  from 'react-toastify'

import { BsCloudDownload, BsShare } from 'react-icons/bs'
import { GoCheck } from 'react-icons/go'
import { IoSaveOutline } from 'react-icons/io5'

import { UserContext } from '../../../../components/GlobalStates/UserContext';
import { ExtensionsContext } from '../../../../components/GlobalStates/ExtensionsContext';
import ModalShare from './ModalShare';
import { AddFavourite, AddStorge } from '../../../../services/SubjectApi';
import { t } from 'i18next'
import { handleSaveAs } from '../../../../algorithm/handleSaveAs';
const FunctionButtons = ({ value, notify }) => {
    const { user } = useContext(UserContext)
    const { setLoading } = useContext(ExtensionsContext)
    const [ isShare, setIsShare ] = useState(false) 

    const handleSubmitFavourite = async (e) => {
        e.preventDefault()
        setLoading(true)
        const dataFavourite = await AddFavourite(user.email, value)
        const dataStorage = await AddStorge(user.email, value)

        window.location.reload()
        toast.success('The timetable has been successfully added Favourite')
        setLoading(false)
      }
      const handleStorage = async (e) => {
        e.preventDefault()
        const dataStorage = await AddStorge(user.email, value)

        toast.success('The timetable has been successfully added to Storage')
    }

        
  
    
    
  return (
    <div className='flex justify-end mt-4'>
        <button 
            className='group relative bg-red-600 mr-3 text-white text-xl font-medium flex items-center text-center px-6 py-3 mb-6 rounded-2xl hover:shadow-headerShadow'
            onClick={handleSubmitFavourite}  
        > 
            <GoCheck size={15} className="mr-3"/> {t("schedule.functionButtons.mark")}
            <div className='group-hover:flex hidden absolute z-40 -top-24 -right-full p-4 text-slate-500 text-xl font-medium border rounded-lg bg-notify w-96'>
                {t("script.mark")}
            </div>
        </button>
        <button 
            className='group relative bg-primary mr-3 text-white text-xl font-medium flex items-center text-center px-6 py-3 mb-6 rounded-2xl hover:shadow-headerShadow'
            onClick={handleStorage}  
        > 
            <IoSaveOutline size={15} className="mr-3"/> {t("schedule.functionButtons.storage")}
            <div className='group-hover:flex hidden absolute z-40 -top-24 -right-1/2 p-4 text-slate-500 text-xl font-medium border rounded-lg bg-notify w-96'>
                {t("script.storage")}
            </div>
        </button> 
        <button 
            className='group relative bg-primary mr-3 text-white text-xl font-medium flex items-center text-center px-6 py-3 mb-6 rounded-2xl hover:shadow-headerShadow'
            onClick={() => handleSaveAs('myTable')}  
        > 
            <BsCloudDownload size={15} className="mr-3"/> {t("schedule.functionButtons.download")}
            <div className='group-hover:flex hidden absolute z-40 -top-24 -right-1/2 p-4 text-slate-500 text-xl font-medium border rounded-lg bg-notify w-96'>
                {t("script.download")}
            </div>
        </button> 
        <button 
            className='group relative bg-primary text-white text-xl font-medium flex items-center text-center px-6 py-3 mb-6 rounded-2xl hover:shadow-headerShadow'
            onClick={() => setIsShare(true)}  
        > 
            <BsShare size={15} className="mr-3"/> {t("schedule.functionButtons.share")}
            <div className='group-hover:flex hidden absolute z-40 -top-24 -right-full p-4 text-slate-500 text-xl font-medium border rounded-lg bg-notify w-96'>
                {t("script.share")}
            </div>    
        </button> 
        {isShare && <ModalShare isShare={isShare} setIsShare={setIsShare} />}
    </div>
  )
}

export default FunctionButtons