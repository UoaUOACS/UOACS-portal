import { UOACS } from '@/assets/svgs';
import { m } from 'framer-motion';
import { useLayoutEffect } from 'react';

interface FakeLoadingScreenProps {
  off?: boolean;
}

const bgVariant = {
  initial: { background: '#000' },
  animate: { background: '#0000' },
};

const logoVariant = {
  initial: { scale: 2.5, top: '50%', translateY: '-50%', filter: 'blur(300px)' },
  animate: { scale: 1, top: '32px', translateY: '0%', filter: 'blur(0px)' },
};

const FakeLoadingScreen = ({ off }: FakeLoadingScreenProps) => {
  // i hope i don't need this in the future :smile:
  useLayoutEffect(() => {
    if (!off) {
      document.getElementById('root')?.classList.add('h-dvh');
      document.getElementById('root')?.classList.add('overflow-hidden');
    }
  });
  const enableScroll = () => {
    document.getElementById('root')?.classList.remove('h-dvh');
    document.getElementById('root')?.classList.remove('overflow-hidden');
  };
  return (
    <>
      <m.div
        className="w-dvw h-dvh bg-black z-[999] pointer-events-none justify-center flex absolute"
        initial={off ? 'animate' : 'initial'}
        animate="animate"
        variants={bgVariant}
        transition={{ duration: 0.5, delay: 1.5 }}
        onAnimationComplete={enableScroll}
      >
        <m.img
          src={UOACS}
          className="absolute w-[150px] top-[50%]"
          variants={logoVariant}
          transition={{
            duration: 0.5,
            delay: 1.2,
            ease: 'easeInOut',
            filter: { delay: 0.3, duration: 0.75 },
          }}
        />
      </m.div>
    </>
  );
};

export default FakeLoadingScreen;
