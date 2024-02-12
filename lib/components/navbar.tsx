'use client'

import Link from 'next/link';
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from '../config';
import styled from 'styled-components';
import Image from 'next/image';
import logo from './logo.svg'

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const JoinContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const JoinButton = styled.button`
  border-radius: 9px; 
  outline: none; 
  color: black;
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <JoinContainer>
        <JoinButton>Join us!</JoinButton>
      </JoinContainer>
      <LogoContainer>
        <Image src={logo} alt="Logo" width={288} height={36}/>
      </LogoContainer>
    </NavbarContainer>
  )
}