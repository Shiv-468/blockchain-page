import './App.css';
import AboutUs from './components/AboutUs';
import Ecosystem from './components/Ecosystem';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import SocialLinks from './components/SocialLinks';
import Tokenomics from './components/Tokenomics';
import Utility from './components/Utility';

function App() {
  return (
    <>
      <HeroSection/>
      <SocialLinks/>
      <AboutUs/>
      <Tokenomics/>
      <Utility/>
      <Ecosystem/>
      <SocialLinks/>
      <Footer/>
    </>
  );
}

export default App;
