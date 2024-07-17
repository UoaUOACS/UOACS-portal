import { m } from 'framer-motion';
import HeroBlur from '../HeroBlur';
import GlowButton from '../GlowButton';
import { cn } from '@/lib/utils';
import AnimatedText from '../AnimatedText';

const textVariant = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const textTansition = { duration: 0.25, ease: 'easeInOut' };

const Hero = () => {
  return (
    <div className="relative xl:w-desktop w-dvw h-[2000px] flex justify-center min-h-[max-content] sm:mt-48 mt-32">
      <HeroBlur />
      <m.div className="w-dvw flex flex-col rounded-lg p-4 pt-3 whitespace-nowrap">
        <div
          className={
            'flex sm:flex-row sm:text-left items-center justify-center gap-24 sm:gap-4 lg:gap-24 font-medium figtree flex-col'
          }
        >
          <div className={cn('text-7xl text-blue-600 font-medium sm:text-8xl flex flex-col /')}>
            <AnimatedText
              text="Meet"
              TextVariants={textVariant}
              delayChild={1.75}
              staggerChildren={0.1}
              transition={textTansition}
            />
            <AnimatedText
              text="Greet,"
              TextVariants={textVariant}
              delayChild={2.25}
              staggerChildren={0.1}
              transition={textTansition}
            />
            <AnimatedText
              text="Connect"
              TextVariants={textVariant}
              className=" text-white"
              delayChild={3}
              staggerChildren={0.1}
              transition={textTansition}
            />
          </div>
          <GlowButton
            label="Join UOACS 📝"
            className="sm:px-24 sm:w-[min-content] w-full grow font-thin"
            link="https://forms.gle/CZncuuHDTY1Vz2eP7"
            containerClassName="w-full sm:w-[min-content]"
          />
        </div>
      </m.div>
    </div>
  );
};

export default Hero;
