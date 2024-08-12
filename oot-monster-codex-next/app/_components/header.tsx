// Header.tsx
import React, { useState } from 'react'
import Image from 'next/image'
import SearchBar from './searchbar'
import Link from 'next/link'

interface HeaderProps {
  onSearch: (data: any) => void;
  defaultData: any;
}

const Header: React.FC<HeaderProps> = ({ onSearch, defaultData }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleLinkClick = () => {
    setSearchQuery('');
    onSearch([]);
  }

  return (
    <div className='flex flex-col md:flex-row w-full md:h-[100px] bg-[#2A2A2A] items-center md:justify-between'>
      <Link href={'/'} onClick={handleLinkClick}>
        <Image src="/images/assets/logo.png" alt="header" width={320} height={100} className='min-h-[100px]' />
      </Link>
      <Link href={'/'} onClick={handleLinkClick}>
        <div className='flex flex-col justify-center mt-4 md:hidden lg:flex lg:ml-4'>
            <h1 className='text-[#E0E0E0] text-4xl text-center font-botw'>Monster Codex</h1>
            <p className='text-[#B0B0B0] text-center font-botw text-xl'>The Ocarina of Time</p>
        </div>
      </Link>
      <SearchBar onSearch={(data) => onSearch(data)} containerClass='mt-4 pb-4 md:pr-4' setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
    </div>
  )
}

export default Header