import { t } from 'i18next';
import React, { memo, useContext } from 'react'
// import { handleTableSubject } from '../../../../algorithm/handleTableSubject'
// import { UserContext } from '../../../../components/GlobalStates/UserContext'

const CalendarWeek = () => {
    // const { favouriteSubject, setFavouriteSubject } = useContext(UserContext)
    const tableElement = document.getElementById("myTableWeek")
    const dayArr =  ['0', '1', '2', '3', '4', '5', '6', '7']
    console.log("Hihi");
    if(tableElement) {
        for (let i in tableElement.rows) {
            let row = tableElement.rows[i]
            let arr = ['0','1']
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            for (let j in row.cells) {
                let col
                if(j !== 'length' && j !== 'item' && j !== 'namedItem' ) {

                    col = row.cells[j]
                    if(i !== '0' && j !=='0') {

                        col.setAttribute('rowspan', 1)
                        col.innerHTML = ""
                            
                    }
                    if(col.id) {
                      arr.push(col.id[col.id.length - 1])
                    }
                }
            }
            if(arr.length > 2) {
                var k = 0
                var checkDay = []
                // var c = ""
                for(let v = 0; v < dayArr.length; v++)
                {
                    if(dayArr[v] == arr[k])
                    {
                        checkDay.push(false);
                        k++;
                    }
                    else
                    checkDay.push(true);
                }
                
                for(let v = 0; v < checkDay.length; v++) {
                    if(checkDay[v]) {
                        const roww = tableElement.rows[i]
                        roww.insertCell(v-1).setAttribute('class', 'border-l p-2 border-gray-400')
                        const cell = roww.cells[v-1]
                        if(cell) {
                            cell.setAttribute('id', `${i}-${v}`)
                            
                        }
                    }
                }
            }
            
         }
    }
  return (
    <div className='text-xl px-7'>  
        <table className="w-full table-fixed border-collapse dark:bg-darkmode bg-white rounded-2xl overflow-hidden shadow-2xl" id="myTableWeek">
            <thead>
                <tr className='border-b border-gray-400 bg-blue-400 dark:bg-blue-600 py-2'>
                <th className='w-32 border-gray-400 py-2'>{t("calendar.timeDay")}</th>
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
                <tr className='row border-b border-gray-400 h-72 text-center'>
                    <td className='w-32 border-gray-400 font-semibold'>AM</td>
                    <td className='border-l p-2 border-gray-400' id="am-2"></td>
                    <td className='border-l p-2 border-gray-400' id="am-3"></td>
                    <td className='border-l p-2 border-gray-400' id="am-4"></td>
                    <td className='border-l p-2 border-gray-400' id="am-5"></td>
                    <td className='border-l p-2 border-gray-400' id="am-6"></td>
                    <td className='border-l p-2 border-gray-400' id="am-7"></td>
                    <td className='border-l p-2 border-gray-400' id="am-8"></td>
                </tr>
                <tr className='row border-b border-gray-400 h-72 text-center'>
                    <td className='w-32 border-gray-400 font-semibold'>PM</td>
                    <td className='border-l p-2 border-gray-400' id="pm-2"></td>
                    <td className='border-l p-2 border-gray-400' id="pm-3"></td>
                    <td className='border-l p-2 border-gray-400' id="pm-4"></td>
                    <td className='border-l p-2 border-gray-400' id="pm-5"></td>
                    <td className='border-l p-2 border-gray-400' id="pm-6"></td>
                    <td className='border-l p-2 border-gray-400' id="pm-7"></td>
                    <td className='border-l p-2 border-gray-400' id="pm-8"></td>
                </tr>
            </tbody>
        </table>        
    </div>
  )
}

export default memo(CalendarWeek)