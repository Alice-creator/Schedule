import React, { useState, createContext, useEffect, useRef, useCallback } from 'react'
import { useCookies } from 'react-cookie'
import jwtDecode from 'jwt-decode'
import axios from 'axios'

const SubjectContext = createContext()

function SubjectProvider({ children }) {
	const keys = useRef([])
	const [ groupSubjects, setGroupSubjects ] = useState([])
	const [ subjects, setSubjects ] = useState([])
	const [ faculties, setFaculties ] = useState([])
    const [ trainnings, setTrainnings ] = useState([])
    const [ sorted, setSorted ] = useState([]) 
    const [ chooseSorted, setChooseSorted ] = useState([]) 
    
    

    useEffect(() => {
        const getSubjects = async () => {
            const config = {
                method: 'GET',
                url: 'subjects',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    // Authorization: `Bearer ${cookies.token}`,
                },
            }
            const { data } = await axios(config)
            keys.current = Object.keys(data[0])
            setSubjects(data)
        }
        getSubjects()
    }, [])
    useEffect(() => {
        const getFaculties = async () => {
            const config = {
                method: 'GET',
                url: 'subjects/faculty',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    // Authorization: `Bearer ${cookies.token}`,
                },
            }
            const { data } = await axios(config)
            setFaculties(data)
        }
        getFaculties()
    }, [])
    useEffect(() => {
        const getTrainnings = async () => {
            const config = {
                method: 'GET',
                url: 'subjects/trainning-system',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    // Authorization: `Bearer ${cookies.token}`,
                },
            }
            const { data } = await axios(config)
            setTrainnings(data)
        }
        getTrainnings()
    }, [])

	return (
		<SubjectContext.Provider
			value={{
                keys,
                faculties,
                setFaculties,
                trainnings,
                setTrainnings,
                groupSubjects,
                setGroupSubjects,
				subjects,
				setSubjects,
                sorted, 
                setSorted,
                chooseSorted, 
                setChooseSorted 
			}}
		>
			{children}
		</SubjectContext.Provider>
	)
}

export { SubjectProvider, SubjectContext }
