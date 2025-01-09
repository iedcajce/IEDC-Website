import React from 'react'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Linkedin, Instagram, Youtube, Twitter } from 'lucide-react'

const LandingPageFooter = () => {
  return (
    <div className='bg-[#11262B] py-10'>
      <div
        className='max-w-screen-2xl mx-auto w-full px-6 text-white space-y-10'
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8 md:space-y-16">
            <Image src="/images/Iedc-logo.png" alt="logo" width={400} height={300} className='text-sm w-full md:w-auto max-w-[230px] md:max-w-[350px] max-h-[140px]' />
            <div className="md:w-[400px] space-y-1.5 md:ml-8">
              <p>Startups Valley Amal Jyothi TBI</p>
              <p>Amal Jyothi College of Engineering Kanjirappally</p>
              <p>Koovappally P. O.</p>
              <p>Kottayam District, Kerala</p>
              <p>Pin Code - 686518</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:items-center">
            {/* Left Column */}
            <div className="space-y-4 flex flex-col text-md text-start md:text-left">
              <h3 className='font-semibold text-2xl mb-4 md:mb-6'>Explore</h3>
              <Link href="/">Home</Link>
              <Link href="/">About us</Link>
              <Link href="/">Execom</Link>
              <Link href="/">Our Legacy / Accolades</Link>
            </div>

            {/* Right Column */}
            <div className="space-y-4 flex flex-col text-md text-start md:text-left md:mt-[72px] mt-0">
              <Link href="/">Reports</Link>
              <Link href="/">Facitlies</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Events</Link>
            </div>
            {/*End Column*/}
            <div className="space-y-4 flex flex-col text-md text-start md:text-left">
              <h3 className='font-semibold text-2xl mb-4 md:mb-6'>Follow Us</h3>
              <Link href="/" className="flex items-center justify-start gap-4 hover:text-gray-300 transition-colors">
                <Image
                  src="/images/icons/linkedin.svg"
                  alt="Icon name"
                  width={20}
                  height={20}
                  className="text-current"
                />  LinkedIn
              </Link>
              <Link href="/" className="flex items-center justify-start gap-4 hover:text-gray-300 transition-colors">
              <Image
                  src="/images/icons/instagram.svg"
                  alt="Icon name"
                  width={20}
                  height={20}
                  className="text-current"
                />  Instagram
              </Link>
              <Link href="/" className="flex items-center justify-start gap-4 hover:text-gray-300 transition-colors">
              <Image
                  src="/images/icons/youtube.svg"
                  alt="Icon name"
                  width={20}
                  height={20}
                  className="text-current"
                />  YouTube
              </Link>
              <Link href="/" className="flex items-center justify-start gap-4 hover:text-gray-300 transition-colors">
              <Image
                  src="/images/icons/twitter.svg"
                  alt="Icon name"
                  width={20}
                  height={20}
                  className="text-current"
                />  Twitter
              </Link>
            </div>
          </div>
        </div>


        {/* Bottom Section */}
        <div
          className='border-t pt-4 md:pt-8 flex justify-center w-full'
        >
          <div className="text-center w-full px-4">
            <p className="text-xs sm:text-sm md:text-md break-words">
              Copyright © {new Date().getFullYear()}
              <a className='text-blue-600 underline hover:text-blue-400 transition-colors'
                href="https://www.startupsvalley.com"
                target="_blank"
                rel="noopener noreferrer"
              > MakerHub IEDC  </a>
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPageFooter