import React from 'react'

const Skeleton = () => {
    return (
        <>
            <div
              className={`rounded-lg mb-2 animate-pulse
                bg-[#2A2A2A] text-[#E0E0E0] shadow-[5px_5px_15px_0_rgba(255,255,255,0.2)] hover:shadow-[-5px_5px_15px_0_rgba(255,255,255,0.2)] p-4 w-80 h-[500px] flex flex-col duration-500 ease-in-out transition-all
                `}
            >
              <div className='w-[250px] h-[208px] mx-auto rounded-lg bg-[#6C6C6C]'></div>
              <div>
            <div className='flex justify-center items-center relative mt-8'>
              <p className="text-sm text-[#B0B0B0] absolute left-5">{`#`}</p>
              <h2 className="text-[#B0B0B0] text-sm text-center">Loading...</h2>
            </div>
            <p className='text-[#B0B0B0] text-sm text-center'></p>
            <p className="text-sm text-center mt-2"></p>
          </div>
          <div className='flex flex-col'>
            <div className={`flex justify-between`}>
                <p className='flex text-[#FF6347] ml-2'><span className={``}>HP:</span>
                  </p>
                <p className={`flex text-[#CC03CD] ml-2`}> <span className={``}>DMG:</span> 
                  
              
                </p>
                <p className={`flex text-[#3ec545] ml-2`}><span className={``}>DOT:</span>
                  
                </p>
              </div>
              <p className='text-[12px] mt-4 text-[#B0B0B0]'>HP = Health points, DMG = Damage, DOT = Damage Over Time</p>
          </div>
        

      </div>
            
        </>
    )
}

export default Skeleton