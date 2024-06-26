import React from 'react'
import AboutSection from './AboutSection'
import Navbar from '..//components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  const sections = 
  [
    {
      header: 'Our Mission',
      paragraph: 'At RaCrops, our mission is to deliver dehydrated food products that meet the highest standards of quality and safety. We are committed to sustainability and innovation, continuously improving our processes to reduce environmental impact while enhancing the quality of our offerings. Our mission is not just to sustain but to grow, nurturing a healthier and more sustainable future for our planet and the people on it.'
    },
    {
      header: 'Services and Products',
      paragraph: 'RaCrops offers a wide range of dehydrated products, including fruits, vegetables, herbs, and spices. Our state-of-the-art facilities are equipped with the latest technology to ensure that each product is dehydrated to perfection. We cater to various industries including food processing, retail, and hospitality, providing customized solutions to meet the specific needs of our clients.'
    },
    {
      header: 'Quality Assurance',
      paragraph: 'Quality is at the heart of everything we do at RaCrops. Our stringent quality control measures ensure that every product meets international standards. From the selection of raw materials to the final packaging, every step is meticulously monitored to guarantee that our customers receive nothing but the best.'
    },
    {
      header: 'Sustainability',
      paragraph: 'We take our responsibility towards the environment seriously. RaCrops employs eco-friendly practices throughout the production process. We strive to minimize waste, use renewable energy sources, and support local farming communities. Our goal is to create a sustainable business model that benefits both the environment and society.'
    },
    {
      header: 'Innovation',
      paragraph: 'Innovation drives us forward. RaCrops invests heavily in research and development to improve our dehydration techniques and introduce new products to the market. Our dedicated team of experts is constantly exploring new ways to enhance the quality, taste, and nutritional value of our products.'
    },
    {
      header: 'Partnership and Collaboration',
      paragraph: 'We believe in building strong relationships with our partners and clients. RaCrops works closely with farmers, suppliers, and customers to ensure a seamless supply chain. Our collaborative approach ensures mutual growth and success.'
    },
    {
      header: 'Why Choose RaCrops?',
      paragraph: 'Quality Assurance: We adhere to the highest standards of quality control, ensuring that every batch meets stringent specifications for moisture content, purity, and consistency.'+ "\n" +
      'Sustainability: Our processes are designed with sustainability in mind. We strive to reduce energy consumption and minimize our environmental footprint through innovative techniques and responsible practices.'
    }
  ]
  return (
    <div>
      <Navbar/>
      <h1 className='text-center px-24 w-full font-extrabold md:text-6xl sm:text-3xl mb-16 mt-36 text-[#d0372a]'>About us</h1>
      {sections.map(({header, paragraph}) =>  <AboutSection key={header} header={'--' + header + '--'} paragraph={paragraph}/>)}
      <Footer/>
    </div>
  )
}

export default About