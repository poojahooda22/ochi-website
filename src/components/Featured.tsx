
import {motion, useAnimation} from 'framer-motion';

function Featured() {

    const cards = [
        useAnimation(),
        useAnimation()
    ];

    const handleHover = (index: number) => {
        cards[index].start({y: "0"})
    }
    const handleHoverEnd = (index: number) => {
        cards[index].start({y: "100%"})
    }

  return (
    <div className='w-full py-20'>
        <div 
            className='w-full px-8 border-b-[1px] border-zinc pb-10 mb-10'
            >
            <h1 
                className='text-4xl font-medium 
                tracking-tight '
            >
                Featured Projects
            </h1>    
        </div>
        <div 
            className='px-8'
        >
            <div 
                className='cards w-full flex gap-4 '
            >
                <motion.div 
                    whileHover={{ scale: .95, zIndex: 1 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ease: [0.76, 0, 0.24, 1]}}
                    onHoverStart={() => handleHover(0)} 
                    onHoverEnd={() => handleHoverEnd(0)}
                    className='cardcontainer relative w-1/2 h-[75vh]'
                >                    
                    <h1 
                        className='absolute flex right-0 translate-x-1/2 
                        overflow-hidden -translate-y-1/2 text-[#CDEA68] top-1/2 
                        text-[6vw] font-semibold font-[Roboto] 
                        tracking-wide leading-none z-[9]'
                    >
                        {"FYDE".split('').map((item, index) => 
                            (<motion.span
                                key={index} 
                                initial={{y: "100%"}} 
                                animate={cards[0]}
                                transition={{ease: [0.22, 1, 0.36, 1], delay: index * .05}}
                                className='inline-block '
                            >
                                {item}
                            </motion.span>)
                        )}
                    </h1>  
                    <div 
                        className='card rounded-lg w-full h-full 
                        overflow-hidden'
                    >
                        <img 
                            className='w-full h-full bg-cover' 
                            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" 
                        />
                    </div>
                </motion.div>
                <motion.div 
                    whileHover={{ scale: .95, }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ease: [0.76, 0, 0.24, 1]}}
                    onHoverStart={() => handleHover(1)} 
                    onHoverEnd={() => handleHoverEnd(1)}
                    className='cardcontainer relative w-1/2 h-[75vh]'
                >
                    <div 
                        className='card rounded-lg w-full h-full 
                        overflow-hidden'
                    > 
                        <h1 
                            className='absolute flex right-full translate-x-1/2 
                            overflow-hidden -translate-y-1/2 text-[#CDEA68] 
                            top-1/2 text-[6vw] font-semibold font-[Roboto] 
                            tracking-wide leading-none z-[9]'
                        >
                            {"VISE".split('').map((item, index) => 
                                (<motion.span 
                                    key={index}
                                    initial={{y: "100%"}} 
                                    animate={cards[1]}
                                    transition={{ease: [0.22, 1, 0.36, 1], delay: index * .05}}
                                    className='inline-block'
                                >
                                    {item}
                                </motion.span>)
                            )}
                        </h1>   
                        <img 
                            className='w-full h-full bg-cover' 
                            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Featured
