import React from 'react'
import HomePage from '../../../assets/Homepage.png'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useTranslation } from 'react-i18next'
import { t } from 'i18next'

const Home = () => {
  const [ cookies ] = useCookies('access_token')
  // const { t } = useTranslation()
  console.log(cookies);
  return (
    <div className='flex justify-between w-full'>
      <div className='flex-1 flex items-center px-28'>
        <div className='flex flex-col px-14'>
          <h1 className='scale-up-ver-bottom text-8xl text-shadow text-primary font-black tracking-wider dark:text-blue-400'>{t("homepage.home.title")}</h1>
          <div className='my-16'>
            <div className='flex items-center scale-up-ver-bottom'>
              <div className='h-px w-36 mr-2 bg-primary'></div>
              <h3 className='text-3xl font-semibold text-primary mb-3'> {t("homepage.home.support")}</h3>           
            </div>
            <p className='scale-up-ver-bottom text-basic text-slate-500 italic'>{t("homepage.home.content")}</p>
          </div>
          <Link to='/editor'>
            <button className=' bg-primary py-4 px-16 tracking-wider shadow-primaryBoxShadow text-2xl font-medium text-white rounded-xl '>{t("homepage.home.start")}</button>
          </Link>
        </div>
      </div>
      <div className='flex-1 m-auto'>
        <img className='scale-up-ver-bottom' src={HomePage} />
      </div>

    </div>
  )
}

export default Home