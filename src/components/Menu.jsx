import React from 'react'

const Menu = ({className, text}) => {
  return (
    <ul>
        <li>
          <button className={`${className}`}>{text}</button>
        </li>
    </ul>
  )
}

export default Menu