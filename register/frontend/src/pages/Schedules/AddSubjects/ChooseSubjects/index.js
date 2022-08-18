import axios from 'axios';
import React, { memo, useCallback, useContext, useEffect, useState } from 'react'
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { SubjectContext } from '../../../../components/GlobalStates/SubjectsContext';
import { ExtensionsContext } from '../../../../components/GlobalStates/ExtensionsContext';
import Subject from '../../Schedule/Subject';
import { UserContext } from '../../../../components/GlobalStates/UserContext';
import { getListOptions } from '../../../../data/Filter';
import { handleTableSubject } from '../../../../algorithm/handleTableSubject';
import DeletedSubject from '../../Schedule/DeletedSubject';
import { t } from 'i18next';

const ChooseSubjects = () => {
    const { setRegisterSubject } = useContext(UserContext)
    const { groupSubjects, setGroupSubjects } = useContext(SubjectContext)
    const { color, setIsTourOpen } = useContext(ExtensionsContext)
    const { trainnings, faculties } = useContext(SubjectContext)
    const [ subject, setSubject ] = useState()    
    const [ facultyTrainning, setFacultyTrainning ] = useState({
      faculty: undefined,
      trainning: undefined
    })

    const [ deletedSubject, setDeletedSubject ] = useState([])

    const trainningOptions = getListOptions(trainnings)
    const facultygOptions = getListOptions(faculties)
    const subjectOptions = getListOptions(subject)

    const handleFacultyChange = (e) => {
      setFacultyTrainning((prev) =>({...prev, faculty: e.value}))
      setGroupSubjects([])
      setDeletedSubject([])
    }
    const handleTrainningChange = (e) => {
      setFacultyTrainning((prev) =>({...prev, trainning: e.value}))
      setGroupSubjects([])
      setDeletedSubject([])
    }
    
    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log(facultyTrainning);
      const config = {
        method: 'POST',
        url: 'subjects/name',
        params: facultyTrainning, 
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          // Authorization: `Bearer ${cookies.token}`,
        },
      }
      const {data} = await axios(config)
      setSubject(data);
    }
    const handleSubjectChange = async (e) => {
        const nameObj = {
          title: e.value,
          faculty: facultyTrainning.faculty,
          trainning: facultyTrainning.trainning,
        }
        const config = {
          method: 'POST',
          url: 'subjects/find-names',
          params: nameObj, 
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            // Authorization: `Bearer ${cookies.token}`,
          },
        }
        const {data} = await axios(config)
        setGroupSubjects(data);
        setDeletedSubject([])
    }
    const handleResgisterSubject = () => {
      setRegisterSubject((prev) => [...prev, groupSubjects])
      setGroupSubjects([])
      setDeletedSubject([])
    }

    handleTableSubject(groupSubjects, setGroupSubjects, deletedSubject, setDeletedSubject, true)

  return (
    <div className='flex flex-col text-left flex-1'>
      <div className='py-8 px-5'>
        <h2 className='text-left mb-6 font-semibold text-big dark:text-slate-50'>{t("schedule.createTimetable.title")}</h2>
        <div data-tut="second-step">
          <div className='flex flex-col text-left flex-1 mb-4'>
            <div className='text-xl font-medium dark:text-slate-50 mb-2'>{t("schedule.createTimetable.trainning")}</div>
            <Select
              onChange={(e) => handleTrainningChange(e)}
              components={makeAnimated()}
              options={trainningOptions}
            />
          </div>
          <div className='flex flex-col text-left flex-1'>
            <div className='text-xl font-medium dark:text-slate-50 mb-2'>{t("schedule.createTimetable.faculty")}</div>
            <Select
              onChange={(e) => handleFacultyChange(e)}
              components={makeAnimated()}
              options={facultygOptions}
              // defaultInputValue={facultyTrainning.faculty}
            />
          </div>
        </div>
        
        <div className='flex justify-center' data-tut="third-step">
          <button type='submit' onClick={handleSubmit}
            className='bg-primary p-3 text-slate-50 tracking-wide text-xl my-5 w-full rounded-md'
          >{t("schedule.createTimetable.chooseSubject")}</button>
        </div>
        <div className=''>
          {subject && 
            <>
              <div className='text-xl font-medium dark:text-slate-50 mb-2'>{t("schedule.createTimetable.subject")}</div>
              <Select
                onChange={(e) => handleSubjectChange(e)}
                components={makeAnimated()}
                options={subjectOptions}
              />
              
              <div className='grid grid-cols-3 gap-2 mt-2'>
                  {groupSubjects?.map((value) => (
                      <Subject 
                        deletedSubject={deletedSubject} 
                        setDeletedSubject={setDeletedSubject} 
                        groupSubjects={groupSubjects} 
                        setGroupSubjects={setGroupSubjects} 
                        color='0' 
                        value={value} 
                        isDelete
                      />
                  ))}     
                  {deletedSubject?.map((value) => (
                    <DeletedSubject 
                      deletedSubject={deletedSubject} 
                      setDeletedSubject={setDeletedSubject} 
                      groupSubjects={groupSubjects} 
                      setGroupSubjects={setGroupSubjects} 
                      color={color} 
                      value={value} 
                      isRestore
                    />
                  ))}  
              </div> 
              {groupSubjects.length > 0 &&
                <div className="flex justify-center flex-1">
                  <button className="bg-primary p-3 text-slate-50 tracking-wide text-xl my-5 w-full rounded-md" onClick={handleResgisterSubject}>
                    {t("schedule.createTimetable.add")}
                  </button>
                </div>
              }
            </>
          }   
        </div>
      </div>
    </div>
  )
}

export default memo(ChooseSubjects)