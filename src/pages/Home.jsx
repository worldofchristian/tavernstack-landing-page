import { useRef } from "react";
import HeroAbout from "../components/HeroAbout";
import Pricing from "../components/Pricing";
import Navbar from "../components/Navbar";

const Home = ({ cosmo, of, wing, fry, mule, margarit, ipa, guiness, corona, brus, chescak, churro, donut, emartini, wsour, martin }) => {
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
      <HeroAbout 
      cosmo={cosmo} of={of} wing={wing} fry={fry} mule={mule} margarit={margarit} 
      guiness={guiness} ipa={ipa} corona={corona} brus={brus} chescak={chescak} churro={churro} donut={donut}
      emartini={emartini} wsour={wsour} martin={martin}
      />
    </div>

    <div ref={scrollRef}><Pricing /></div>
    </>
  )
}

export default Home