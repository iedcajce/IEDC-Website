'use client'

import React from 'react'
import { LogoScroll } from '../ui/logoscroll'
import Image from 'next/image'
import { MagicCard } from '../ui/magic-card'
import { motion } from 'framer-motion'

const cardData = [
  {
    id: 1,
    image: '/images/icons/Mentoring.svg',
    title: 'MENTORING',
    description: 'Experience transformative mentorship at IEDC, where experts help shape your ideas into real-world solutions.',
    width: 120,
    height: 100,
  },
  {
    id: 2,
    image: '/images/icons/INNOVATION.svg',
    title: 'INNOVATION',
    description: 'At IEDC, innovation turns bold ideas into groundbreaking realities with full support and creativity.',
    width: 120,
    height: 100,
  },
  {
    id: 3,
    image: '/images/icons/NETWORKING.svg',
    title: 'NETWORKING',
    description: "Networking is a dynamic ecosystem where visionary minds collide and shape entrepreneurship's future.",
    width: 120,
    height: 100,
  },
  {
    id: 4,
    image: '/images/icons/INCUBATION.svg',
    title: 'INCUBATION',
    description: 'IEDC offers an incubation environment to turn dreams into reality with resources and mentorship.',
    width: 120,
    height: 100,
  },
];

const AboutUs = () => {
  return (
    <>
      <LogoScroll />
      <div className='flex flex-col p-6 max-w-screen-2xl mx-auto justify-center items-center w-full min-h-[300px] gap-20 py-44'>
        <div className='flex flex-col sm:items-center md:items-center items-center justify-center sm:w-[100%] gap-6'>
          <h4 className='text-center font-extrabold text-3xl md:text-4xl'>
            <motion.span whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              WHY IEDC
            </motion.span>
          </h4>
          <p className='text-justify md:text-center text-md font-normal md:w-2/5'>
            <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              Choose IEDC to unlock your potential with expert mentorship, resources, and a vibrant community your launchpad for entrepreneurial dreams.
            </motion.span>
          </p>
        </div>

        <div className='w-full px-4 md:px-0'>
          <div className='flex overflow-x-auto scrollbar-hide md:overflow-visible md:flex-wrap md:justify-center gap-4 pb-4 -mx-4 md:mx-0'>
            {cardData.map((card) => (
              <motion.div
                key={card.id}
                className='min-w-[calc(100vw-2rem)] md:min-w-0 flex-shrink-0 px-4 md:px-0 md:w-full md:max-w-[350px]'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <MagicCard className=' h-[350px] w-[350px] flex flex-col items-center justify-center px-8 py-10 sm:py-20'>
                  <div className='flex flex-col items-center justify-center gap-4'>
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={card.width}
                      height={card.height}
                      className='mb-4'
                    />
                    <motion.h3
                      className='font-bold text-xl mb-2 text-center'
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      className='text-md font-normal text-center'
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs