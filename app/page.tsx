"use client";
import ImpactSection from "@/lib/components/sections/impactSection";
import WhySection from "@/lib/components/sections/whySection";
import WebsiteScreen from "@/lib/components/website-screen";
import { useEffect, useRef, useState } from "react";

const AMOUNT_OF_SECTIONS = 2;
const SECTION_COLORS = ["bg-white text-darkGray", "bg-darkGray text-white"];

export default function Home() {
  const [colors, setColors] = useState(SECTION_COLORS[0]);

  const handleScroll = (e: any) => {
    const sectionHeight = window.innerHeight / (AMOUNT_OF_SECTIONS - 1);
    const currentTopY = e.target.scrollTop;
    const focusedSection = Math.floor(
      (currentTopY + sectionHeight / 2) / sectionHeight
    );
    setColors(SECTION_COLORS[focusedSection]);
  };

  return (
    <WebsiteScreen
      colors={colors}
      onScroll={handleScroll}
      className="h-screen overflow-auto"
    >
      <WhySection colors={colors} />
      <ImpactSection colors={colors} />
    </WebsiteScreen>
  );
}
