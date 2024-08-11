import React from 'react'
import HeaderNoSearch from '../_components/headernosearch'
import Footer from '../_components/footer'

const page = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <HeaderNoSearch />
      <Footer />
    </div>
  )
}

export default page