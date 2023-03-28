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

        {/* Mult is a 3D, first-person shooter game with incredible graphics and a captivating story. The game features the protagonist, tasked with battling multiple enemies throughout the journey. The development of this game involves working with Unity and C#. After 3 months of development time I'm confident that the final product will be something you won't forget anytime soon! 

  Developing a game in Unity takes a lot of time and effort to make sure it's up to par with all other games on the market. You need assets such as characters, models, animations, music, sound effects and post-processing effects to create your desired atmosphere in each level specifically for your players experience. Assets like these can be found for free online but otherwise can cost more depending on where you purchase them from. Additionally you need to set up user input controls including movement controls such as running jumping etc., along with programming user interface elements such as menus and overall gameplay mechanics could take a significant amount of time especially when debugging any small issues that may occur during production too! Trying out different inputs can also add more replay value if added correctly because it allows players to explore more possibilities within your given world or environment by using specific tools or actions which is why this project has been so exciting for me so far. */}
    </div>
  )
}

export default Project