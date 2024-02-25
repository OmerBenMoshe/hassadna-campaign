'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import Title from './form/Title';
import JoinProjects from './sections/JoinProjects';
import LastDetails from './sections/LastDetails';
import ProfSkills from './sections/ProfSkills';
import UserDetails from './sections/UserDetails';

export type FormStateType = {
  formData: [FormData, Dispatch<SetStateAction<FormData>>];
};

export type FormData = {
  personal: {
    fullName: string;
    email: string;
    linkedin: string;
  },
  educational: {
    course: string;
    bachelor: string;
    master: string;
    extraInfo: string;
  },
  professional: string[],
  projectsToJoin: string[],
  extraQuestions: string;
}

const initialFormData: FormData = {
  personal: {
    fullName: '',
    email: '',
    linkedin: '',
  },
  educational: {
    course: '',
    bachelor: '',
    master: '',
    extraInfo: '',
  },
  professional: [],
  projectsToJoin: [],
  extraQuestions: '',
}


export default function page() {
    const [formData, setFormData] = useState<FormData>(initialFormData)
    
  return (
    <main className={'bg-purple min-h-screen flex flex-col p-6 space-y-14'}>
      <div className='flex justify-start'><button className={'bg-orange text-white shadow-sharp rounded-full border-none hover:bg-neon hover:text-darkGray transition px-4'}>חזרה לעמוד</button></div>
      <div className={'flex justify-center'}><Title /></div>
      <UserDetails formData={[formData, setFormData]}/>
      <ProfSkills formData={[formData, setFormData]}/>
      <JoinProjects formData={[formData, setFormData]}/>
      <LastDetails formData={[formData, setFormData]}/>
    </main>
  );
}

