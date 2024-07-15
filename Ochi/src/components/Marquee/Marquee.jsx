import { motion } from 'framer-motion'
import React from 'react'


function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed ='.1' className='w-full py-10 bg-[#004d43] rounded-t-3xl'>
        <div className='text-marquee border-t-2 border-b-2 overflow-hidden border-zinc-800 whitespace-nowrap flex'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:10}} className='pr-10 text-[14vw] font-["Founders_Grotesk_X-condensed"]
            font-light -tracking-tighter uppercase '>We are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:10}} className='pr-10 text-[14vw]   font-["Founders_Grotesk_X-condensed"] font-light -tracking-tighter uppercase'>We are ochi </motion.h1>
        </div>
    </div>
  )
}

export default Marquee