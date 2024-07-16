import { UOACS } from '@/assets/svgs';
import { m } from 'framer-motion';

// interface FakeLoadingScreenProps {}

const bgVariant = {
  initial: { background: '#000' },
  animate: { background: '#0000' },
};

const logoVariant = {
  initial: { scale: 2, top: '50%', translateY: '-50%', filter: 'blur(300px)' },
  animate: { scale: 1, top: '0%', translateY: '0%', filter: 'blur(0px)' },
};

const FakeLoadingScreen = () => {
  return (
    <>
      <m.div
        className="w-dvw h-dvh bg-black z-[999] pointer-events-none justify-center flex relative"
        initial="initial"
        animate="animate"
        variants={bgVariant}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <m.img
          src={UOACS}
          className="absolute w-[200px] top-[50%]"
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
