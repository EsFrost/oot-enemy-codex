'use client'
import React, { useState, useEffect } from 'react'
import HeaderNoSearch from '../_components/headernosearch'
import Footer from '../_components/footer'

interface Card {
  card: {
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
    attack_type: string
  }
  details?: {
    item?: string
    amount?: string
    rate?: number
  }
}

const Info = () => {

  const [card, setCard] = useState<Card>()

  useEffect(() => {
    fetch('http://localhost:3001/monsters/monster/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(response => response.json())
      .then(data => setCard(data))
      .catch(err => console.log(err))
  }, [])

  console.log(card)

  return (
    <div className='min-h-screen flex flex-col justify-between text-[#E0E0E0]'>
      <HeaderNoSearch />
      <p>{card?.card?.name}</p>
      <Footer />
    </div>
  )
}

export default Info