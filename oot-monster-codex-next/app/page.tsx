'use client'
import React, { useState, useEffect } from 'react'
import Card from './_components/card'
import Header from './_components/header'
import Footer from './_components/footer'
import ToTop from './_components/totop'

interface Cards {
  name: string
  id: string
  description: string
  boss_text?: string
  image_url: string
  className?: string
  hp: number
  damage: number
  dot: number
}

export default function Home() {
  const [cards, setCards] = useState<Cards[]>([])

  useEffect(() => {
    fetch('http://localhost:3001/monsters', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => setCards(data))
    .catch(err => console.log(err))
  }, [])

  const handleSearch = (data: Cards[]) => {
    if (data.length === 0) {
      fetch('http://localhost:3001/monsters', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(err => console.log(err))
    } else {
      setCards(data)
    }
  }

  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Header onSearch={handleSearch} defaultData={cards} />

      <ToTop />

      
        <div className="flex flex-wrap justify-center">
          {cards.map((item: Cards) => (
              <Card
                key={item.id}
                name={item.name}
                id={item.id}
                description={item.description.length > 100 ? item.description.slice(0, 100) + '...' : item.description}
                image={item.image_url}
                boss_text={item.boss_text}
                hp={item.hp}
                dmg={item.damage}
                dot={item.dot}
                className='m-8'
              />
          ))}
        </div>
      

      <Footer />
    </div>
  )
}