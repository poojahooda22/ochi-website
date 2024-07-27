import {motion} from 'framer-motion';

function Marqueue() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap">
        <motion.h1 
          initial={{x: "0"}}
          animate={{x: "-100%"}}
          transition={{ repeat: Infinity, ease: "linear", duration: 5}}
          className="uppercase font-bold sm:text-[20vw] font-[Roboto] leading-none tracking-normal mr-10
          text-white "
        >
          We are ochi
        </motion.h1>
        <motion.h1 
          initial={{x: "0"}}
          animate={{x: "-100%"}}
          transition={{ repeat: Infinity, ease: "linear", duration: 5}}
          className="uppercase font-bold sm:text-[20vw] font-[Roboto] leading-none tracking-normal mr-10
          text-white "
        >
          We are ochi
        </motion.h1>
        <motion.h1 
          initial={{x: "0"}}
          animate={{x: "-100%"}}
          transition={{ repeat: Infinity, ease: "linear", duration: 5}}
          className="uppercase font-bold sm:text-[20vw] font-[Roboto] leading-none tracking-normal mr-10
          text-white "
        >
          We are ochi
        </motion.h1>  
      </div>
    </div>
  )
}

export default Marqueue
