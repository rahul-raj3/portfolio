'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Marquee from "react-fast-marquee";


const Hero = () => {




    return(
        <>
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
  <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
    <div className="lg:col-span-3">
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
        {/* Build Better Products */}
        {`Unlock Your Potential, One Skill `}

    <TypeAnimation
      sequence={[
        // ' ',
        // 1000,
        'at',
        1000,
        'at a',
        1000,
        'at a Time',
        1000
      ]}
      wrapper="span"
      speed={20}
      style={{ display: 'inline-block' }}
      className='text-yellow-500'
      repeat={Infinity}
    />
      </h1>
      <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
        Join thousands learning in-demand skills to build brighter futures.
        </p>

      {/* <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <div className="w-full sm:w-auto">
          <label htmlFor="hero-input" className="sr-only">Search</label>
          <input type="text" id="hero-input" name="hero-input" 
          className="py-2.5 sm:py-3 px-4 block w-full min-w-80 border-gray-200 rounded-md sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" 
          placeholder="Enter work email" />
        </div>
        <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
          Request demo
        </a>
      </div> */}

<div className="mt-6 lg:mt-12">
  <span className="text-xs font-bold text-gray-800 uppercase dark:text-neutral-200 tracking-wider">
    Skills:
  </span>

  <div className="mt-4 flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
    <Marquee
    pauseOnHover={true}
    gradient={false}
    >
          {/* <Image src="/icons/atom.png" alt="Image 1" width={80} height={80} className="mx-4" />
          <Image src="/icons/atom.png" alt="Image 1" width={80} height={80} className="mx-4" />
          <Image src="/icons/atom.png" alt="Image 1" width={80} height={80} className="mx-4" />
                    <Image src="/icons/atom.png" alt="Image 1" width={80} height={80} className="mx-4" />

          <Image src="/icons/atom.png" alt="Image 1" width={80} height={80} className="mx-4" />
          <Image src="/icons/atom.png" alt="Image 1" width={80} height={80} className="mx-4" />
          <Image src="/icons/atom.png" alt="Image 1" width={80} height={80} className="mx-4" />
          <Image src="/icons/atom.png" alt="Image 1" width={80} height={80} className="mx-4" /> */}

    <Image 
      src="/icons/atom.png"
      alt="atom"
      width={32}
      height={32}
      className="w-8 h-8 lg:w-16 lg:h-16 mx-4"
    />
    <Image 
      src="/icons/js.png"
      alt="database"
      width={32}
      height={32}
      className="w-8 h-8 lg:w-16 lg:h-16 mx-4"
    />
    <Image 
      src="/icons/database-storage.png"
      alt="nodejs"
      className="w-8 h-8 lg:w-16 lg:h-16 mx-4"
            width={32}
height={32}

    />
    <Image 
      src="/icons/nodejs.png"
      alt="javascript"
      className="w-8 h-8 lg:w-16 lg:h-16 mx-4"
            width={32}
height={32}
    />
    <Image 
      src="/icons/atom.png"
      alt="atom"
      width={32}
      height={32}
      className="w-8 h-8 lg:w-16 lg:h-16 mx-4"
    />

    </Marquee>
  </div>
</div>

    </div>

<div className="lg:col-span-4 mt-10 lg:mt-0">
  <Image 
    className="w-full h-auto rounded-xl" 
    src="/hero/hero1.png"
    width={800}
    height={400}
    alt="Hero Image" 
  />
</div>

  </div>
</div>
        </>
    )
}

export default Hero;