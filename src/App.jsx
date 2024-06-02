import Home from './pages/Home'
import { useEffect } from 'react';
import Navbar from './components/Navbar';

function App() {
  // load to top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar />
    <Home />
    </>
  )
}

export default App;
