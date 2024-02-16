"use client";
import "@/globals.css";
import Navbar from "@/lib/components/navbar";
import { useRef, type ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode[] | ReactNode;
  direction?: "rtl" | "ltr";
}

export default function WebsiteScreen({ direction = "ltr", children, ...rest }: Props) {
  // const handleScroll = (e: any) => {
  //   console.log(e.target.scrollTop);
  // }

  return (
    // <div onScroll={handleScroll} className=" h-screen overflow-auto">
    <div {...rest}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
