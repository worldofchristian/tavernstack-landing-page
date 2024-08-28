import Home from './pages/Home'
import { Helmet } from 'react-helmet-async';
import of from './assets/of.avif';
import fry from './assets/fry.avif';
import wing from './assets/wings.avif';
import cosmo from './assets/cosmo.avif';
import margarit from './assets/margarit.avif';
import corona from './assets/corona.avif';
import ipa from './assets/ipa.avif';
import guiness from './assets/guiness.avif';
import brus from './assets/brus.avif';

function App() {
  return (
    <>
    <div>
      <Helmet>
        <link rel='preload' as='image' href={cosmo} />
        <link rel='preload' as='image' href={of} />
        <link rel='preload' as='image' href={fry} />
        <link rel='preload' as='image' href={wing} />
        <link rel='preload' as='image' href={margarit} />
        <link rel='preload' as='image' href={corona} />
        <link rel='preload' as='image' href={ipa} />
        <link rel='preload' as='image' href={guiness} />
        <link rel='preload' as='image' href={brus} />
      </Helmet>
      
      <Home 
      cosmo={cosmo} of={of} fry={fry} wing={wing} margarit={margarit} corona={corona} 
      ipa={ipa} guiness={guiness} brus={brus}
      />
    </div>
    </>
  )
}

export default App;
