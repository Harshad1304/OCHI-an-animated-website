import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6"
import { motion } from "framer-motion"

function Landingpage() {
  
  return (
    // Big text Headings
    <div data-scroll data-scroll-section data-scroll-speed ="-0.3" className='w-full bg-zinc-900 h-screen pt-1'>
      <div className='textstructure uppercase mt-52 px-20'>
        {["We Create", "Eyeopening", "Presentations"].map((item, index) => (
          <div className='masker font-["Founders_Grotesk_X-condensed"] ' key={index}>
            <div className='w-fit flex items-center'>
              {index === 1 && (
                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='mr-[1vw] relative rounded-lg h-[5vw] overflow-hidden w-[9vw]'>
                  <img className='h-full w-full' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                </motion.div>
              )}
              <h1 className='text-[5vw] tracking-tighter font-extrabold leading-[5.5vw]'>
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      {/* Footer of landing page */}
      <div className='py-5 px-20 w-full border-t-[1px] flex justify-between border-gray-500 mt-40'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <div className='text-xl leading-none tracking-tight font-light' key={index}>
            {item}
          </div>
        ))}
        <div className='startbtn flex items-center gap-4'>
          <div className='uppercase border-[1px] px-5 py-2 rounded-full font-light text-sm border-zinc-300'>
            Start the project
          </div>
          <div className='flex items-center justify-center h-10 w-10 border-[1px] border-zinc-300 rounded-full'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage
