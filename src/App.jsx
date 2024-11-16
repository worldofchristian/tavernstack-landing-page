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
import chescak from './assets/chescak.avif';
import churro from './assets/churro.avif';
import donut from './assets/donut.avif';
import emartini from './assets/emartini.avif';
import wsour from './assets/wsour.avif';
import martin from './assets/martin.avif';

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
        <link rel='preload' as='image' href={chescak} />
        <link rel='preload' as='image' href={churro} />
        <link rel='preload' as='image' href={donut} />
        <link rel='preload' as='image' href={emartini} />
        <link rel='preload' as='image' href={wsour} />
        <link rel='preload' as='image' href={martin} />
      </Helmet>
      
      <Home 
      cosmo={cosmo} of={of} fry={fry} wing={wing} margarit={margarit} corona={corona} 
      ipa={ipa} guiness={guiness} brus={brus} chescak={chescak} churro={churro} donut={donut} 
      emartini={emartini} wsour={wsour} martin={martin}
      />
    </div>
    </>
  )
}

export default App;
