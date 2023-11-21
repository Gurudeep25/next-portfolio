import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../components/Icons'
import Todo from 'public/images/todo.jpg'
import Calc from 'public/images/calculator.jpg'
import Web3 from 'public/images/web3blog.jpg'
import Zomato from 'public/images/zomato.jpg'
import Port from 'public/images/portfolio.png'
import TransitionEffect from '../components/TransitionEffect'

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark 
        bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank' 
             className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '>
                <Image src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw'
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
                <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'> Visit Code </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'  />
             <Link href={link} target='_blank' 
             className='w-full cursor-pointer overflow-hiddenrounded-lg ' >
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4 '>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base '>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'> Visit </Link>
                <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon />{" "}</Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
    <Head>
        <title>Projects Page</title>
        <meta name="description" content='any description' />
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                    <FeaturedProject 
                    title="Zomato Clone App (MERN)"
                    img={Zomato}
                    summary="The MERN Stack application that is as functional as Zomato.
                    With added benefits using modern technology and latest user experience standards such as user
                    registration, restaurant search, filteration, menu viewing, payment processing, deployment,etc."
                    link="https://github.com/Gurudeep25/zomato-clone"
                    github="https://github.com/Gurudeep25/zomato-clone"
                    type="Featured Project" />
                </div>

                <div className='col-span-12'>
                    <FeaturedProject 
                    title="Task Tracker App"
                    img={Todo}
                    summary="It is an task tracking frontend application that's build with React.
                    It's a simple to-do list that helps us to remember the task to be done on time.
                    The task is associated with day and time and hence the checkbox to be noted for setting the remainder"
                    link="https://github.com/Gurudeep25/react-task-tracker"
                    github="https://github.com/Gurudeep25/react-task-tracker"
                    type="Featured Project" />
                </div>

                <div className='col-span-12'>
                    <FeaturedProject 
                    title="Calculator App"
                    img={Calc}
                    summary="It is a basic calculator frontend application that's build with React.
                    The arithmetic operations such as addition, subtraction, multiplication and division are done here.
                    Every number is considered as a button with an onclick function to perform operations."
                    link="https://github.com/Gurudeep25/react-calc"
                    github="https://github.com/Gurudeep25/react-calc"
                    type="Featured Project" />
                </div>

                <div className='col-span-12'>
                    <FeaturedProject 
                    title="Web3 Blog"
                    img={Web3}
                    summary="It is a web3 blog post application that runs on blockchain technology.
                    The frontend part is usual react that helps the users to create an account with Metamask Wallet.
                    The backend part is full of smart contracts(Solidity) and here Ethers.js is used to communicate with frontend."
                    link="https://github.com/Gurudeep25/fullstack-web3"
                    github="https://github.com/Gurudeep25/fullstack-web3"
                    type="Featured Project" />
                </div>

                <div className='col-span-12'>
                    <FeaturedProject 
                    title="My Portfolio"
                    img={Port}
                    summary="This is my personal portfolio which was built using Next JS, Tailwind CSS & Framer Motion, etc.
                    The portfolio consists of home page followed by about, skills and projects pages respectively.
                    Every single page is attached with animated presence and dark mode capabilities along with brief explanations."
                    link="https://github.com/Gurudeep25/next-portfolio"
                    github="https://github.com/Gurudeep25/next-portfolio"
                    type="Featured Project" />
                </div>
            </div>
        </Layout>
    </main>
    </>
  )
}

export default projects
