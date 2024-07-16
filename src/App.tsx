import { domAnimation, LazyMotion } from 'framer-motion';
import FakeLoadingScreen from '@components/LoadingScreen';
import HeroBlur from './components/HeroBlur';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col items-center max-w-dvw min-h-dwh noise">
        <FakeLoadingScreen />
        <HeroBlur />
      </div>
    </LazyMotion>
  );
}

export default App;
