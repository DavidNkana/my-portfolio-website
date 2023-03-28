import React from 'react'
import Projects from './Projects'

const Portfolio = () => {
  return (
    <section id="portfolio" className='section bg-primary min-h-[1400px]'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className='section-title before:content-portfolio relative before:absolute  before:-top-[2rem] before:hidden before:lg:block before:right-40'>Some of my latest work</h2>
                <p className="subtitle">These are some of my latest projects.</p>
            </div>
        <Projects />

        </div>
    </section>
    
  )
}

export default Portfolio