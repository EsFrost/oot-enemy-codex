// HeaderNoSearch.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeaderNoSearch = () => {

  return (
    <div className='flex flex-col md:flex-row w-full md:h-[100px] bg-[#2A2A2A] items-center'>
      <Link href={'/'}>
        <Image src="/images/assets/logo.png" alt="header" width={320} height={100} className='min-h-[100px]' />
      </Link>
      <Link href={'/'} className='md:ml-[25%]'>
        <div className='flex flex-col justify-center mt-4 lg:flex lg:ml-4 font-botw'>
            <h1 className='text-[#E0E0E0] text-4xl text-center'>Monster Codex</h1>
            <p className='text-[#B0B0B0] text-center text-xl'>The Ocarina of Time</p>
        </div>
      </Link>
    </div>
  )
}

export default HeaderNoSearch