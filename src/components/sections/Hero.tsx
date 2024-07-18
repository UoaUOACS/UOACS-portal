import { m } from 'framer-motion';
import HeroBlur from '../HeroBlur';
import GlowButton from '../GlowButton';
import { cn } from '@/lib/utils';
import AnimatedText from '../AnimatedText';
import { HTMLAttributes } from 'react';

const textVariant = {
  initial: {
    y: -20,
    opacity: 0,
    filter: 'blur(8px)',
  },
  animate: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
  },
};

const textTansition = { duration: 0.25, ease: 'easeInOut' };

interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

export const Hero = ({ ...props }: HeroProps) => {
  return (
    <div
      {...props}
      className={cn(
        'relative xl:w-desktop w-dvw flex justify-center min-h-[max-content]',
        props.className
      )}
    >
      <HeroBlur />
      <m.div className="w-dvw flex flex-col items-center rounded-lg p-4 pt-3 whitespace-nowrap">
        <div
          className={
            'flex sm:flex-row sm:text-left items-center justify-center gap-24 sm:gap-4 lg:gap-24 font-medium figtree flex-col'
          }
        >
          <div className={cn('text-7xl text-blue-600 font-medium sm:text-8xl flex flex-col /')}>
            <AnimatedText
              type="letters"
              text="Meet"
              TextVariants={textVariant}
              delayChild={1.75}
              staggerChildren={0.1}
              transition={textTansition}
            />
            <AnimatedText
              type="letters"
              text="Greet,"
              TextVariants={textVariant}
              delayChild={2.25}
              staggerChildren={0.1}
              transition={textTansition}
            />
            <AnimatedText
              type="letters"
              text="Connect"
              TextVariants={textVariant}
              className=" text-white"
              delayChild={3}
              staggerChildren={0.1}
              transition={textTansition}
            />
            <div className="flex text-white text-xl">
              <AnimatedText
                text="University of Auckland Comsci Society"
                type="letters"
                TextVariants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
                delayChild={3.2}
                transition={{ duration: 0 }}
              />
            </div>
          </div>
          <GlowButton
            label="Join UOACS 📝"
            className="sm:px-24 bg-black/80 [backdrop-filter:blur(20px)] sm:w-[min-content] w-full grow font-thin"
            link="https://forms.gle/CZncuuHDTY1Vz2eP7"
            containerClassName="w-full sm:w-[min-content]"
          />
        </div>
      </m.div>
    </div>
  );
};
