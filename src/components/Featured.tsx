import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-8 border-b-[1px] border-zinc pb-10 mb-10'>
            <h1 className='text-4xl font-medium tracking-tight '>Featured Projects</h1>    
        </div>
        <div className='px-8'>
            <div className='cards w-full flex gap-10 '>
                <div className='cardcontainer relative w-1/2 h-[75vh]'>
                    <h1></h1>
                    <div className='card rounded-lg w-full h-full bg-red-500 overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" />
                    </div>
                </div>
                
                <div className='cardcontainer w-1/2 h-[75vh]'>
                    <div className='card rounded-lg w-full h-full bg-red-500 overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
