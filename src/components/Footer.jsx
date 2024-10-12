import React from 'react'

const Footer = () => {
  return (
    <footer >
        <p className='text-center p-8 text-gray-600 text-lg
            bg-white/20 backdrop-blur-xl mt-10'>
            &copy; {new Date().getFullYear()} webdecoded. All Rights Reversed.
        </p>
    </footer>
  )
}

export default Footer
