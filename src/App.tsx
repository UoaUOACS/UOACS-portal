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
          <div className="max-w-dvw noise relative flex min-h-dvh flex-col items-center overflow-x-hidden">
            <FakeLoadingScreen />
            <Hero className="mt-32 sm:mt-48" />
          </div>
          <FooterLogos />
        </LazyMotion>
      </MotionConfig>
    </ReactLenis>
  );
}

export default App;
