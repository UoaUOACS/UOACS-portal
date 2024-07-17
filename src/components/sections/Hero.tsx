import { m } from 'framer-motion';
import HeroBlur from '../HeroBlur';
import GlowButton from '../GlowButton';
import { cn } from '@/lib/utils';
const Hero = () => {
  return (
    <div className="relative w-desktop h-[20000px] flex justify-center min-h-[max-content] sm:mt-64 mt-32">
      <HeroBlur />
      <m.div className="w-[1000px] flex flex-col rounded-lg p-4 pt-3 whitespace-nowrap">
        <div
          className={
            'flex sm:flex-row sm:text-left items-center justify-center gap-24 sm:gap-4 lg:gap-24 font-bold figtree flex-col text-center'
          }
        >
          <div className={cn('text-7xl text-blue-600', 'sm:text-8xl')}>
            <h1>Meet, </h1>
            <h1>Greet,</h1>
            <h1 className="text-white">Connect</h1>
          </div>
          <GlowButton label="Join UOACS 📝" className="sm:px-24 px-32" />
        </div>
      </m.div>
    </div>
  );
};

export default Hero;
