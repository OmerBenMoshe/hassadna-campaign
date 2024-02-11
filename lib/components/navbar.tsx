'use client'
import Image from 'next/image';
import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <div id="NavbarContainer" className='flex justify-between items-center'>
      <div id="JoinContainer" className='flex items-center'>
        <button id="JoinButton" className='rounded-lg bg-white text-black p-2'>Join us!</button>
        </div>
      <div id="LogoContainer" className='flex items-center'>
        <Image src={logo} alt="Logo" width={288} height={36}/>
        </div>
    </div>
  )
}