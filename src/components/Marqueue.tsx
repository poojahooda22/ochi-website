import {motion} from 'framer-motion';

function Marqueue() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap">

        <motion.h1 
          initial={{x: "0"}}
          animate={{x: "-100%"}}
          className="uppercase font-bold text-[20vw] leading-none tracking-tighter mr-20
          text-white "
        >
          We are ochi
        </motion.h1>
        <motion.h1 className="uppercase font-bold text-[20vw] leading-none text-white">
          We are ochi
        </motion.h1>
        
      </div>
    </div>
  )
}

export default Marqueue
