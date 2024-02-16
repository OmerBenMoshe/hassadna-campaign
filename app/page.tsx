"use client";
import ImpactSection from "@/lib/components/sections/impactSection";
import WhySection from "@/lib/components/sections/whySection";
import WebsiteScreen from "@/lib/components/website-screen";
import { useEffect, useRef, useState } from "react";

const AMOUNT_OF_SECTIONS = 2;
const SECTION_COLORS = ["bg-white", "bg-darkGray"];
const SCROLL_OFFSET = 100;

export default function Home() {
  const [bgColor, setBgColor] = useState("bg-white");

  const handleScroll = (e: any) => {
    const sectionHeight = window.innerHeight / (AMOUNT_OF_SECTIONS - 1);
    const currentTopY = e.target.scrollTop;
    const focusedSection = Math.ceil((currentTopY+(sectionHeight/2)) % sectionHeight);
    // (450 + 475) % 950
    console.log(currentTopY + '+(' + sectionHeight + '/2))%' + sectionHeight);
    if (currentTopY > sectionHeight/2) {
      setBgColor(SECTION_COLORS[1]);
    } else {
      setBgColor(SECTION_COLORS[0]);
    }
  };
  console.log(bgColor);

  return (
    <WebsiteScreen onScroll={handleScroll} className="h-screen overflow-auto">
      <WhySection bgColor={bgColor} />
      <ImpactSection bgColor={bgColor} />
    </WebsiteScreen>
  );
}
