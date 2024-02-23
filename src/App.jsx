import Home from './pages/Home'
import { useState, useEffect } from 'react';
import './components/Loader.css';
import Navbar from './components/Navbar';

function App() {
  // load to top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // loading state
  const [isLoading, setIsLoading] = useState(true);

  // loading animation timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
  
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
    {isLoading ? (
        <div className='flex items-center justify-center min-h-screen fixed-center'>
          <div className="loader"></div>
        </div>
      ) : (
        <>
        <div className={isLoading ? 'content-hidden' : 'content-visible'}>
          <Navbar />

          <Home />
        </div>
        </>
      )}
    </>
  )
}

export default App;
