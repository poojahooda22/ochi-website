import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-8 border-b-[1px] border-zinc pb-10 mb-10'>
            <h1 className='text-4xl font-medium tracking-tight '>Featured Projects</h1>    
        </div>
        <div className='px-8'>
            <div className='card w-full flex gap-10 '>
                <div className='card rounded-lg w-1/2 h-[75vh] bg-red-500'></div>
                <div className='card rounded-lg w-1/2 h-[75vh] bg-red-500'></div>
            </div>
        </div>
    </div>
  )
}

export default Featured