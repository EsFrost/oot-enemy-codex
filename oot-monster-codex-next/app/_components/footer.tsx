// Footer.tsx
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel, faCookie, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

  return (
    <footer className='flex flex-col text-[#E0E0E0] bg-[#2A2A2A] mt-4'>
        <div className='flex flex-col lg:flex-row lg:justify-between'>
            <div className='p-4 lg:w-1/3'>
                <h2 className='text-lg flex justify-center lg:justify-normal items-center'>
                    <FontAwesomeIcon icon={faEnvelope} className='mr-2 w-4' />
                    Contact
                </h2>
                <p className='text-center lg:text-left'>Email: <a href='mailto:sigmafi.tech@gmail.com' className='text-white'>sigmafi.tech@gmail.com</a></p>
            </div>
            <div className='p-4 lg:w-1/3'>
                <h2 className='text-lg lg:text-left flex justify-center lg:justify-normal items-center'>
                    <FontAwesomeIcon icon={faGavel} className='mr-2 w-4' />
                    Disclaimer
                </h2>
                <p>Images in this website likely represent intellectual property owned by Nintendo, its affiliates, or associated entities. They are presented here under fair use, as the website is utilized in a noncommercial context to illustrate, discuss, and support the original work without infringing on the rights or financial interests of the owner.                </p>
            </div>
            <div className='p-4 lg:w-1/3'>
                <h2 className='text-lg lg:text-left flex justify-center lg:justify-normal items-center'>
                    <FontAwesomeIcon icon={faCookie} className='mr-2 w-4' />
                    Cookies
                </h2>
                <p>Our website uses cookies to remember your preferences and settings, ensuring a better browsing experience. We don&apos;t collect or store any personal information, nor do we display ads or share data. Your privacy is fully protected, and you can manage cookies through your browser settings.</p>
            </div>
        </div>
        <div className='text-center pb-2 text-sm mt-4'>
            <p>© <span>{new Date().getFullYear()}</span> <a href='https://github.com/EsFrost' target='blank'>Sigmund Frost</a></p>
        </div>
    </footer>
  )
}

export default Footer