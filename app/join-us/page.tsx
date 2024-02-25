"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Title from "./form/Title";
import JoinProjects from "./sections/JoinProjects";
import LastDetails from "./sections/LastDetails";
import ProfSkills from "./sections/ProfSkills";
import UserDetails from "./sections/UserDetails";

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://fevrcdgxpvtzvsqfqako.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZldnJjZGd4cHZ0enZzcWZxYWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2NjY1ODUsImV4cCI6MjAyMzI0MjU4NX0.L_4VuBpOD1J4prWrBPSlnhOW8BdJCwDG7Lc0vlh6rug')


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
    response.push( 'חסר שם מלא,')
  }
  if (!personal.email) {
    response.push('חסר כתובת אימייל')
  }
  if (!professional.length) {
    response.push('חובה לבחור לפחות תחום אחד')
  }
  return response
}

export default function page() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const onFormSubmit = async () => {
    const validation = validateForm(formData)
    if (validation.length) {
      setValidationErrors(validation)
      return
    }
    setValidationErrors([])

    console.log("Form submitted", formData);
    const { data, error } = await supabase
    .from('volunteer-form')
    .insert([formData]);
}

  return (
    <main className={"bg-purple min-h-screen flex flex-col p-6 space-y-14"}>
      <div className="flex justify-start">
        <button
          className={
            "bg-orange text-white shadow-sharp rounded-full border-none hover:bg-neon hover:text-darkGray transition px-4"
          }
        >
          חזרה לעמוד
        </button>
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
    </main>
  );
}
