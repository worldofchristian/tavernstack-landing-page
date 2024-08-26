import { useRef } from "react";
import HeroAbout from "../components/HeroAbout";
import Pricing from "../components/Pricing";
import Navbar from "../components/Navbar";

const Home = ({ margarit, of, wing, fry }) => {
  const scrollRef = useRef(null);
  const homeRef = useRef(null);

  const handleGo2Pricing = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGo2Home = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
    <Navbar handleGo2Pricing={handleGo2Pricing} handleGo2Home={handleGo2Home} />

    <div 
    ref={homeRef}
    >
      <HeroAbout margarit={margarit} of={of} wing={wing} fry={fry} />
    </div>

    <div ref={scrollRef}><Pricing /></div>
    </>
  )
}

export default Home