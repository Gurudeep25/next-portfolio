import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className="py-4 flex items-center justify-between lg:flex-col lg:py-6">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className="flex items-center mx-5 text-2xl text-gray-500">
                <h3>Gurudeep K P</h3>
            </div>
            <div className='flex items-center mx-5'>Say Hello</div>
        </Layout>
    </footer>
  )
}

export default Footer
