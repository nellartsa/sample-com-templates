import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import dropdown from '../designs/svg/main-dropdown.svg'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSelected, SetIsSelected] = useState('Stellar Rabbit')

  return (
    <>
      <div className='main-navi'>
        <h1>Community Templates</h1>
        <div className='custom-select'>
          <label>Templates</label>
          <div onClick={() => setIsOpen(!isOpen)} className='select'>
            {isSelected}
            <img
              src={dropdown}
              alt=''
              className={`${isOpen ? 'active' : ''}`}
            />
          </div>

          <div className={`options ${isOpen ? 'active' : ''}`}>
            <Link to='/sample-com-templates'>
              <div
                onClick={() => {
                  SetIsSelected('Stellar Rabbit')
                  setIsOpen(!isOpen)
                }}
                className='link'
              >
                Stellar Rabbit
              </div>
            </Link>
            <Link to='/sample-com-templates/Gaslur'>
              <div
                onClick={() => {
                  SetIsSelected('Gaslur')
                  setIsOpen(!isOpen)
                }}
                className='link'
              >
                Gaslur
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
