import React from 'react'

const CalendarRecent = ({ index }) => {
  return (
    <table className={`table-storage-${index} w-full h-full text-lg table-fixed bg-white dark:bg-darkmode`}>
            <thead>
                <tr className='bg-primary-color dark:bg-slate-600 py-1'>
                    <th className='py-1'>M</th>
                    <th className='py-1'>T</th>
                    <th className='py-1'>W</th>
                    <th className='py-1'>TH</th>
                    <th className='py-1'>F</th>
                    <th className='py-1'>S</th>
                    <th className='py-1'>S</th>
                </tr>
            </thead>
            <tbody>
              <tr className='h-24 text-center'>                  
              <td className="py-1 st1-2"></td>
              <td className="py-1 st1-3"></td>
                    <td className="py-1 st1-4"></td>
                    <td className="py-1 st1-5"></td>
                    <td className="py-1 st1-6"></td>
                    <td className="py-1 st1-7"></td>
                    <td className="py-1 st1-8"></td>
                </tr>
                <tr className='h-24 text-center'>
                    <td className="py-1 st2-2"></td>
                    <td className="py-1 st2-3"></td>
                    <td className="py-1 st2-4"></td>
                    <td className="py-1 st2-5"></td>
                    <td className="py-1 st2-6"></td>
                    <td className="py-1 st2-7"></td>
                    <td className="py-1 st2-8"></td>
                </tr>
                
                
            </tbody>
            </table>
  )
}

export default CalendarRecent