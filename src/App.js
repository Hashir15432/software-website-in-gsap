import './App.css';
import { useState } from 'react';
import Navbar from "./Components/Home/Navbar/Navbar"
import Hero from './Components/Home/Hero/Hero';
import DigitalAgencyBanner from './Components/Home/DigitalAgencyBanner/DigitalAgencybanner';
import DiscoverSection from './Components/Home/DiscoverSection/DiscoverSection'
import Services from './Components/Home/Services/Services';
import Footer from './Components/Home/Footer/Footer';
import ContactFooter from './Components/Home/ContactFooter/ContactFooter';
import PortfolioSection from './Components/Home/PortfolioSection/PortfolioSection';
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    // return <div>Content for {currentPage}</div>;
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-customBg">
      
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <Hero />
      <DigitalAgencyBanner />
      <DiscoverSection />
      <Services />
      <PortfolioSection />
      {renderContent}
      <ContactFooter />
      <Footer />
    </div>
  );
}

export default App;
