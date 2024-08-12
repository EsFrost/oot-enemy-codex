'use client'
import React, { useState, useEffect } from 'react'
import HeaderNoSearch from '../../_components/headernosearch'
import Footer from '../../_components/footer'
import InfoCard from '../../_components/infocard'
import { usePathname, useRouter } from 'next/navigation'
import sanitizeHtml from 'sanitize-html'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

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

  const router = useRouter()
  const pathname = usePathname()
  const id = pathname?.split('/').pop()

  const [card, setCard] = useState<Card>()
  const [total, setTotal] = useState<Total>()

  useEffect(() => {
    if (id && parseInt(id)) {
      const sanitizedId = sanitizeHtml(id as string, {allowedTags: [], allowedAttributes: {}})


      fetch('http://localhost:3001/monsters/total', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
          setTotal(data)
        
          if (parseInt(sanitizedId) > data.total) {
            router.push('/404')
            return
          }

          fetch(`http://localhost:3001/monsters/monster/${sanitizedId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
            })
            .then(response => response.json())
            .then(data => setCard(data))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
      }
      else {
        router.push('/404')
        return
      }
  }, [id, router])

  return (
    <div className='min-h-screen flex flex-col justify-between text-[#E0E0E0]'>
      <HeaderNoSearch />
      <div className='flex justify-center mt-4'>
        <Link href={`/monster/${card?.card.id ? (parseInt(card?.card.id) === 1 ? total?.total : parseInt(card?.card.id) - 1) : ''}`}>
          <div className='flex items-center mr-8'>
            <FontAwesomeIcon icon={faChevronLeft} className='w-4 pr-4' />
            <p># {`${card?.card.id ? (parseInt(card?.card.id) === 1 ? total?.total : parseInt(card?.card.id) - 1) : 'Loading ...'}`}</p>
          </div>
        </Link>

        <Link href={`/monster/${card?.card.id ? (parseInt(card?.card.id) == total?.total ? 1 : parseInt(card?.card.id) + 1) : ''}`}>
          <div className='flex items-center ml-8'>
            <p># {`${card?.card.id ? (parseInt(card?.card.id) == total?.total ? 1 : parseInt(card?.card.id) + 1) : 'Loading ...'}`}</p>
            <FontAwesomeIcon icon={faChevronRight} className='w-4 pl-4' />
          </div>
        </Link>
        
      </div>
      <InfoCard card={card?.card} details={card?.details}/>
      <Footer />
    </div>
  )
}

export default Info