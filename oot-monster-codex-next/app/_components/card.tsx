// Card.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  name: string
  id: string
  description: string
  boss_text?: string
  image: string
  className?: string
  hp: number
  dmg: number
  dot: number
}

const Card: React.FC<CardProps> = ({
  name,
  id,
  description,
  boss_text,
  image,
  className = '',
  hp,
  dmg,
  dot,
}) => {
  return (
    <div
      className={`bg-[#2A2A2A] text-[#E0E0E0] rounded-lg ${boss_text ? 'shadow-[5px_5px_15px_0_rgba(255,215,0,0.5)] hover:shadow-[-5px_5px_15px_0_rgba(255,215,0,0.5)]' : 'shadow-[5px_5px_15px_0_rgba(255,255,255,0.2)] hover:shadow-[-5px_5px_15px_0_rgba(255,255,255,0.2)]' } p-4 ${className} w-80 h-[500px] flex flex-col duration-500 ease-in-out transition-all`}
    >
      <Link href={`/monster/${id}`} className="flex justify-center mb-4">
          <Image src={image} alt={name} width={192} height={192} className="w-42 h-52 bg-[#6C6C6C] rounded-lg p-2 w-auto" />
      </Link>
      
      <Link href={`/monster/${id}`} className="flex flex-col justify-between h-full">
        
          <div>
            <div className='flex justify-center items-center relative'>
              <p className="text-sm text-[#B0B0B0] absolute left-5">{`#${id}`}</p>
              <h2 className="text-lg font-bold text-center">{name}</h2>
            </div>
            {boss_text ? <p className='text-[#B0B0B0] text-sm text-center'>{boss_text}</p> : ''}
            <p className="text-sm text-center mt-2">{description}</p>
          </div>
          <div className='flex flex-col'>
            <div className={`flex justify-between ${hp > 20 || dmg > 20 || dot > 20 ? 'flex-col' : 'flex-row'}`}>
                <p className='flex text-[#FF6347]'><span className={`${hp > 20 || dmg > 20 || dot > 20 ? 'w-12' : ''}`}>HP:</span>
                  {Array.from({ length: (hp - hp % 4) / 4 }).map((_, index) => (
                    <Image src="/images/assets/4_4-hp.png" alt="Full heart" width={10} height={10} className='ml-1 w-4 h-4 mt-1' key={index} />
                  ))}
                  {hp % 4 !== 0 ? 
                    <Image src={`/images/assets/${hp % 4}_4-hp.png`} alt={`${hp % 4}/4 heart`} width={20} height={20} className='ml-1 w-4 h-4 mt-1' /> :
                    hp < 4 ? 
                    <Image src={`/images/assets/0.png`} alt={`Empty heart`} width={20} height={20} className='ml-1 w-4 h-4 mt-1' /> : '' }
                  </p>
                <p className={`flex text-[#CC03CD] ${hp > 20 || dmg > 20 || dot > 20 ? '' : 'ml-2'}`}> <span className={`${hp > 20 || dmg > 20 || dot > 20 ? 'w-12' : ''}`}>DMG:</span> 
                  {Array.from({ length: (dmg - dmg % 4) / 4 }).map((_, index) => (
                    <Image src="/images/assets/4_4-damage.png" alt="Full heart" width={10} height={10} className='ml-1 w-4 h-4 mt-1' key={index} />
                  ))}
                  {dmg % 4 !== 0 ? 
                    <Image src={`/images/assets/${dmg % 4}_4-damage.png`} alt={`${dmg % 4}/4 heart`} width={20} height={20} className='ml-1 w-4 h-4 mt-1' /> :
                    dmg < 4 ? 
                    <Image src={`/images/assets/0.png`} alt={`Empty heart`} width={20} height={20} className='ml-1 w-4 h-4 mt-1' /> : '' }
                </p>
                <p className={`flex text-[#3ec545] ${hp > 20 || dmg > 20 || dot > 20 ? '' : 'ml-2'}`}><span className={`${hp > 20 || dmg > 20 || dot > 20 ? 'w-12' : ''}`}>DOT:</span>
                  {Array.from({ length: (dot - dot % 4) / 4 }).map((_, index) => (
                    <Image src="/images/assets/4_4-dot.png" alt="Full heart" width={10} height={10} className='ml-1 w-4 h-4 mt-1' key={index} />
                  ))}
                  {dot % 4 !== 0 ? 
                    <Image src={`/images/assets/${dot % 4}_4-dot.png`} alt={`${dot % 4}/4 heart`} width={20} height={20} className='ml-1 w-4 h-4 mt-1' /> :
                    dot < 4 ? 
                    <Image src={`/images/assets/0.png`} alt={`Empty heart`} width={20} height={20} className='ml-1 w-4 h-4 mt-1' /> : '' }
                </p>
              </div>
              <p className='text-[12px] mt-4 text-[#B0B0B0]'>HP = Health points, DMG = Damage, DOT = Damage Over Time</p>
          </div>
        
      </Link>

    </div>
  )
}

export default Card