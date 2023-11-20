import React, { useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Image from 'next/image'
import Webdev2 from 'public/images/profile/Webdev2.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import Education from '../components/Education'
import TransitionEffect from '../components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
const ref = useRef(null);
const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000 })
const isInView = useInView(ref, {once: true});
useEffect(() => {
  if(isInView) {
    motionValue.set(value);
  }
}, [isInView, value, motionValue])

useEffect(() => {
  springValue.on("change", (latest) => {
    if(ref.current && latest.toFixed(0) <= value ){
      ref.current.textContent = latest.toFixed(0);
    }
  })
}, [springValue, value])

  return <span ref={ref}></span>
} 

const about = () => {
  return (
    <>
    <Head>
        <title>About Page</title>
        <meta name="description" content='any description' />
    </Head>
    <TransitionEffect />
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-16'>
        <AnimatedText text=" Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
          <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>

            <p className='font-medium'>
              I am a student with strong in design and integration with intuitive problem-solving skills.
              Proficient in Java, Python and Web Development. Passionate about implementing and launching new 
              projects. Ability to translate business requirements into technical solutions.</p>
              <p className='my-4 font-medium'>
              Looking to start a career as an entry level software engineer with a reputed firm driven by technology.
              I'm passionate about learning new technologies and understand there is
              more than one way to accomplish a task. </p>
              <p className='font-medium'>
              Though I am most proficient
              in building front-end applications using HTML, CSS, Javascript, and
              React, and MERN Stack languages, I am a quick learner and can pick up new tech stacks as
              needed. I believe that being a great developer is not using one
              specific language, but choosing the best tool for the job.</p>
          </div>

          <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'  />
            <Image src={Webdev2} alt="profilepic" className='w-full h-auto rounded-2xl'
            priority
            sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw'
            />
            </div>

          <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
            <div className='flex flex-col items-end justify-center xl:items-center'>
              <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={10}/>+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Programming Languages</h2>
            </div>

             <div className='flex flex-col items-end justify-center xl:items-center'>
               <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
               <AnimatedNumbers value={5}/>+
               </span>
               <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
            </div>

            <div className='flex flex-col items-end justify-center xl:items-center'>
               <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
               2+
               </span>
               <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Certified Courses</h2>
            </div>
          </div>
          
        </div>

        <Education />
      </Layout>
    </main>
    </>
  )
}

export default about
