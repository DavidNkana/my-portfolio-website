import React from 'react'

const Project = ({item}) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
        <h3 className="text-2xl font-semibold mb-7">{item.name}</h3>

        <div className="mb-4">
            <img className='rounded-2xl' src={item.image} alt="" />
        </div>
        <div className="link text-center m-2 ">
          <h4>{item.coming}</h4>
        </div>
        <div className="text-center mb-4">{item.description}</div>
        <div className="links flex flex-row gap-20 mt-5">
          <a href={item.href} className='text-accent' target={item.target}>{item.github}</a>
          <a href={item.hrefProject} className='text-accent' target={item.target}>{item.project}</a>
        </div>
        <div className="link text-center">
        <a href='https://multcomingsoon.netlify.app/' className='text-accent' target='_blank'>{item.more}</a>

        </div>
    </div>
  )
}

export default Project