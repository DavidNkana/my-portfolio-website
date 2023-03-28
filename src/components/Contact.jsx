import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

import { contact } from '../data'

const Result = () => {
    return (
        <p className='text-accent'>Your message has been sent successfully, I will reply very soon!</p>
    )
}

const Contact = () => {
    const [result, showResult] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_so29jzr', e.target, 'MlCY4iuMdEO5HKeje')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true)
      };

  return (
    <section className='section bg-primary ' id='contact'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className="section-title before:content-contact relative before:absolute  before:-top-7 before:hidden before:right-40 before:lg:block">Contact Me</h2>
                <p className="subtitle"> Please feel free to contact me anytime. I look forward to hearing from you.</p>
            </div>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row container mx-auto">
            <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                {contact.map((item, index) => {
                    const {icon, title, subtitle, description} = item
                    return (
                    <>
                        <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                            <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">{icon}</div>
                        </div>
                        <div className="">
                            <h4 className='font-body text-xl mb-1'>{title}</h4>
                            <p className='mb-1'>{subtitle}</p>
                            <p className='text-accent font-normal'>{description}</p>
                        </div>
                    </>
                    
                    )

                })}
            </div>

                <form className='space-y-8 w-full max-w-[780px]' onSubmit={sendEmail}>
                    <div className="flex gap-8">
                        <input name='name' className='input ' placeholder='Enter your name' type="text" required />
                        <input name='email' className='input ' placeholder='Enter your email' type="email" required />
                    </div>
                    <input type="text" placeholder='Subject' className='input' name='subject'/>
                    <textarea  name="message" className='textarea' placeholder='Enter your message' required></textarea>
                    <div className="row">
                        {result ? <Result /> : null}
                    </div>
                    <button className='btn btn-lg bg-accent hover:bg-accent-hover'>Send</button>
                    
                </form>
            
        </div>
    </section> 
  )
}

export default Contact