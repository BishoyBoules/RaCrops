"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import logo from '../../../public/racrops-logo.png'

const Navbar = () => {
    const [isClient, setIsClient] = useState(false)
    const [page, setPage] = useState(0)
    const navbarElement = 
    <nav className='p-4 flex flex-row items-center justify-between fixed top-0 w-full bg-white rounded-b-lg'>
        <section>
            <Image width={100} src={logo} alt='logo'/>
        </section>
        <section className='flex flex-row items-center justify-between w-1/3 pr-20'>
            <Link onClick={() => setPage(0)} className={'font-bold text-2xl ' + (page == 0 ? "text-[#fbc731]" : "text-[#d0372a]")} href="./">Home</Link>
            <Link onClick={() => setPage(1)} className={'font-bold text-2xl ' + (page == 1 ? "text-[#fbc731]" : "text-[#d0372a]")} href="./about">About</Link>
            <Link className='font-bold text-2xl text-[#d0372a]' href="#contact">Contact</Link>
        </section>
    </nav>

    useEffect(() => {
        setIsClient(true)
    }, [])
  return isClient &&  navbarElement
}

export default Navbar