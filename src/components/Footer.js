import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark text-lg'>
        <Layout className=' flex py-8 items-center justify-center'>
        <span>{new Date().getFullYear()} &copy; All Rights</span>    
            {/* <Link href="">Copyrights@2024 </Link> */}
        </Layout>
    </footer>
  )
}

export default Footer
