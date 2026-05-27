import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import MarquesCarousel from "@/components/home/MarquesCarousel";
import AboutSection from "@/components/home/AboutSection";
import ServiceSection from "@/components/home/ServiceSection";
import HomepageSEOBlock1 from "@/components/home/HomepageSEOBlock1";
import ProcessSection from "@/components/home/ProcessSection";
import HomepageSEOBlock2 from "@/components/home/HomepageSEOBlock2";
import HomepageSEOBlock3 from "@/components/home/HomepageSEOBlock3";
import HomepageSEOBlock4 from "@/components/home/HomepageSEOBlock4";
import WorksSection from "@/components/home/WorksSection";
import ZonesSection from "@/components/home/ZonesSection";
import MiniCtaSection from "@/components/home/MiniCtaSection";
import ReviewSection from "@/components/home/ReviewSection";
import FaqSection from "@/components/home/FaqSection";
import ArticleSection from "@/components/home/ArticleSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <MarquesCarousel />
        <AboutSection />
        <div id="services">
          <ServiceSection />
        </div>
        <HomepageSEOBlock1 />
        <ProcessSection />
        <HomepageSEOBlock2 />
        <HomepageSEOBlock3 />
        <HomepageSEOBlock4 />
        <WorksSection />
        <ZonesSection />
        <MiniCtaSection />
        <ReviewSection />
        <FaqSection />
        <ArticleSection />
      </main>
      <Footer />
    </>
  );
}
