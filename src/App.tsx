import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion';
import ReactLenis from 'lenis/react';

import { Hero } from './components/sections/Hero';
import { FooterLogos } from './components/LogosFooter';
import { FakeLoadingScreen } from '@components/LoadingScreen';
import AboutUOACS from './components/sections/AboutUOACS';

function App() {
  return (
    <ReactLenis root>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation}>
          {/* CONTENTS */}
          <div className="max-w-dvw noise relative flex min-h-dvh flex-col items-center overflow-x-hidden">
            <FakeLoadingScreen />
            <Hero className="mt-24 sm:mt-36" />
            {/* <div className="Card-shadow grid aspect-square place-items-center rounded-full border-2 border-gray-700 bg-black/40 p-2 outline outline-1 outline-gray-800/20 [backdrop-filter:blur(20px)]">
              v
            </div> */}
            <AboutUOACS />
          </div>
          <FooterLogos />
        </LazyMotion>
      </MotionConfig>
    </ReactLenis>
  );
}

export default App;
