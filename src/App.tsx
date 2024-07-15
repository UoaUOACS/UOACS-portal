import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-dvw h-dvh" >
      <motion.div className="w-40 minecraft" 
      initial={{rotateX:0, rotateY:0, rotateZ:0}}
      animate={{rotateX:360, rotateY:720, rotateZ:0}}
      transition={{duration:10, repeat: Infinity, ease:"linear"}}>
        <div className="w-40 aspect-square absolute grid place-items-center border border-white"
        style={{transform: "translate3d(0,0,-5rem)"}}>
          <UOACS/>
          </div>  
          <div className="w-40 aspect-square absolute grid place-items-center border border-white"
        style={{transform: "translate3d(0,0,5rem)"}}>
        <UOACS/>
        </div>  
          <div className="w-40 aspect-square absolute grid place-items-center border border-white"
        style={{transform: "translate3d(0,5rem,0) rotateX(90deg)", }}>
        <UOACS/>
        </div>  
       <div className="w-40 aspect-square absolute grid place-items-center border border-white"
        style={{transform: "translate3d(0,-5rem,0) rotateX(90deg)", }}>
        <UOACS/>
        </div>  
       </motion.div>
      <p className="z-10 text-black font-black before:bg-black before:w-full before:contents-['']">UOACS</p>
    </div>
  );
}

const UOACS = () => <motion.img
initial={{filter: "blur(300px)", rotate: 80}}
animate={{filter: "blur(0px)", rotate:0}}
transition={{duration:2}}
src="/images/UOACS.png"
className="w-40"
alt="UOACS"
/>

export default App;
