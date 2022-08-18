import React, { useState } from 'react'
import languageEn from '../../../../../assets/languageEn.png'
import languageVi from '../../../../../assets/languageVi.png'

const LanguageHeader = ({ setLanguage, en }) => {
    const [ isLanguage, setIsLanguage ] = useState(false)
    // {en ?
    //     <img className='h-14' src={languageEn} /> :
    //     <img className='h-14' src={languageVi} />
    // }
  return (
    <div className='relative'
        onMouseEnter={() => setIsLanguage(true)}
        onMouseLeave={() => setIsLanguage(false)}

    >
    {en ? 
        <>
            <img className='h-14' src={languageEn} />
            {isLanguage &&
                <img className='absolute h-14 top-11' src={languageVi} 
                onClick={() => setLanguage(false)}
                />
                
            }
        </>
        :
        <>
            <img className='h-14' src={languageVi} />
            {isLanguage &&
                <img className='absolute h-14 top-11' src={languageEn} 
                onClick={() => setLanguage(true)}
                />
                
            }
        </>
    }
    </div>
  )
}

export default LanguageHeader