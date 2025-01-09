import React from 'react'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'

const LandingPageFooter = () => {
  return (
    <div className='bg-[#11262B] py-10'>
      <div
        className='max-w-screen-2xl mx-auto w-full px-6 text-white space-y-10'
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8 md:space-y-16">
            <Image src="/images/Iedc-logo.png" alt="logo" width={400} height={300} className='text-sm w-full md:w-auto md:max-w-[350px] max-h-[140px]' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              Startups Valley Amal Jyothi TBI
              Amal Jyothi College of Engineering Kanjirappally,
              Koovappally P. O.
              Kottayam District, Kerala
              Pin Code - 686518
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4 flex flex-col text-xs text-center md:text-left">
              <h3 className='font-semibold text-2xl mb-4 md:mb-6'>Explore</h3>
              <Link href="/">Work</Link>
              <Link href="/">About</Link>
              <Link href="/">Join us</Link>
              <Link href="/">Insights</Link>
            </div>
            <div className="space-y-4 flex flex-col text-xs text-center md:text-left">
              <h3 className='font-semibold text-2xl mb-4 md:mb-6'>About Us</h3>
              <Link href="/">Join us</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Privacy Policy</Link>
            </div>
            <div className="space-y-4 flex flex-col text-xs text-center md:text-left">
              <h3 className='font-semibold text-2xl mb-4 md:mb-6'>Social</h3>
              <Link href="/">LinkedIn</Link>
              <Link href="/">Instagram</Link>
              <Input type="text" placeholder='Search for content' className='p-2 h-7 text-sm w-full md:max-w-44' />

            </div>
          </div>
        </div>


        {/* Bottom Section */}
        <div
          className='md:border-t pt-4 md:pt-8 flex justify-center w-full'
        >
          <div className="text-center w-full px-4">
            <p className="text-xs sm:text-sm md:text-md break-words">
              Copyright © {new Date().getFullYear()}
              <a className='text-blue-600 underline hover:text-blue-400 transition-colors' 
                 href="https://www.startupsvalley.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
              > Startups Valley Amal Jyothi TBI </a> 
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPageFooter