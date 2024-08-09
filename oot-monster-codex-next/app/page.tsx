import React from 'react'
import Card from './_components/card'

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

export default async function Home() {

  const res = await fetch('http://localhost:3001/monsters/')
  const data = await res.json()

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item: Cards) => {
        return <Card
                key={item.id}
                name={item.name}
                id={`#${item.id}`}
                description={item.description.length > 100 ? item.description.slice(0, 100) + '...' : item.description}
                image={item.image_url}
                boss_text={item.boss_text}
                hp={item.hp}
                dmg={item.damage}
                dot={item.dot}
                className='m-4'
              />
      })}
      
    </div>
  )
}