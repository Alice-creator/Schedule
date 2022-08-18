import React, { useState, createContext } from 'react'
import Loading from '../Layout/Loading'
import { useLocalStorage } from '../LocalStorage'

const ExtensionsContext = createContext()

function ExtensionsProvider({ children }) {
	const [ darkmode, setDarkmode ] = useLocalStorage('darkTheme', false)
	const [ language, setLanguage ] = useLocalStorage('language',false)
	const [ isTourOpen, setIsTourOpen ] = useLocalStorage('isTourOpen', true)
	const [ bgImg, setBgImg ] = useState(false)
	const [ loading, setLoading ] = useState(false)

	const [ color, setColor ] = useState({
        number: 1,
        status: true
    })
	const [ table, setTable ] = useState(false)

	// console.log(darkmode)
	if(loading) {
		return (
		  <Loading />
		)
	}
	return (
		<ExtensionsContext.Provider
			value={{
				darkmode,
				setDarkmode,
				bgImg,
				setBgImg,
				language,
				setLanguage,
				loading,
				setLoading,
				color,
				setColor, 
				table, 
				setTable,
				isTourOpen, 
				setIsTourOpen
			}}
		>
			{children}
		</ExtensionsContext.Provider>
	)
}

export { ExtensionsProvider, ExtensionsContext }
