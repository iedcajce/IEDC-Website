"use client"
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <main className="relative min-h-[calc(100vh-64px)] h-full mt-[64px]">
      <div className="max-w-screen-2xl px-6 w-full mx-auto h-full">
        <div className="flex flex-col-reverse lg:flex-row h-full">
          {/* Left Section */}
          <div className="w-full h-full lg:h-[calc(100vh-150px)] lg:w-1/2 flex items-center">
            <div className=''>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-4xl lg:text-7xl font-normal mb-10 z-20'
              >
                Build your <br /> autonomous <br className='hidden lg:block' /> future. <span className='text-blue-600'>Today.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-sm lg:text-base text-muted-foreground mb-6'
              >
                We are BOI. The AI Innovation Consultancy.<br />
                <span className='font-semibold'>Reinventing how businesses grow.</span>
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-row gap-6"
              >
                <Button variant={'outline'} className='text-xs lg:text-base lg:py-5 rounded-full border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'>Our Work</Button>
                <Button variant={'ghost'} className='text-xs lg:text-base lg:py-5 text-muted-foreground rounded-full'>About BOI<ChevronRight className='w-4 h-4' /></Button>
              </motion.div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full min-h-72 lg:h-full lg:w-1/2">
            <Image
              src="/images/background.png"
              alt="Placeholder image"
              width={1500}
              height={1500}
              className="w-[400px] lg:w-[600px] h-auto absolute -top-48 -right-28 lg:-top-32 lg:-right-32 z-0"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeroSection
