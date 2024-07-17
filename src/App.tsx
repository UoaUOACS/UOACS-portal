import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion';
import FakeLoadingScreen from '@components/LoadingScreen';
import Hero from './components/sections/Hero';
import ReactLenis from 'lenis/react';

function App() {
  return (
    <ReactLenis root>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation}>
          <div className=" relative flex flex-col items-center max-w-dvw min-h-dvh noise overflow-x-hidden">
            <FakeLoadingScreen />
            <Hero className="sm:mt-48 mt-32" />
            {/* <div className="w-[400px] h-[100px] bg-black Card-shadow bg-black/40 outline outline-1 outline-gray-800/20 rounded-xl [backdrop-filter:blur(20px)]">
              sd
            </div> */}
          </div>
        </LazyMotion>
      </MotionConfig>
    </ReactLenis>
  );
}

export default App;
