import React from 'react'

const CalendarTimetable = () => {
  return (
    <table className="w-full table-fixed border-collapse dark:bg-darkmode" id="myModalTimetable">
        <thead>
            <tr className='border-b border-gray-400 bg-primary-color dark:bg-slate-600 py-2'>
                <th className='w-32 border-gray-400 py-2'>Time | Day</th>
                <th className='border-l border-gray-400 py-2'>MON</th>
                <th className='border-l border-gray-400 py-2'>TUE</th>
                <th className='border-l border-gray-400 py-2'>WEB</th>
                <th className='border-l border-gray-400 py-2'>THU</th>
                <th className='border-l border-gray-400 py-2'>FRI</th>
                <th className='border-l border-gray-400 py-2'>SAT</th>
                <th className='border-l border-gray-400 py-2'>SUN</th>
            </tr>
        </thead>
        <tbody>
            <tr className='row border-b border-gray-400 h-72 text-center'>
                <td className='w-32 border-gray-400'>AM</td>
                <td className='border-l p-2 border-gray-400' id="md1-2"></td>
                <td className='border-l p-2 border-gray-400' id="md1-3"></td>
                <td className='border-l p-2 border-gray-400' id="md1-4"></td>
                <td className='border-l p-2 border-gray-400' id="md1-5"></td>
                <td className='border-l p-2 border-gray-400' id="md1-6"></td>
                <td className='border-l p-2 border-gray-400' id="md1-7"></td>
                <td className='border-l p-2 border-gray-400' id="md1-8"></td>
            </tr>
            <tr className='row border-b border-gray-400 h-72 text-center'>
                <td className='w-32 border-gray-400'>PM</td>
                <td className='border-l p-2 border-gray-400' id="md2-2"></td>
                <td className='border-l p-2 border-gray-400' id="md2-3"></td>
                <td className='border-l p-2 border-gray-400' id="md2-4"></td>
                <td className='border-l p-2 border-gray-400' id="md2-5"></td>
                <td className='border-l p-2 border-gray-400' id="md2-6"></td>
                <td className='border-l p-2 border-gray-400' id="md2-7"></td>
                <td className='border-l p-2 border-gray-400' id="md2-8"></td>
            </tr>
        </tbody>
        </table>   
  )
}

export default CalendarTimetable