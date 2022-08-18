import React, { useContext, useEffect } from 'react'
import i18n from '../../../../i18next'
import { ExtensionsContext } from '../../../GlobalStates/ExtensionsContext'
import Toggle from "react-toggle"
import languageEn from '../../../../assets/languageEn.png'
import languageVi from '../../../../assets/languageVi.png'

const DropdownItem = (props) => {
  const { bgImg, setBgImg, language, setLanguage } = useContext(ExtensionsContext)
  // useEffect(() => {

  // }, [language])
  const handleLanguage = () => {
    setLanguage(!language)
    console.log(language);
  }
  
  // console.log(localStorage.getItem('language'));
  return (
    <>
        {props.languages && (
          <div className='flex justify-between items-center text-xl border-2 border-transparent transition duration-300 hover:bg-note-3 dark:hover:bg-secondary-dark-sidebar rounded-lg px-2 py-1 my-1'>
            {language ? "English (US)" : "Vietnamese (VI)"}
            
            <Toggle
              className='toggle'
              defaultChecked={true}
              icons={{
                checked: <languageEn />,
                unchecked: <languageVi />,
              }}
              onChange={handleLanguage} />
          </div>
        )}
        {props.bgImg && (
          <div className='flex justify-between items-center text-xl border-2 border-transparent transition duration-300 hover:bg-note-3 dark:hover:bg-secondary-dark-sidebar rounded-lg px-2 py-1 my-1'>
            Background image
            
            <Toggle
              className='toggle'
              defaultChecked={true}
              onChange={() => setBgImg(!bgImg)} />
          </div>
        )}
    </>
  )
}

export default DropdownItem