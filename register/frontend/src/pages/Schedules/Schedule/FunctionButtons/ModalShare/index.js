import { t } from 'i18next';
import React, { useContext, useState } from 'react'
import Modal from 'react-modal';
import { SubjectContext } from '../../../../../components/GlobalStates/SubjectsContext';
import { UserContext } from '../../../../../components/GlobalStates/UserContext';


import { constants } from '../../../../../constants';
import { AddShare } from '../../../../../services/SubjectApi';



const ModalShare = ({ isShare, setIsShare }) => {
  const { user } = useContext(UserContext)
  const { chooseSorted } = useContext(SubjectContext)
  const [ change, setChange ] = useState('')
  const handleSend = async (e) => {
    e.preventDefault()
    const value = {
      name: user.name,
      content: t("notify.share"),
      timetable: chooseSorted,
      time: new Date()
    }
    
    if(change.length > 0 ) {
      const data = await AddShare(change, value)
    }
    setIsShare(false)
  }
  return (
    <Modal
        isOpen={isShare}
        onRequestClose={() => setIsShare(false)}
        style={constants.customStyles}
        ariaHideApp={false}
        // contentLabel="Example Modal"
      >
      <div>
        <h2 className='text-3xl font-medium'>Share timetable</h2>
        <p className='text-basic text-gray-500 '>Give your friends access to this website and starrt collaborating in real time</p>
      </div>
      <div className='w-full h-0.5 bg-slate-300 mt-5'></div>
        <div>
            <div>
                <label className='text-basic'>Email</label>
                <div className='flex justify-between'>
                    <input type='email' placeholder='contact@email.com' 
                          className='flex-1 text-basic border-sm border-slate-300 outline-none py-2 px-4 rounded-lg my-2' 
                          onChange={(e) => setChange(e.target.value)}
                    />
                    <button 
                      className='bg-primary text-white my-2 px-4 ml-3 rounded-lg text-basic'
                      onClick={handleSend}
                    >
                      Send
                    </button>
                </div>
            </div>
        </div>
      
      </Modal>
  )
}

export default ModalShare