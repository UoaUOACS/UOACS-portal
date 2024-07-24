import { m } from 'framer-motion';
import HeroBlur from '../HeroBlur';
import GlowButton from '../GlowButton';
import { cn } from '@/lib/utils';
import AnimatedText from '../AnimatedText';
import IconButton from '../IconButton';
import { discordIcon } from '@/assets/svgs';

const textVariant = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const textTansition = { duration: 0.25, ease: 'easeInOut' };

const HEROSTAGGER = 0.05;
const HEROTEXT = ['Connect,', 'Collaborate,', 'Network,', 'Develop'];
const HERODELAY = HEROTEXT.map((text) => text.length * HEROSTAGGER + 0.2);

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

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
            'figtree flex flex-col items-center justify-center gap-24 font-medium sm:flex-row sm:gap-12 sm:text-left lg:gap-24'
          }
        >
          <div
            className={cn('flex flex-col text-7xl font-bold text-blue-600 sm:text-7xl xl:text-8xl')}
          >
            {HEROTEXT.map(
              (text, i, arr) => {
                arr[i];
                return (
                  <AnimatedText
                    type="letters"
                    text={text}
                    TextVariants={textVariant}
                    transition={textTansition}
                    staggerChildren={HEROSTAGGER}
                    delayChild={HERODELAY.slice(0, i).reduce((acc, val) => acc + val, 1.5)}
                  />
                );
              },
              { acc: 0 }
            )}

            <div className="mt-2 flex text-xl font-thin text-white">
              <AnimatedText
                text="University of Auckland Compsci Society"
                type="letters"
                TextVariants={{
                  initial: { visibility: 'hidden' },
                  animate: { visibility: 'visible' },
                }}
                delayChild={4}
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 self-end">
            <GlowButton
              label="Join UOACS 📝"
              className="w-full grow bg-black/80 font-thin [backdrop-filter:blur(20px)] sm:w-[min-content] sm:px-24"
              link="https://forms.gle/CZncuuHDTY1Vz2eP7"
              containerClassName="w-full sm:w-[min-content]"
            />
            {/* <div className="grid grid-flow-col gap-2 *:grow-0">
              <IconButton icon={discordIcon} label="TikTok" className="bg-black" />
              <IconButton icon={discordIcon} label="Instagram" className="bg-pink-600" />
            </div> */}
            <IconButton icon={discordIcon} label="Join our Discord" className="bg-[#5865F2]" />
          </div>
        </div>
      </m.div>
    </div>
  );
};
