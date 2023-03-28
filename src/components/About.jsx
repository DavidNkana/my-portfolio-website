import React from 'react'
import Image from '../assets/img/about.jpg'

const About = () => {
  return (
    <section id='about' className="section bg-secondary">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-24">
                <img className='object-cover h-full w-[500px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt="" />
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="flex flex-col">
                        <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute  before:-top-[2rem] before:hidden before:lg:block" >David Nkana</h2>
                        <p className='mb-4 text-accent '>Front-end Developer | UX/UI Designer</p>
                        <hr className='mb-8 opacity-5'/>
                        <p className='mb-8'> I'm a positive, enthusiastic, and competent Developer with strong coding skills and a knack for problem-solving. Possesses a deep passion for C#, JavaScript, React, game development, UI/UX design, and new technologies. Demonstrated exemplary ability to work independently or on time-sensitive projects within teams while exhibiting attention to detail and exceptional organizational capabilities. Able to rapidly assimilate information from diverse sources and apply the knowledge effectively in resolving complex issues with ease. Highly motivated with an appetite for continued professional growth in IT development space. And I love Pizza, Parkour and Video games. 🍕🤸‍♂️🎮</p>
                        <a href="mailto:davidnkana74@gmail.com" className='btn btn-md bg-accent hover:bg-accent-hover transition-all'><button className=''>Reach out</button></a>
                        
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About