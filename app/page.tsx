"use client";
import ImpactSection from "@/lib/components/sections/impactSection";
import WhoWeAreSection from "@/lib/components/sections/whoWeAreSection";
import WhySection from "@/lib/components/sections/whySection";
import WebsiteScreen from "@/lib/components/website-screen";
import { LIGHT_COLORS, DARK_COLORS } from "@/lib/config";
import { useState } from "react";

const AMOUNT_OF_SECTIONS = 2;
const SECTION_COLORS = [LIGHT_COLORS, DARK_COLORS];

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
      <WhoWeAreSection colors={colors} />
      <WhySection colors={colors} />
      <ImpactSection colors={colors} />
    </WebsiteScreen>
  );
}
