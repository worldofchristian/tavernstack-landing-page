import Home from './pages/Home'
import Navbar from './components/Navbar';
import { Helmet } from 'react-helmet-async';
import margarit from './assets/margarit.avif';
import of from './assets/of.avif';
import fry from './assets/fry.avif';
import wing from './assets/wing.avif';

function App() {
  return (
    <>
    <div>
      <Helmet>
        <link rel='preload' as='image' href={margarit} />
        <link rel='preload' as='image' href={of} />
        <link rel='preload' as='image' href={fry} />
        <link rel='preload' as='image' href={wing} />
      </Helmet>

      <Navbar />
      <Home margarit={margarit} of={of} fry={fry} wing={wing} />
    </div>
    </>
  )
}

export default App;
