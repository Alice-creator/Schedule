import { t } from 'i18next'
import React from 'react'

const info = [
  {
    avatar:  "https://avatars.dicebear.com/api/micah/0.7.svg",
    link: "https://github.com/HuynhNgocVy"
  },
  {
    avatar:  "https://avatars.dicebear.com/api/micah/0.4.svg",
    link: "https://github.com/Alice-creator"
  },
  {
    avatar:  "https://avatars.dicebear.com/api/micah/0.784543103760291.svg",
    link: "https://github.com/SFAri"
  },
 
  
  
]

const About = () => {
  const introdutionArr = t("homepage.about", { returnObjects: true })
  return (
    <div className='flex m-auto'>
      <div className='flex justify-between'>
      {introdutionArr.map((val, index) => (
        <a href={info[index].link} target='_blank'  className='flex flex-col text-center mx-20'> 
          <div className='z-10 mb-10 flex justify-center transition-all duration-300 hover:rotate-6'>
            <img className='w-56 h-56 rounded-full bg-note-2 overflow-hidden' src={info[index].avatar} />
          </div>
          <h1 className='text-4xl text-basic text-primary font-bold'>{val.name}</h1>
          <div className='text-stone-500'>
            <div className='text-basic text-stone-500'>{val.student}</div>
            <div className='text-xl italic'>{val.faculty}</div>
          </div>
        </a>
    ))}
      </div>
    </div>
  )
}

export default About