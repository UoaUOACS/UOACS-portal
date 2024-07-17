import { domAnimation, LazyMotion, m } from 'framer-motion';
import FakeLoadingScreen from '@components/LoadingScreen';
import Hero from './components/sections/Hero';
import ReactLenis from 'lenis/react';

function App() {
  return (
    <ReactLenis root >
      <LazyMotion features={domAnimation}>
        <m.div className="relative flex flex-col items-center max-w-dvw min-h-dvh noise">
          <FakeLoadingScreen />
          <Hero />
        </m.div>
      </LazyMotion>
    </ReactLenis>
  );
}

export default App;
