"use client";
import ImpactSection from "@/lib/components/sections/impactSection";
import WhoSection from "@/lib/components/sections/whoSection";
import WhatSection from "@/lib/components/sections/whatSection";
import WhySection from "@/lib/components/sections/whySection";
import WebsiteScreen from "@/lib/components/website-screen";
import VolunteeringSection from '@/lib/components/sections/volunteeringSection';
import { LIGHT_COLORS, DARK_COLORS } from "@/lib/config";
import { useState } from "react";
import FiguresSection from "@/lib/components/sections/figuresSection";
import ProjectsSection from "@/lib/components/sections/projectsSection";

const AMOUNT_OF_SECTIONS = 2;
const SECTION_COLORS = [LIGHT_COLORS, DARK_COLORS, DARK_COLORS, DARK_COLORS, LIGHT_COLORS, DARK_COLORS, DARK_COLORS, DARK_COLORS];

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
      className="h-screen overflow-auto snap-y snap-mandatory"
    >
      <div id="whoSection">
        <WhoSection colors={colors} />
      </div>
      <WhatSection colors={colors} />
      <WhySection colors={colors} />
      <ImpactSection colors={colors} />
      <FiguresSection colors={colors} />
      <VolunteeringSection colors={colors} />
      <ProjectsSection colors={colors} />
    </WebsiteScreen>
  );
}
