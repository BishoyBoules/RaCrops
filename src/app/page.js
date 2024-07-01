"use client"
import { useContext } from 'react'
import Image from 'next/image'
import tomato from '../../public/read-more-tomato.png'
import { LangContext } from '../store/context/LangContext'

export default function Home() {
  const {language, changeLang} = useContext(LangContext)
  return (
    <div className="flex flex-col items-center md:mt-36 mt-20">
      <h1 className="md:text-start text-center w-full font-extrabold lg:px-24 md:px-10 px-0 md:text-6xl text-3xl mb-16 text-[#d0372a]">RaCrops</h1>
      <section className='flex lg:flex-row flex-col justify-between lg:px-24 px-0 items-center mb-5'>
        <section className='flex flex-col lg:w-1/2 w-full'>
          <h3 className='md:text-3xl text-center lg:text-start text-xl lg:px-10 px-0 mb-2 font-bold text-[#fbc731]'>{language== "en" ? "Introduction" : "Introductie"}</h3>
          <p className='text-xl p-5 md:px-10 lg:text-start text-center rounded-3xl text-white font-semibold'>
          {language== "en" ? "RaCrops is a pioneering company specializing in the dehydration of a wide variety of agricultural products. Established with the vision of providing high-quality, naturally preserved foods, RaCrops has rapidly grown into a trusted name in the industry. Our advanced dehydration techniques ensure that the nutritional value, flavor, and quality of the products are maintained while extending their shelf life significantly." : "Racops is een baanbrekend bedrijf dat gespecialiseerd is in de dehydratatie (OF het drogen of HET ZONDROGEN) van een grote verscheidenheid aan landbouw producten. Opgericht met het doel om hoogwaardige, natuurlijk geconserveerde voedingsmiddelen te leveren, is Racrops snel uitgegroeid tot een vertrouwde naam in de branche. Onze geavanceerde dehydratatietechnieken (OF ZONDROOGTECHNIEKEN)  zorgen ervoor dat de voedingswaarde, smaak en kwaliteit van de producten behouden blijven, terwijl de houdbaarheid ervan aanzienlijk wordt verlengd."}
          </p>
        </section>
        <section>
          <Image className='lg:w-[500px] w-[300px]' src={tomato} alt='tomato'/>
        </section>
      </section>
    </div>
  )
}