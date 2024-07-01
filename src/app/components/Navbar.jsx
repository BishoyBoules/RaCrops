"use client"
import Link from 'next/link'
import Image from 'next/image'
import {useEffect, useState, useContext, useRef} from 'react'
import logo from '../../../public/racrops-logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import english from '../../../public/english.png'
import dutch from '../../../public/dutch.svg'
import {LangContext} from '../../store/context/LangContext'

const Navbar = () => {
    const navRef = useRef(null)
    const [isClient, setIsClient] = useState(false)
    const [page, setPage] = useState(0)
    const [engPopup, setEngPopup] = useState(false)
    const [dutPopup, setDutPopup] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const {language, changeLang} = useContext(LangContext)
    const navbarElement = 
        <nav ref={navRef} className='lg:p-4 p-2 flex flex-row items-center justify-between fixed top-0 w-full bg-white rounded-b-lg'>
            <section>
                <Image className='md:w-16 lg:w-20 w-10' src={logo} alt='logo'/>
            </section>
            <section className={'md:w-2/3 md:flex md:flex-row flex-col items-center md:justify-between justify-evenly md:static md:bg-transparent bg-white fixed right-0 top-0 h-full ' + (showMenu ? "flex" : "hidden")}>
                <section className='flex md:flex-row flex-col items-center justify-between w-1/2'>
                    <Link onClick={() => setPage(0)} className={'font-bold lg:text-2xl md:mr-10 md:ml-10 text-md ' + (page == 0 ? "text-[#fbc731]" : "text-[#d0372a]")} href="./">Home</Link>
                    <Link onClick={() => setPage(1)} className={'font-bold lg:text-2xl md:mr-10 text-lg ' + (page == 1 ? "text-[#fbc731]" : "text-[#d0372a]")} href="./about">About</Link>
                    <Link className='font-bold lg:text-2xl text-lg text-[#d0372a]' href="#contact">Contact</Link>
                </section>
                <section className='flex flex-row items-center justify-between lg:pr-20 md:pr-10 pr-5 relative'>
                    <Image src={english} width={35} className='m-2 cursor-pointer' alt='english' onMouseEnter={() => setEngPopup(true)} onMouseLeave={() => setEngPopup(false)} onClick={() => changeLang("en")}/>
                    {engPopup && <span className='bg-white rounded-md text-xs font-bold p-1 absolute ml-5 mb-10 text-black'>English</span>}
                    <Image src={dutch} width={35} alt='dutch' className='cursor-pointer' onMouseEnter={() => setDutPopup(true)} onMouseLeave={() => setDutPopup(false)} onClick={() => changeLang("dut")}/>
                    {dutPopup && <span className='bg-white rounded-md text-xs font-bold p-1 absolute ml-16 mb-10 text-black'>Dutch</span>}
                </section>
            </section>
            <section className='md:hidden'>
                <FontAwesomeIcon
                    icon={faBars}
                    className="fa-language"
                    style={{ color: "#d0372a", fontSize: 30, paddingRight: 10 }}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </section>
        </nav>

    useEffect(() => {
        setIsClient(true)
        function handleClick(e) {
            if(navRef.current && !navRef.current.contains(e.target)){
                setShowMenu(false)
            }
        }
        document.addEventListener("mousedown", handleClick)
    }, [])
  return isClient && navbarElement
}

export default Navbar