"use client";
import "@/globals.css";
import Navbar from "@/lib/components/navbar";
import { useRef, type ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode[] | ReactNode;
  direction?: "rtl" | "ltr";
  colors: string
}

export default function WebsiteScreen({ direction = "ltr", children, colors, ...rest }: Props) {
  // const handleScroll = (e: any) => {
  //   console.log(e.target.scrollTop);
  // }

  return (
    // <div onScroll={handleScroll} className=" h-screen overflow-auto">
    <div {...rest}>
      <Navbar colors={colors}/>
      <main>{children}</main>
    </div>
  );
}
