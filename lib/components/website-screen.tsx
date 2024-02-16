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
  return (
    <div {...rest}>
      <Navbar colors={colors}/>
      <main>{children}</main>
    </div>
  );
}
