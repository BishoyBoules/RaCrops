import Image from 'next/image'
import tomato from '../../public/read-more-tomato.png'

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-36">
      <h1 className="md:text-start text-center w-full font-extrabold lg:px-24 md:px-10 px-0 md:text-6xl text-3xl mb-16 text-[#d0372a]">RaCrops</h1>
      <section className='flex lg:flex-row flex-col justify-between lg:px-24 px-0 items-center mb-5'>
        <section className='flex flex-col lg:w-1/2 w-full'>
          <h3 className='md:text-3xl text-center lg:text-start text-xl lg:px-24 px-0 mb-2 font-bold text-[#fbc731]'>Introduction</h3>
          <p className='text-xl p-5 md:px-10 lg:text-start text-center rounded-3xl text-white font-semibold'>
          RaCrops is a pioneering company specializing in the dehydration of a wide variety of agricultural products. Established with the vision of providing high-quality, naturally preserved foods, RaCrops has rapidly grown into a trusted name in the industry. Our advanced dehydration techniques ensure that the nutritional value, flavor, and quality of the products are maintained while extending their shelf life significantly.
          </p>
        </section>
        <section>
          <Image className='lg:w-[500px] w-[300px]' src={tomato} alt='tomato'/>
        </section>
      </section>
    </div>
  )
}