'use client'

import '@/globals.css';
import Footer from '@/lib/components/footer';
import Navbar from '@/lib/components/navbar';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode[] | ReactNode;
  direction?: 'rtl' | 'ltr';
}


export default function WebsiteScreen({ direction = 'ltr', children }: Props) {
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <div dir={direction}>
        <Navbar />
        {children}
      </div>
    </div>
  )
}
