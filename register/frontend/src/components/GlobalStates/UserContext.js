import React, { useState, createContext, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import jwtDecode from 'jwt-decode'
import axios from 'axios'

const UserContext = createContext()

function UserProvider({ children }) {
	const [cookies] = useCookies('access_token')
	const [user, setUser] = useState(() => {
		const token = cookies.access_token
		if (token) {
			const user = jwtDecode(token)

			return user
		}
		return null
	})
	const [ registerSubject, setRegisterSubject ] = useState([])
	const [ listRegisterSubject, setListRegisterSubject ] = useState([])
	const [ favouriteSubject, setFavouriteSubject ] = useState([])

	useEffect(() => {
        const getSubjects = async () => {
            const config = {
                method: 'GET',
                url: 'users/subjects',
				params: { email: user.email },
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
            }
            const { data } = await axios(config)
            setListRegisterSubject(data)
        }
        getSubjects()
    }, [registerSubject])

	useEffect(() => {
        const getSubjects = async () => {
            const config = {
                method: 'GET',
                url: 'users/favourite',
				params: { email: user.email },
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
            }
            const { data } = await axios(config)
			
            setFavouriteSubject(data)
        }
        getSubjects()
    }, [])
	
	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				registerSubject, 
				setRegisterSubject,
				listRegisterSubject,
				setListRegisterSubject,
				favouriteSubject,
				setFavouriteSubject
			}}
		>
			{children}
		</UserContext.Provider>
	)
}

export { UserProvider, UserContext }
