// InfoCard.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


interface Card {
    card?: {
      id: string
      name: string
      description: string
      boss_text?: string
      navi_text?: string
      hp: number
      damage: number
      dot: number
      weakness: string
      strength: string
      image_url: string
    }
    details?: {
      item?: string
      amount?: string
      rate?: number
    }
  }

const InfoCard: React.FC<Card> = ({ card, details }) => {
    return (
        <div className='flex flex-col items-center'>
            <div>
                <div>
                    <h2>Name</h2>
                    <h3>Boss text</h3>
                </div>
                <p>Id</p>
            </div>
            <div className='bg-white w-[320px] rounded-lg'>
                <Image src={card?.image_url || '/images/assets/not_found.png'} alt={card?.name || 'A monster in the game'} width={1000} height={1000} className='w-full h-auto'></Image>
            </div>
            <div className='w-[320px]'>
                <h3>Description / Navi:</h3>
                <p>{card?.description || 'There is no available info for this monster'}</p>
                <div className='flex'>
                    <Link href=''>
                        <Image src='' alt='' width={100} height={100}></Image>
                    </Link>
                    <Link href=''>
                        <Image src='' alt='' width={100} height={100}></Image>
                    </Link>
                </div>
            </div>
            <div className='flex flex-wrap w-[320px] h-auto rounded-md border p-4'>
                <div>
                    <h3>Hp</h3>
                    <div className='ml-4'></div>
                </div>
                <div className='ml-4'>
                    <h3>Damage</h3>
                    <div className='ml-2'></div>
                </div>
                <div className='ml-4'>
                    <h3>Dot</h3>
                    <div className='ml-2'></div>
                </div>
                <div className='ml-4'>
                    <h3>Weakness</h3>
                    <div className='ml-2'></div>
                </div>
                <div className='ml-4'>
                    <h3>Strength</h3>
                    <div className='ml-2'></div>
                </div>
                <div className='ml-4'>
                    <h3>Drops</h3>
                    <div className='ml-2'></div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard