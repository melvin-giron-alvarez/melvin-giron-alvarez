import React from 'react';
import Home from './sections/Home';
import About from './sections/About';
import Kickmetrics from './sections/Kickmetrics';
import DolceEspresso from './sections/DolceEspresso';
import Botanical from './sections/Botanical';
import Contact from './sections/Contact';
import { ReactLenis, useLenis } from 'lenis/react';

const App = () => {
  useLenis(({ scroll }) => {
    // Perform any actions with the scroll value if needed
  });

  return (
    <ReactLenis root>
      <div className='cursor-default'>
        <Home />
        <About />
        <Kickmetrics />
        <DolceEspresso />
        <Botanical />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;

