import { t } from 'i18next'
import React, { useContext, useState } from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import { useLocalStorage } from '../../components/LocalStorage'
import AddSubjects from './AddSubjects'
import Schedule from './Schedule'
import Tour from 'reactour'
import { ExtensionsContext } from '../../components/GlobalStates/ExtensionsContext'

const selectors = [
  '[data-tut="first-step"]',
  '[data-tut="second-step"]',
  '[data-tut="third-step"]',
  '[data-tut="fourth-step"]',
]

const content = t('tour', { returnObjects: true })

const steps = selectors.map((selector, index) => ({
  selector,
  content: content[index],
}))

const Schedules = () => {
  const [ createSchedule, setCreateSchedule ] = useState(false)
  const [ seeResult, setSeeResult ] = useState(false)
  const { isTourOpen, setIsTourOpen } = useContext(ExtensionsContext)
  const closeTour = () => {
    setIsTourOpen(false)
  }
  const handleStep = (curr) => {
    if(curr == 1) {
      setCreateSchedule(true)
    }
  }
  // console.log(`The current step is ${curr + 1}`)
  return (
    <DefaultLayout>
      <div className='flex justify-between my-5 mx-8'>
     
      
        <Schedule
          createSchedule= {createSchedule}
          setCreateSchedule = {setCreateSchedule}
          seeResult = {seeResult} 
          setSeeResult={setSeeResult}
        />
        
        {createSchedule &&
          <AddSubjects 
            createSchedule= {createSchedule}
            setCreateSchedule = {setCreateSchedule}    
          />
        }
        {seeResult &&
          <AddSubjects 

            seeResult = {seeResult} 
            setSeeResult={setSeeResult}
          />
        }
        <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={closeTour}
          rounded={10}
          showNavigationNumber={true}
          getCurrentStep={handleStep}
        />
      </div>
    </DefaultLayout>
  )
}

export default Schedules