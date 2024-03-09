"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import Realistic from "react-canvas-confetti/dist/presets/realistic"
import Title from "./form/Title";
import JoinProjects from "./sections/JoinProjects";
import LastDetails from "./sections/LastDetails";
import ProfSkills from "./sections/ProfSkills";
import UserDetails from "./sections/UserDetails";
import "./animations.css";

import { createClient } from '@supabase/supabase-js'
import Link from "next/link";
import { useRouter } from "next/navigation";

// Create a single supabase client for interacting with your database
const supabase = createClient('https://fevrcdgxpvtzvsqfqako.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZldnJjZGd4cHZ0enZzcWZxYWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2NjY1ODUsImV4cCI6MjAyMzI0MjU4NX0.L_4VuBpOD1J4prWrBPSlnhOW8BdJCwDG7Lc0vlh6rug')

const flattenObject = (obj: any) => {
  const flattened: {[key: string]: any} = {}
  
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      flattened[key] = obj[key].join(', '); // Convert array to string
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(flattened, flattenObject(obj[key]))
    } else {
      flattened[key] = obj[key]
    }
  })
  
  return flattened
}

export type FormStateType = {
  formData: [FormData, Dispatch<SetStateAction<FormData>>];
};

export type FormData = {
  personal: {
    fullName: string;
    email: string;
    linkedin: string;
  };
  educational: {
    course: string;
    bachelor: string;
    master: string;
    extraInfo: string;
  };
  professional: string[];
  projectsToJoin: string[];
  extraQuestions: string;
  [key: string]: any; 
};

const initialFormData: FormData = {
  personal: {
    fullName: "",
    email: "",
    linkedin: "",
  },
  educational: {
    course: "",
    bachelor: "",
    master: "",
    extraInfo: "",
  },
  professional: [],
  projectsToJoin: [],
  extraQuestions: "",
};

const validateForm = (formData: FormData) => {
  const { personal, professional } = formData;
  let response = []
  if (!personal.fullName) {
    response.push('חסר שם מלא,')
  }
  if (!personal.email) {
    response.push('חסר כתובת אימייל')
  }
  if (!professional.length) {
    response.push('חובה לבחור לפחות תחום אחד')
  }
  return response
}

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  const [isConfetti, setIsConfetti] = useState<boolean>(false)

  const onFormSubmit = async () => {
    const validation = validateForm(formData)
    if (validation.length) {
      setValidationErrors(validation)
      return
    }
    setIsConfetti(true)
    setValidationErrors([])

    console.log("Form submitted", formData); 
    
    type FormData = {
      personal: {
        fullName: string;
        email: string;
        linkedin: string;
      };
      educational: {
        course: string;
        bachelor: string;
        master: string;
        extraInfo: string;
      };
      professional: string[];
      projectsToJoin: string[];
      extraQuestions: string;
      [key: string]: any; // Add index signature to allow indexing with a string
    };

    const supabaseData: any = {};
    Object.keys(formData).forEach((key) => {
      if (typeof formData[key] === "object") {
        Object.keys(formData[key]).forEach((subKey) => {
          supabaseData[subKey] = formData[key][subKey]; // Access subKey using formData[key]
        });
      } else {
        supabaseData[key] = formData[key];
      }
    });
    const { data, error } = await supabase
      .from('volunteer-form')
      .insert([flattenObject(formData)]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);
      }

    // set timeout and than redirect to home page
    setTimeout(() => {
      router.push('/')    
    }, 1300)
  }

  return (
    <main className={"bg-purple min-h-screen flex flex-col p-6 space-y-14 animate-fallFromTop"}>
      <div className="flex justify-start">
        <Link href="/">
          <button
            className={
              "bg-orange text-white shadow-sharp rounded-full border-none hover:bg-neon hover:text-darkGray transition px-4"
            }
          >
            חזרה לעמוד
          </button>
        </Link>
      </div>
      <div className={"flex justify-center"}>
        <Title />
      </div>
      <UserDetails formData={[formData, setFormData]} />
      <ProfSkills formData={[formData, setFormData]} />
      <JoinProjects formData={[formData, setFormData]} />
      <LastDetails
        formData={[formData, setFormData]}
        onFormSubmit={onFormSubmit}
        validationErrors={validationErrors}
      />
      {isConfetti && <>
        <Fireworks autorun={{ speed: 1.5 }} />
        <Realistic autorun={{ speed: 0.8 }} />
      </>}

    </main>
  );
}
