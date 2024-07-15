import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-600 flex items-center px-32 gap-5'>
        <div className="cardcontainer h-[50vh] w-1/2">
            <div className='card relative w-full rounded-xl h-full flex items-center justify-center bg-[#004d43]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className=' absolute left-10 bottom-10 border py-2 px-4 rounded-full font-semibold text-xl border-[#cdea68] text-[#cdea68] '> &copy; 2019-2022 </button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
            <div className='card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#212121]'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='w-32' alt="" />
                <button className=' absolute left-10 bottom-10 border py-2 px-4 rounded-full font-semibold uppercase'>Rating 5.0 on Clutch</button>
            </div> 
            <div className='card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#212121]'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-32' alt="" />
                <button className=' absolute left-10 bottom-10 border py-2 px-4 rounded-full font-semibold  uppercase'>Rating 5.0 on Clutch</button>
            </div> 
            
        </div>
        
    </div>
  )
}

export default Cards