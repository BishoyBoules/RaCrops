import Image from 'next/image'
import tomato from '../../public/read-more-tomato.png'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-36">
      <Navbar/>
      <h1 className="text-center font-extrabold px-24 text-6xl mb-10 text-[#d0372a]">RaCrops</h1>
      <section className='flex flex-row justify-between px-24 items-center mb-5'>
        <section className='flex flex-col w-1/2'>
          <h3 className='text-3xl mb-2 font-bold text-[#fbc731]'>Introduction</h3>
          <p className='text-xl bg-white p-5 rounded-3xl text-[#d0372a] font-semibold'>
          RaCrops is a pioneering company specializing in the dehydration of a wide variety of agricultural products. Established with the vision of providing high-quality, naturally preserved foods, RaCrops has rapidly grown into a trusted name in the industry. Our advanced dehydration techniques ensure that the nutritional value, flavor, and quality of the products are maintained while extending their shelf life significantly.
          </p>
        </section>
        <section>
          <Image width={350} src={tomato} alt='tomato'/>
        </section>
      </section>
      <Footer/>
    </div>
  )
}