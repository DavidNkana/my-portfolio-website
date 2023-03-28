import React from 'react'
import {social} from '../data'

const Socials = () => {
  return (
    <div>
      <ul className='flex space-x-6'>
        {social.map((item, index) => {
          return (
            <li className='flex justify-center items-center text-accent' key={index}>
              <a href={item.href} className='text-base' target={item.target}>
                {item.icon}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Socials