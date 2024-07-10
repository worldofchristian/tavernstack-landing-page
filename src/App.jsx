import Home from './pages/Home'
import Navbar from './components/Navbar';
import { Helmet } from 'react-helmet-async';
import margarit from './assets/margarit.jpg';
import of from './assets/of.jpg';
import fry from './assets/fry.jpg';
import wing from './assets/wing.jpg';

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
