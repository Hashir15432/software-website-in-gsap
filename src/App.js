import './App.css';
import { useState, useEffect } from 'react';
import Navbar from "./Components/Home/Navbar/Navbar";
import Hero from './Components/Home/Hero/Hero';
import DigitalAgencyBanner from './Components/Home/DigitalAgencyBanner/DigitalAgencybanner';
import DiscoverSection from './Components/Home/DiscoverSection/DiscoverSection';
import Services from './Components/Home/Services/Services';
import Footer from './Components/Home/Footer/Footer';
import ContactFooter from './Components/Home/ContactFooter/ContactFooter';
import PortfolioSection from './Components/Home/PortfolioSection/PortfolioSection';
import About from './Components/About/About';
import AboutPortfolio from './Components/About/AboutPortfolio/AboutPortfolio';
import ServiceDetail from './Components/ServicesDetail/ServicesDetail';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Preloader from './Components/PreLoading/Preloading';


import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
const [isLoading, setIsLoading] = useState(true);

  // Sync ScrollTrigger when page content changes
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentPage, isLoading]);

  useGSAP(() => {
    if (isLoading) return;

    // 1. INITIALIZE LENIS SMOOTH SCROLL
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const rafExecutor = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafExecutor);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafExecutor);
    };
  }, [currentPage, isLoading]);
  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <><About /> <AboutPortfolio /></>;
      case 'service-web-dev':
        return <ServiceDetail />;
        case 'portfolio':
          return <Portfolio/>
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <DigitalAgencyBanner />
            <DiscoverSection />
            <Services />
            <PortfolioSection />
            <ContactFooter />
          </>
        );
    }
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-customBg">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
