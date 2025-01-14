import AboutUs from "@/components/landing-page/AboutUs";
import Blog from "@/components/landing-page/Blog";
import CountDownBanner from "@/components/landing-page/CountDownBanner";
import HeroSection from "@/components/landing-page/HeroSection";
import Insights from "@/components/landing-page/Insights";
import OurWorks from "@/components/landing-page/OurWorks";
import StartupSupport from "@/components/landing-page/StartupSupport";
import FAQ from "@/components/landing-page/FAQ"

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <AboutUs />
      <OurWorks />
      <CountDownBanner />
      <Insights />
      <StartupSupport />
      <Blog />
      <FAQ />

      
    </main>
  );
}
