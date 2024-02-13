'use client'

import Link from 'next/link';
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from '../config';
import Image from 'next/image';
import logo from '../assets/logo.svg'


export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-black sticky top-0">
      <div className="flex items-center p-5">
        <Link href="/join-us">
          <button className="rounded-full outline-none text-black">Join us!</button>
        </Link>
      </div>
      <div className="flex items-center p-5">
        <Image src={logo} alt="Logo" width={288} height={36} />
      </div>
    </div>
  )
}