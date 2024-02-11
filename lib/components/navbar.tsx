'use client'
import Image from 'next/image';
import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center sticky top-0'>
      <div className='flex items-center p-5'>
        <button className='rounded-full outline-none text-black'>Join us!</button>
      </div>
      <div className='flex items-center p-5'>
        <Image src={logo} alt="Logo" width={288} height={36}/>
        </div>
    </div>
  )
}