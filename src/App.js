import './App.css';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutUs from './components/AboutUs';
import Ecosystem from './components/Ecosystem';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import News from './components/News';
import Roadmap from './components/Roadmap';
import SocialLinks from './components/SocialLinks';
import Tokenomics from './components/Tokenomics';
import Utility from './components/Utility';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    }
    );
  }, [])
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <SocialLinks />
      <AboutUs />
      <Tokenomics />
      <Utility />
      <Ecosystem />
      <Roadmap />
      <News />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
