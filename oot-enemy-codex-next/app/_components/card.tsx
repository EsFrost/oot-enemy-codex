// Card.tsx
import React from 'react'
import Image from 'next/image'

interface CardProps {
  name: string
  type: string
  description: string
  image: string
  className?: string
}

const Card: React.FC<CardProps> = ({
  name,
  type,
  description,
  image,
  className = ''
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 ${className} w-64 h-96`}
    >
      <div className="flex justify-center mb-4">
        <Image src={image} alt={name} width={192} height={192} />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm text-gray-600">{type}</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}

export default Card