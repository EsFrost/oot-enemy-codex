'use client'
import React, { useState, useEffect } from 'react'
import HeaderNoSearch from '../_components/headernosearch'
import Footer from '../_components/footer'
import InfoCard from '../_components/infocard'
import { usePathname } from 'next/navigation'
import sanitizeHtml from 'sanitize-html'

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
    image_url: string
  }
  details?: {
    item?: string
    amount?: string
    rate?: number
  }[]
}

interface Total {
  total: number
}

const Info = () => {

  const pathname = usePathname()
  const id = pathname?.split('/').pop()

  const [card, setCard] = useState<Card>()
  const [total, setTotal] = useState<Total>()

  useEffect(() => {
    if (id) {
      const sanitizedId = sanitizeHtml(id as string, {allowedTags: [], allowedAttributes: {}})
    
    fetch(`http://localhost:3001/monsters/monster/${sanitizedId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(response => response.json())
      .then(data => setCard(data))
      .catch(err => console.log(err))

      fetch('http://localhost:3001/monsters/total', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => setTotal(data))
        .catch(err => console.log(err))
      }
  }, [id])

  return (
    <div className='min-h-screen flex flex-col justify-between text-[#E0E0E0]'>
      <HeaderNoSearch />
      <InfoCard card={card?.card} details={card?.details}/>
      <Footer />
    </div>
  )
}

export default Info