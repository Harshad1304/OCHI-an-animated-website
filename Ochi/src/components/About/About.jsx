import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-t-3xl'>
        <h1 className=' pb-4 text-[4vw]  duration-500 leading-[4vw] font-light font-["Neue_Montreal"] text-black'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full flex gap-5 border-t-[1px] border-[#748b21] '> 
        <div className='w-1/2 mt-5'>
            <h1  className='text-7xl text-black'>Our Approch :</h1>
            <button className=' flex gap-10 items-center mt-10 px-10 py-4 bg-zinc-900 rounded-full'>Read More
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            </button>
        </div>
            <div className='w-1/2 h-[75vh] bg-[#748b2169] rounded-xl mt-5'></div>
    </div>
    </div>
  )
}

export default About