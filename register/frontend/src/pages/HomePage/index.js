import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ExtensionsContext } from '../../components/GlobalStates/ExtensionsContext'
import HomepageLayout from '../../components/Layout/HomepageLayout'
import Home from "./Home"
import About from "./About"
import Algorithm from './Algorithm'
import i18n from '../../i18next'


const HomePage = () => {
  const { darkmode, language } = useContext(ExtensionsContext)
  if(language) {
    i18n.changeLanguage('en')
  } else {
    i18n.changeLanguage('vi')
  }
  return (
    <HomepageLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='algorithm' element={<Algorithm />} />
      </Routes>
    </HomepageLayout>
  )
}

export default HomePage