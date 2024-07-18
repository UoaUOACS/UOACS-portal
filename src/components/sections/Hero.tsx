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
        'relative flex min-h-[max-content] w-dvw justify-center xl:w-desktop',
        props.className
      )}
    >
      <HeroBlur />
      <m.div className="flex w-dvw flex-col items-center whitespace-nowrap rounded-lg p-4 pt-3">
        <div
          className={
            'figtree flex flex-col items-center justify-center gap-24 font-medium sm:flex-row sm:gap-4 sm:text-left lg:gap-24'
          }
        >
          <div
            className={cn(
              'flex flex-col justify-center text-7xl font-medium text-blue-600 sm:text-8xl'
            )}
          >
            <AnimatedText
              type="letters"
              text="Meet,"
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
              className="text-white"
              delayChild={3}
              staggerChildren={0.1}
              transition={textTansition}
            />
            <div className="flex text-xl text-white">
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
            className="w-full grow bg-black/80 font-thin [backdrop-filter:blur(20px)] sm:w-[min-content] sm:px-24"
            link="https://forms.gle/CZncuuHDTY1Vz2eP7"
            containerClassName="w-full sm:w-[min-content]"
          />
        </div>
      </m.div>
    </div>
  );
};
