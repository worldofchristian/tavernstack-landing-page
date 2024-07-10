import { useEffect } from "react";
import HeroAbout from "../components/HeroAbout";
import Pricing from "../components/Pricing";

const Home = ({ margarit, of, wing, fry }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <HeroAbout margarit={margarit} of={of} wing={wing} fry={fry} />
    <Pricing />
    </>
  )
}

export default Home