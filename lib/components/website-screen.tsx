'use client'

import '@/globals.css';
import Footer from '@/lib/components/footer';
import Navbar from '@/lib/components/navbar';
import type { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode[] | ReactNode;
  direction?: 'rtl' | 'ltr';
}

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;


export default function WebsiteScreen({ direction = 'ltr', children }: Props) {
  return (
    <HomePage>
    <div dir={direction}>
      <Navbar />
      {children}
    </div>
    </HomePage>
  )
}
