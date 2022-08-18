import { t } from 'i18next'
import React, { memo, useContext, useEffect } from 'react'
import { handleTableSubject } from '../../../../algorithm/handleTableSubject'
import { UserContext } from '../../../../components/GlobalStates/UserContext'

const Calendar = () => {
    const { favouriteSubject, setFavouriteSubject } = useContext(UserContext)
    
    useEffect(() => {
        if(favouriteSubject.length > 0 ) {
            handleTableSubject(favouriteSubject, setFavouriteSubject, false)
        }
    }, [favouriteSubject])
  return (
    <div className='text-xl'>  
        <table className="w-full table-fixed border-collapse bg-white dark:bg-darkmode rounded-2xl overflow-hidden shadow-2xl" id="myTable">
            <thead>
                <tr className='border-b border-gray-400 bg-blue-400 text-slate-900 dark:bg-blue-600 py-2'>
                    <th className='w-24 lg:w-32 border-gray-400 py-2'>{t("calendar.shiftDay")}</th>
                    <th className='border-l border-gray-400 py-2'>{t("calendar.mon")}</th>
                    <th className='border-l border-gray-400 py-2'>{t("calendar.tue")}</th>
                    <th className='border-l border-gray-400 py-2'>{t("calendar.web")}</th>
                    <th className='border-l border-gray-400 py-2'>{t("calendar.thu")}</th>
                    <th className='border-l border-gray-400 py-2'>{t("calendar.fri")}</th>
                    <th className='border-l border-gray-400 py-2'>{t("calendar.sat")}</th>
                    <th className='border-l border-gray-400 py-2'>{t("calendar.sun")}</th>
                </tr>
            </thead>
            <tbody>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>1</td>
                    <td className='border-l p-2 border-gray-400' id="1-2"></td>
                    <td className='border-l p-2 border-gray-400' id="1-3"></td>
                    <td className='border-l p-2 border-gray-400' id="1-4"></td>
                    <td className='border-l p-2 border-gray-400' id="1-5"></td>
                    <td className='border-l p-2 border-gray-400' id="1-6"></td>
                    <td className='border-l p-2 border-gray-400' id="1-7"></td>
                    <td className='border-l p-2 border-gray-400' id="1-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>2</td>
                    <td className='border-l p-2 border-gray-400' id="2-2"></td>
                    <td className='border-l p-2 border-gray-400' id="2-3"></td>
                    <td className='border-l p-2 border-gray-400' id="2-4"></td>
                    <td className='border-l p-2 border-gray-400' id="2-5"></td>
                    <td className='border-l p-2 border-gray-400' id="2-6"></td>
                    <td className='border-l p-2 border-gray-400' id="2-7"></td>
                    <td className='border-l p-2 border-gray-400' id="2-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>3</td>
                    <td className='border-l p-2 border-gray-400' id="3-2"></td>
                    <td className='border-l p-2 border-gray-400' id="3-3"></td>
                    <td className='border-l p-2 border-gray-400' id="3-4"></td>
                    <td className='border-l p-2 border-gray-400' id="3-5"></td>
                    <td className='border-l p-2 border-gray-400' id="3-6"></td>
                    <td className='border-l p-2 border-gray-400' id="3-7"></td>
                    <td className='border-l p-2 border-gray-400' id="3-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>4</td>
                    <td className='border-l p-2 border-gray-400' id="4-2"></td>
                    <td className='border-l p-2 border-gray-400' id="4-3"></td>
                    <td className='border-l p-2 border-gray-400' id="4-4"></td>
                    <td className='border-l p-2 border-gray-400' id="4-5"></td>
                    <td className='border-l p-2 border-gray-400' id="4-6"></td>
                    <td className='border-l p-2 border-gray-400' id="4-7"></td>
                    <td className='border-l p-2 border-gray-400' id="4-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>5</td>
                    <td className='border-l p-2 border-gray-400' id="5-2"></td>
                    <td className='border-l p-2 border-gray-400' id="5-3"></td>
                    <td className='border-l p-2 border-gray-400' id="5-4"></td>
                    <td className='border-l p-2 border-gray-400' id="5-5"></td>
                    <td className='border-l p-2 border-gray-400' id="5-6"></td>
                    <td className='border-l p-2 border-gray-400' id="5-7"></td>
                    <td className='border-l p-2 border-gray-400' id="5-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>6</td>
                    <td className='border-l p-2 border-gray-400' id="6-2"></td>
                    <td className='border-l p-2 border-gray-400' id="6-3"></td>
                    <td className='border-l p-2 border-gray-400' id="6-4"></td>
                    <td className='border-l p-2 border-gray-400' id="6-5"></td>
                    <td className='border-l p-2 border-gray-400' id="6-6"></td>
                    <td className='border-l p-2 border-gray-400' id="6-7"></td>
                    <td className='border-l p-2 border-gray-400' id="6-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>7</td>
                    <td className='border-l p-2 border-gray-400' id="7-2"></td>
                    <td className='border-l p-2 border-gray-400' id="7-3"></td>
                    <td className='border-l p-2 border-gray-400' id="7-4"></td>
                    <td className='border-l p-2 border-gray-400' id="7-5"></td>
                    <td className='border-l p-2 border-gray-400' id="7-6"></td>
                    <td className='border-l p-2 border-gray-400' id="7-7"></td>
                    <td className='border-l p-2 border-gray-400' id="7-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>8</td>
                    <td className='border-l p-2 border-gray-400' id="8-2"></td>
                    <td className='border-l p-2 border-gray-400' id="8-3"></td>
                    <td className='border-l p-2 border-gray-400' id="8-4"></td>
                    <td className='border-l p-2 border-gray-400' id="8-5"></td>
                    <td className='border-l p-2 border-gray-400' id="8-6"></td>
                    <td className='border-l p-2 border-gray-400' id="8-7"></td>
                    <td className='border-l p-2 border-gray-400' id="8-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>9</td>
                    <td className='border-l p-2 border-gray-400' id="9-2"></td>
                    <td className='border-l p-2 border-gray-400' id="9-3"></td>
                    <td className='border-l p-2 border-gray-400' id="9-4"></td>
                    <td className='border-l p-2 border-gray-400' id="9-5"></td>
                    <td className='border-l p-2 border-gray-400' id="9-6"></td>
                    <td className='border-l p-2 border-gray-400' id="9-7"></td>
                    <td className='border-l p-2 border-gray-400' id="9-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>10</td>
                    <td className='border-l p-2 border-gray-400' id="10-2"></td>
                    <td className='border-l p-2 border-gray-400' id="10-3"></td>
                    <td className='border-l p-2 border-gray-400' id="10-4"></td>
                    <td className='border-l p-2 border-gray-400' id="10-5"></td>
                    <td className='border-l p-2 border-gray-400' id="10-6"></td>
                    <td className='border-l p-2 border-gray-400' id="10-7"></td>
                    <td className='border-l p-2 border-gray-400' id="10-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>11</td>
                    <td className='border-l p-2 border-gray-400' id="11-2"></td>
                    <td className='border-l p-2 border-gray-400' id="11-3"></td>
                    <td className='border-l p-2 border-gray-400' id="11-4"></td>
                    <td className='border-l p-2 border-gray-400' id="11-5"></td>
                    <td className='border-l p-2 border-gray-400' id="11-6"></td>
                    <td className='border-l p-2 border-gray-400' id="11-7"></td>
                    <td className='border-l p-2 border-gray-400' id="11-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>12</td>
                    <td className='border-l p-2 border-gray-400' id="12-2"></td>
                    <td className='border-l p-2 border-gray-400' id="12-3"></td>
                    <td className='border-l p-2 border-gray-400' id="12-4"></td>
                    <td className='border-l p-2 border-gray-400' id="12-5"></td>
                    <td className='border-l p-2 border-gray-400' id="12-6"></td>
                    <td className='border-l p-2 border-gray-400' id="12-7"></td>
                    <td className='border-l p-2 border-gray-400' id="12-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>13</td>
                    <td className='border-l p-2 border-gray-400' id="13-2"></td>
                    <td className='border-l p-2 border-gray-400' id="13-3"></td>
                    <td className='border-l p-2 border-gray-400' id="13-4"></td>
                    <td className='border-l p-2 border-gray-400' id="13-5"></td>
                    <td className='border-l p-2 border-gray-400' id="13-6"></td>
                    <td className='border-l p-2 border-gray-400' id="13-7"></td>
                    <td className='border-l p-2 border-gray-400' id="13-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>14</td>
                    <td className='border-l p-2 border-gray-400' id="14-2"></td>
                    <td className='border-l p-2 border-gray-400' id="14-3"></td>
                    <td className='border-l p-2 border-gray-400' id="14-4"></td>
                    <td className='border-l p-2 border-gray-400' id="14-5"></td>
                    <td className='border-l p-2 border-gray-400' id="14-6"></td>
                    <td className='border-l p-2 border-gray-400' id="14-7"></td>
                    <td className='border-l p-2 border-gray-400' id="14-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>15</td>
                    <td className='border-l p-2 border-gray-400' id="15-2"></td>
                    <td className='border-l p-2 border-gray-400' id="15-3"></td>
                    <td className='border-l p-2 border-gray-400' id="15-4"></td>
                    <td className='border-l p-2 border-gray-400' id="15-5"></td>
                    <td className='border-l p-2 border-gray-400' id="15-6"></td>
                    <td className='border-l p-2 border-gray-400' id="15-7"></td>
                    <td className='border-l p-2 border-gray-400' id="15-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-14 text-center'>
                    <td className='w-24 lg:w-32 bg-blue-300 text-slate-900 font-semibold border-gray-400'>16</td>
                    <td className='border-l p-2 border-gray-400' id="16-2"></td>
                    <td className='border-l p-2 border-gray-400' id="16-3"></td>
                    <td className='border-l p-2 border-gray-400' id="16-4"></td>
                    <td className='border-l p-2 border-gray-400' id="16-5"></td>
                    <td className='border-l p-2 border-gray-400' id="16-6"></td>
                    <td className='border-l p-2 border-gray-400' id="16-7"></td>
                    <td className='border-l p-2 border-gray-400' id="16-8"></td>
                </tr>
                
            </tbody>
        </table>        
    </div>
  )
}

export default Calendar