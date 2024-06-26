import React from 'react'

const AboutSection = ({header, paragraph}) => {
  return (
        <section className='flex flex-col items-center lg:px-24 px-0 mb-8'>
            <h1 className='text-center font-extrabold md:text-5xl text-2xl mb-10 text-[#fbc731]'>{header}</h1>
            <p className='md:text-xl text-lg text-center font-semibold p-5 rounded-3xl text-white'>{paragraph}</p>
        </section>
)}

export default AboutSection