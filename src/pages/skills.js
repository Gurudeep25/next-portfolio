import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Html from 'public/images/html.png';
import Css from 'public/images/css.png';
import Javascript from 'public/images/javascript.png';
import ReactImg from 'public/images/react.png';
import Tailwind from 'public/images/tailwind.png';
import Github from 'public/images/github1.png';
import Mongo from 'public/images/mongo.png';
import NextJS from 'public/images/nextjs.png';
import Node from 'public/images/node.png';
import Poly from 'public/images/polygon1.jpg'
import Meta from 'public/images/metamask.jpg'
import Ipfs from 'public/images/ipfs.jpg'
import Graph from 'public/images/graph.jpg'
import Express from 'public/images/express1.jpg'
import Web3 from 'public/images/web3js.jpg'
import TransitionEffect from '../components/TransitionEffect'

const Skills = () => {
  return (
    <>
     <Head>
        <title>Skills Page</title>
        <meta name="description" content='any description' />
    </Head>
    <TransitionEffect />
    <main className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
        <AnimatedText text="Talent Works, Genius Creates" className='mb-16 md:text-5xl sm:text-4xl xs:text-3xl'/>
        <div className='grid w-full grid-cols-8 gap-16'>
          <div className='col-span-3 flex flex-col items-start justify-start'>
            <h1 className='mb-4 text-4xl font-bold uppercase text-dark/75 text-orange-500 md:text-3xl sm:text-2xl xs:text-xl'>Skills</h1>
            <h2 className='text-3xl text-blue-500 md:text-2xl sm:text-xl xs:text-base'>What I can do</h2>
            </div>
        </div>

        <div className='grid grid-cols-3 lg:grid-cols-4 md:grid-cols-2 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-6xl font-mono lg:text-3xl md:text-2xl sm:text-xl'>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4 sm:p-3 xs:p-2'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-6xl font-mono lg:text-3xl md:text-2xl sm:text-xl'>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4 sm:p-3 xs:p-2'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-6xl font-mono lg:text-3xl md:text-2xl sm:text-xl'>JS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4 sm:p-3 xs:p-2'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-6xl font-mono xl:text-5xl lg:text-2xl md:text-2xl sm:text-xl'>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4 sm:p-3 xs:p-2'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-5xl font-mono 2xl:text-4xl xl:text-3xl lg:text-xl md:text-lg sm:text-base'>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4 sm:p-3 xs:p-2'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Node} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-6xl font-mono xl:text-5xl lg:text-2xl md:text-xl sm:text-lg'>Node</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4 sm:p-3 xs:p-2'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Mongo} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-5xl font-mono xl:text-4xl lg:text-xl md:text-lg sm:text-base'>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4 sm:p-3 xs:p-2'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-5xl font-mono xl:text-4xl lg:text-xl md:text-lg sm:text-base'>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4 sm:p-3 xs:p-2'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-6xl font-mono xl:text-5xl lg:text-2xl md:text-xl sm:text-lg'>Next</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4 sm:p-3 xs:p-2'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Express} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-5xl font-mono xl:text-4xl lg:text-xl md:text-lg sm:text-base'>Express</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4 sm:p-3 xs:p-2'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Poly} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-5xl font-mono 2xl:text-4xl xl:text-3xl lg:text-xl md:text-lg sm:text-base'>Polygon</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4 sm:p-3 xs:p-2'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Web3} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-6xl font-mono xl:text-5xl lg:text-xl md:text-lg sm:text-base'>Web3 JS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4 sm:p-3 xs:p-2'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Meta} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-5xl font-mono 2xl:text-4xl xl:text-3xl lg:text-xl md:text-lg sm:text-base'>Metamask</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4 sm:p-3 xs:p-2'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Ipfs} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-6xl font-mono xl:text-5xl lg:text-2xl md:text-xl sm:text-lg'>IPFS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 md:p-4 sm:p-3 xs:p-2'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Graph} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-500 text-6xl font-mono 2xl:text-5xl xl:text-4xl lg:text-2xl md:text-xl sm:text-lg'>Graph</h3>
              </div>
            </div>
          </div>

        </div>
       </Layout>
    </main>
    </>
  )
}

export default Skills
