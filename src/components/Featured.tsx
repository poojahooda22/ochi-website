import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-8 border-b-[1px] border-zinc pb-10'>
        <h1 className='text-4xl font-medium tracking-tight mb-8'>Featured Projects</h1>
        <div className='cards w-full flex gap-10'>
            <div className='card w-1/2 h-[60vh] bg-red-500'></div>
            <div className='card w-1/2 h-[60vh] bg-red-500'></div>
        </div>
      </div>
    </div>
  )
}

export default Featured
