import ImpactSection from '@/lib/components/sections/impactSection';
import WhySection from '@/lib/components/sections/whySection';
import WebsiteScreen from '@/lib/components/website-screen';


export default function Home() {
  return (
    <WebsiteScreen>
      <WhySection />
      <ImpactSection />
    </WebsiteScreen>
  )
}
