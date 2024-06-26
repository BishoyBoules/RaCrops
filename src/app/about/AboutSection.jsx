import React from 'react'

const AboutSection = ({header, paragraph}) => {
  return (
        <section className='flex flex-col items-center px-24 mb-8'>
            <h1 className='text-center font-extrabold text-5xl mb-10 text-[#fbc731]'>{header}</h1>
            <p className='text-xl text-center font-semibold p-5 rounded-3xl text-white'>{paragraph}</p>
        </section>
)}

export default AboutSection