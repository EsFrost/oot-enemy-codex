// InfoCard.tsx
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

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
  }[]
}

const InfoCard: React.FC<Card> = ({ card, details }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [displayText, setDisplayText] = useState('Navi')
  const [displayContent, setDisplayContent] = useState('')

  useEffect(() => {
    if (card) {
      setDisplayContent(card?.navi_text || 'There is no available info for this monster')
    }
  }, [card])

  const handleImageClick = (imageIndex: number) => {
    setSelectedImage(imageIndex)
    if (imageIndex === 0) {
      setDisplayText('Navi')
      setDisplayContent(card?.navi_text || 'There is no available info for this monster')
    } else if (imageIndex === 1) {
      setDisplayText('Description')
      setDisplayContent(card?.description || 'There is no available info for this monster')
    }
  }

  if (!card) {
    return <div className='flex justify-center items-center text-center'>Loading...</div>
  }

  return (
    <div className="flex flex-col items-center mt-4">
      <div className='flex'>
        <p>#{card?.id}</p>
        <div className='ml-4 text-center'>
          <h2 className='text-2xl'>{card?.name}</h2>
          <h3 className='text-sm text-[#B0B0B0]'>{card?.boss_text}</h3>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className="w-[320px] rounded-lg mt-4 bg-[#6C6C6C] p-4 lg:mr-4 h-full">
            <Image src={card?.image_url || '/images/assets/not_found.png'} alt={card?.name || 'A monster in the game'} width={1000} height={1000} className="w-full h-auto" />
        </div>

        <div>
            <div className="w-[320px] mt-4">
                <h3 className='text-xl'>{displayText}:</h3>
                <p className='mt-2'>{displayContent}</p>
                <div className="flex mt-4">
                    <Image src={'/images/assets/navi.png' || '/images/assets/not_found.png'} alt={'An image of navi the fairy'} width={100} height={100} onClick={() => handleImageClick(0)} className={`w-8 h-8 box-border ${selectedImage === 0 ? 'border-2 border-[#E0E0E0] rounded-full' : ''}`} />
                    <Image src={'/images/assets/triforce.png' || '/images/assets/not_found.png'} alt={'An image of the triforce'} width={100} height={100} onClick={() => handleImageClick(1)} className={`w-8 h-8 ml-4 box-border ${selectedImage === 1 ? 'border-2 border-[#E0E0E0] rounded-full' : ''}`} />
                </div>
            </div>
            <div className={`flex flex-col flex-wrap w-[320px] h-auto rounded-md border ${card.boss_text ? 'border-[rgba(255,215,0,0.5)]' : 'border-[#E0E0E0]'} p-4 mt-4`}>
                <div className='flex'>
                <h3 className='w-1/3'>Hp</h3>
                <div className="ml-2 flex">
                    {Array.from({ length: (card.hp - card.hp % 4) / 4 }).map((_, index) => (
                        <Image src="/images/assets/4_4-hp.png" alt="Full heart" width={10} height={10} className='ml-1 w-3 h-3 mt-1' key={index} />
                        ))}
                        {card.hp % 4 !== 0 ? 
                        <Image src={`/images/assets/${card.hp % 4}_4-hp.png`} alt={`${card.hp % 4}/4 heart`} width={20} height={20} className='ml-1 w-3 h-3 mt-1' /> :
                        card.hp < 4 ? 
                        <Image src={`/images/assets/0.png`} alt={`Empty heart`} width={20} height={20} className='ml-1 w-3 h-3 mt-1' /> : '' }
                </div>
                </div>
                <div className="flex">
                <h3 className='w-1/3'>Damage</h3>
                <div className="ml-2 flex">
                {Array.from({ length: (card.damage - card.damage % 4) / 4 }).map((_, index) => (
                        <Image src="/images/assets/4_4-damage.png" alt="Full heart" width={10} height={10} className='ml-1 w-3 h-3 mt-1' key={index} />
                        ))}
                        {card.damage % 4 !== 0 ? 
                        <Image src={`/images/assets/${card.damage % 4}_4-damage.png`} alt={`${card.damage % 4}/4 heart`} width={20} height={20} className='ml-1 w-3 h-3 mt-1' /> :
                        card.damage < 4 ? 
                        <Image src={`/images/assets/0.png`} alt={`Empty heart`} width={20} height={20} className='ml-1 w-3 h-3 mt-1' /> : '' }
                </div>
                </div>
                <div className="flex">
                <h3 className='w-1/3'>Dot</h3>
                <div className="ml-2 flex">
                {Array.from({ length: (card.dot - card.dot % 4) / 4 }).map((_, index) => (
                        <Image src="/images/assets/4_4-dot.png" alt="Full heart" width={10} height={10} className='ml-1 w-3 h-3 mt-1' key={index} />
                        ))}
                        {card.dot % 4 !== 0 ? 
                        <Image src={`/images/assets/${card.dot % 4}_4-dot.png`} alt={`${card.dot % 4}/4 heart`} width={20} height={20} className='ml-1 w-3 h-3 mt-1' /> :
                        card.dot < 4 ? 
                        <Image src={`/images/assets/0.png`} alt={`Empty heart`} width={20} height={20} className='ml-1 w-3 h-3 mt-1' /> : '' }
                </div>
                </div>
                <div className="flex">
                <h3 className='w-1/3'>
                        Strength
                </h3>
                <div className="ml-2">
                {(() => {
                    switch (card.strength) {
                        case 'Very weak':
                            return (
                                <div className='flex'>
                                    <Image src='/images/assets/strength_very_weak.png' alt='Skull indicating very weak strength' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                    <Image src='/images/assets/skull_empty.png' alt='Empty skull' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                    <Image src='/images/assets/skull_empty.png' alt='Empty skull' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                </div>
                                
                            )
                        case 'Weak':
                            return (
                                <div className='flex'>
                                    <Image src='/images/assets/strength_weak_strong.png' alt='Skull indicating very weak strength' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                    <Image src='/images/assets/skull_empty.png' alt='Empty skull' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                    <Image src='/images/assets/skull_empty.png' alt='Empty skull' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                </div>
                            )
                        case 'Medium':
                            return (
                                <div className='flex'>
                                    <Image src='/images/assets/strength_full.png' alt='Skull indicating full strength' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                    <Image src='/images/assets/strength_weak_strong.png' alt='Half skull' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                    <Image src='/images/assets/skull_empty.png' alt='Empty skull' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                </div>
                            )
                        case 'Strong':
                            return (
                                <div className='flex'>
                                    <Image src='/images/assets/strength_full.png' alt='Skull indicating full strength' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                    <Image src='/images/assets/strength_full.png' alt='Skull indicating full strength' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                    <Image src='/images/assets/strength_weak_strong.png' alt='Half skull' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                </div>
                            )
                        case 'Very strong':
                            return (
                                <div className='flex'>
                                    <Image src='/images/assets/strength_full.png' alt='Skull indicating full strength' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                    <Image src='/images/assets/strength_full.png' alt='Skull indicating full strength' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                    <Image src='/images/assets/strength_full.png' alt='Skull indicating full strength' width={20} height={20} className='ml-1 w-3 h-3 mt-1'></Image>
                                </div>
                            )
                        
                            default:
                                return 'Default output'
                        }
                    })()}
                </div>
                </div>

                <div className="flex">
                <h3 className='w-1/3'>Weakness</h3>
                <p className="ml-2">{card.weakness}</p>
                </div>
                {details &&details.length > 0 ? (
                    <div className="flex flex-col">
                    <h3 className='w-1/3'>Drops</h3>
                    {
                        details.map((item, index) => {
                            return (
                                <div className='pl-4 mt-4' key={index}>
                                    <div className='flex'>
                                        <h4 className='w-1/3 flex-shrink-0'>Item</h4>
                                        <p>{item.item}</p>
                                    </div>
                        
                                    <div className='flex'>
                                        <h4 className='w-1/3 flex-shrink-0'>Amount</h4>
                                        <p>{item.amount}</p>
                                    </div>
                                    
                                    <div className='flex'>
                                        <h4 className='w-1/3 flex-shrink-0'>Drop rate</h4>
                                        <p>{item.rate}%</p>
                                    </div>
                                    <div className='flex justify-center border-b mt-1'></div>
                                </div>
                            )
                        })
                    }
                    
                </div>
                ): ''}
            </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard