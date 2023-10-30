import React from 'react'
import Img from '../assets/img/home.png'

const Hero = () => { 

  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-32 overflow-hidden'> 
        <div className="container mx-auto h-full">
            <div className="flex items-center h-full pt-8">
                <div className="flex-1 flex flex-col items-center lg:items-start">
                    <p className='text-lg text-accent mb-[22px] before:opacity-50 before:content-portfolio relative before:absolute  before:-top-[2rem] before:hidden before:lg:block'>Hi! I'm David 😊</p>
                    <h1 className='text-2xl leading-[44px] md:text-3xl md:leading-tight lg:text-5xl lg:leading[1.2] font-bold md:tracking-[-2px] mb-4'>I'm a Front-end Developer and an Indie Game Developer currently starting an Indie Game Studio.</h1>
                    <button className='btn mt-4 btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'><a href="https://drive.google.com/file/d/184YHxe2nWt8qfd82K4ow05RjTyHit0Vm/view?usp=sharing" target='_blank'>Download Resume</a></button>
                </div>
                <div className="hidden lg:flex flex-1 justify-end items-end ">
                    <img src={Img} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero