// Card.tsx
import React from 'react'
import Image from 'next/image'

interface CardProps {
  name: string
  id: string
  description: string
  image: string
  className?: string
  hp?: string
  dmg?: string
  dot?: string
}

const Card: React.FC<CardProps> = ({
  name,
  id,
  description,
  image,
  className = ''
}) => {
  return (
    <div
      className={`bg-[#2A2A2A] text-[#E0E0E0] rounded-lg shadow-[5px_5px_15px_0_rgba(255,255,255,0.2)] p-4 ${className} w-80 h-[500px] flex flex-col hover:shadow-[-5px_5px_15px_0_rgba(255,255,255,0.2)] duration-500 ease-in-out transition-all min-w-[320px]`}
    >
      <div className="flex justify-center mb-4">
        <Image src={image} alt={name} width={192} height={192} className="w-42 h-52 bg-[#6C6C6C] rounded-lg p-2" />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className='flex justify-center items-center relative'>
            <p className="text-sm text-[#B0B0B0] absolute left-20">{id}</p>
            <h2 className="text-lg font-bold text-center">{name}</h2>
          </div>
          <p className="text-sm text-center">{description}</p>
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-between'>
              <p className='flex text-[#FF6347]'>HP:
                <Image src="/images/assets/4_4-hp.png" alt="Full heart" width={20} height={20} className='ml-1' />
                <Image src="/images/assets/4_4-hp.png" alt="Full heart" width={20} height={20} className='ml-1' />
                <Image src="/images/assets/2_4-hp.png" alt="Half heart" width={20} height={20} className='ml-1' /></p>
              <p className='flex ml-2 text-[#CC03CD]'>DMG:
                <Image src="/images/assets/2_4-damage.png" alt="Full heart" width={20} height={20} className='ml-1' />
              </p>
              <p className='flex ml-2 text-[#0AD314]'>DOT:
                <Image src="/images/assets/0.png" alt="Full heart" width={20} height={20} className='ml-1' />
              </p>
            </div>
            <p className='text-[12px] mt-4'>HP = Health points, DMG = Damage, DOT = Damage Over Time</p>
        </div>
      </div>
    </div>
  )
}

export default Card