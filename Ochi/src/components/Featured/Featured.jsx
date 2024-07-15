import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start((i) => ({
      y: 0,
      transition: { ease:[0.22,1,0.36,1],delay: i * 0.1 },
    }));
  };

  const handleHoverEnd = (index) => {
    cards[index].start((i) => ({
      y: '100%',
      transition: {ease:[0.22,1,0.36,1], delay: i * 0.1 },
    }));
  };

  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
      </div>
      <div className='card w-full p-12 flex gap-10'>
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className='cardcontainer relative w-1/2 h-[80vh]'
        >
          <h1 className='text-8xl absolute flex overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#748b21] left-full z-10'>
            {Array.from("FYDE").map((item, id) => (
              <motion.span
                className='inline-block'
                initial={{ y: '100%' }}
                animate={cards[0]}
                custom={id}
                key={id}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className='w-full h-full rounded-xl overflow-hidden'>
            <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className='cardcontainer relative w-1/2 h-[80vh]'
        >
          <h1 className='text-8xl absolute flex overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 text-[#748b21] right-full z-10'>
            {Array.from("VISE").map((item, id) => (
              <motion.span
                className='inline-block'
                initial={{ y: '100%' }}
                animate={cards[1]}
                custom={id}
                key={id}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className='w-full h-full rounded-xl overflow-hidden'>
            <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Featured;
