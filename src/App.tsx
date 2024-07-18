import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion';
import ReactLenis from 'lenis/react';

import { Hero } from './components/sections/Hero';
import { FooterLogos } from './components/LogosFooter';
import { FakeLoadingScreen } from '@components/LoadingScreen';

function App() {
  return (
    <ReactLenis root>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation}>
          {/* CONTENTS */}
          <div className=" relative flex flex-col items-center max-w-dvw min-h-dvh noise overflow-x-hidden">
            <FakeLoadingScreen />
            <Hero className="sm:mt-48 mt-32" />
          </div>
          <FooterLogos />
        </LazyMotion>
      </MotionConfig>
    </ReactLenis>
  );
}

export default App;
