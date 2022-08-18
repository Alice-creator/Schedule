import React from 'react'
import DropdownItem from '../DropdownItem'

const DropdownList = ({sidebar}) => {
  return (
    <div>
        {sidebar && (
            <div className='dropdown__sidebar flex flex-col px-5 py-2'>
                <DropdownItem languages />
                <DropdownItem bgImg/>
            </div>
        )}
    </div>
  )
}

export default DropdownList