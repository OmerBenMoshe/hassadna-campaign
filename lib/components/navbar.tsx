'use client'

import Link from 'next/link';
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from '../config';
import styled from 'styled-components';
import Image from 'next/image';
import logo from './logo.svg'


export default function Navbar() {
  return (
    <div className='flex justify-between items-center bg-black'>
      <div className='flex items-center p-5'>
        <button className='rounded-full outline-none text-black'>Join us!</button>
      </div>
      <div className='flex items-center p-5'>
        <Image src={logo} alt="Logo" width={288} height={36}/>
      </div>
    </div>
  )
}