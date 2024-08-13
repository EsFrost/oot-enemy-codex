'use client'
import React, { useState, useEffect } from 'react'
import HeaderNoSearch from './_components/headernosearch'
import Footer from './_components/footer'
import InfoCard from './_components/infocard'

const PageNotFound = () => {

  const card = {
    card: {
      id: '404',
      name: 'Page Not Found',
      description: 'The page you requested could not be found.',
      boss_text: '',
      navi_text: 'Hey, listen! This page does not exist.',
      hp: 4,
      damage: 4,
      dot: 4,
      weakness: 'Correct links',
      strength: 'Very strong',
      image_url: ''
    },
    details: []
  }

  return (
    <div className='min-h-screen flex flex-col justify-between text-[#E0E0E0]'>
      <HeaderNoSearch />
      <InfoCard card={card?.card} details={card?.details}/>
      <Footer />
    </div>
  )
}

export default PageNotFound