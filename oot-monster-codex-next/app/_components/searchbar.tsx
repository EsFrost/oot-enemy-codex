import { useState } from 'react'
import sanitizeHtml from 'sanitize-html'

interface SearchBarProps {
  onSearch: (data: any) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('')

  const sanitizeInput = (input: string) => {
    return sanitizeHtml(input, {allowedTags: [], allowedAttributes: {}})
  }
  

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cleanInput = sanitizeInput(searchQuery)
      try {
        if (cleanInput === '') {
          const response = await fetch('http://localhost:3001/monsters', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const data = await response.json()
          onSearch(data)
        } else {
          const response = await fetch(`http://localhost:3001/monsters/search/${cleanInput}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const data = await response.json()
          onSearch(data)
        }
      } catch (err) {
        console.log(err)
      }
      // Send search query to API or handle search logic here
      setSearchQuery('')
    }
  }

  const handleSearchIconClick = async () => {
    const cleanInput = sanitizeInput(searchQuery)
    if (cleanInput === '') {
      try {
        const response = await fetch('http://localhost:3001/monsters', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        onSearch(data)
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        const response = await fetch(`http://localhost:3001/monsters/search/${cleanInput}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        onSearch(data)
      } catch (err) {
        console.log(err)
      }
    }
    // Send search query to API or handle search logic here
    console.log('Search query:', cleanInput)
    setSearchQuery('')
  }

  return (
    <div className="flex items-center relative">
      <input
        type="text"
        className="pl-8 py-2 text-sm text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 w-64 md:w-80 lg:w-96 xl:w-128"
        placeholder="Search a name, boss text or id..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleSearch}
      />
      <button
        className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 cursor-pointer ml-2"
        onClick={handleSearchIconClick}
      >
        <svg
          className="w-4 h-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  )
}

export default SearchBar