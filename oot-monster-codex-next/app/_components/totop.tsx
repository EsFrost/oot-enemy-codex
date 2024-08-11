// ToTop.tsx
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ToTop = () => {
  const [showToTop, setShowToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      const scrollPercentage = (scrollPosition / viewportHeight) * 100

      if (scrollPercentage > 10) {
        setShowToTop(true)
      } else {
        setShowToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`fixed bottom-4 right-2 bg-[#383838] hover:bg-[#3D3D3D] text-[#E0E0E0] font-bold py-2 px-4 rounded ${showToTop ? 'block' : 'hidden'} shadow-[2px_2px_10px_0_rgba(255,255,255,0.3)] duration-300 transition-all`}
      onClick={handleToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} size="lg" />
    </button>
  )
}

export default ToTop