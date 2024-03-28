import React, {useState} from 'react';
import {motion, useAnimate} from 'framer-motion';



function Featured() {
    const all = [useAnimate(), useAnimate()];

    

  return (
    <div className='w-full py-20'>
        <div className='w-full px-8 border-b-[1px] border-zinc pb-10 mb-10'>
            <h1 className='text-4xl font-medium tracking-tight '>Featured Projects</h1>    
        </div>
        <div className='px-8'>
            <div className='cards w-full flex gap-6 '>
                
                <div className='cardcontainer relative w-1/2 h-[75vh]'>                    
                    <h1 className='absolute flex right-0 translate-x-1/2 -translate-y-1/2 text-[#CDEA68] top-1/2 text-[5vw] font-semibold font-[Roboto] tracking-tight leading-none z-[9]'>
                        {"FYDE".split('').map((item, index) => 
                            <span key={index}>
                                {item}
                            </span>
                        )}
                    </h1>  
                    <div className='card rounded-lg w-full h-full overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" />
                    </div>
                </div>
                <div className='cardcontainer relative w-1/2 h-[75vh]'>
                    <div className='card rounded-lg w-full h-full overflow-hidden'> 
                        <h1 className='absolute flex right-full translate-x-1/2 -translate-y-1/2 text-[#CDEA68] top-1/2 text-[5vw] font-semibold font-[Roboto] tracking-tight leading-none z-[9]'>
                            {"VISE".split('').map((item, index) => 
                                <span key={index}>{item}</span>
                            )}
                        </h1>   
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
