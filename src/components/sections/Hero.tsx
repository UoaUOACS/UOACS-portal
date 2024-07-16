import { m } from 'framer-motion';
import HeroBlur from '../HeroBlur';
const Hero = () => {
  return (
    <div className="relative w-desktop h-[2000px] flex justify-center min-h-[max-content] mt-64">
      <HeroBlur />
      <m.div className="w-[1000px] flex flex-col rounded-lg p-4 pt-3  whitespace-nowrap">
        <div className="flex items-center justify-evenly gap-32 font-bold figtree">
          <div className="text-9xl text-blue-600">
            <h1>Meet, </h1>
            <h1>Greet,</h1>
            <h1 className="text-white">Connet</h1>
          </div>
          <m.div
            className="rounded-3xl p-0.5 "
            initial={{
              background: 'linear-gradient(0turn,#e66465, #9198e5)',
            }}
            animate={{ background: 'linear-gradient(1turn,#e66465, #9198e5)' }}
            transition={{ ease: 'linear', repeat: Infinity, duration: 3 }}
          >
            <button className="bg-black p-6 px-32 rounded-[22px] ">Join UOACS</button>
          </m.div>
        </div>
      </m.div>
    </div>
  );
};

export default Hero;
