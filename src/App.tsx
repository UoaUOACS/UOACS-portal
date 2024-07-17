import { domAnimation, LazyMotion } from 'framer-motion';
import FakeLoadingScreen from '@components/LoadingScreen';
import Hero from './components/sections/Hero';
import ReactLenis from 'lenis/react';

function App() {
  return (
    <ReactLenis root>
      <LazyMotion features={domAnimation}>
        <div className=" relative flex flex-col items-center max-w-dvw min-h-dvh noise overflow-x-hidden">
          <FakeLoadingScreen />
          <Hero />
        </div>
      </LazyMotion>
    </ReactLenis>
  );
}

export default App;
