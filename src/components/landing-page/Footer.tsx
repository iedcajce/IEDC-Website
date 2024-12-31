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
            <h3 className='text-center md:text-left text-xl md:text-3xl font-normal'>Discover what's next. <br className='hidden md:block' /> Subscribe today.</h3>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder='Enter your email'
                className='w-full md:max-w-[432px] border-0 border-b p-0 py-4 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none text-sm'
                key="email-input"
                suppressHydrationWarning={true}
              />
              <div className="flex items-center space-x-2 pb-5">
                <Checkbox id="terms" className='border-gray-400 [data-state="checked"]:bg-blue-600' />
                <Label
                  htmlFor="terms"
                  className="text-[10px] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Yes, I have read and understood the <Link href="/" className='text-blue-600 '>privacy policy</Link> and hereby consent to receive e-mails
                </Label>
              </div>
              <Button variant="outline" className='w-full md:max-w-[432px] rounded-3xl py-6 border-white bg-transparent text-white hover:bg-blue-600 hover:border-blue-600 hover:text-white'>Subscribe to our newsletter</Button>
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
          className='md:border-t pt-4 md:pt-8 flex-col-reverse gap-16 md:gap-0 md:flex-row flex items-start'
        >
          <div className="w-full md:w-1/2">
            <Image src="/images/BOI-logo.png" alt="logo" width={500} height={300} className='text-sm w-full md:w-auto md:max-w-[432px] max-h-[140px]' />
          </div>
          <div className="md:w-1/2 md:pl-6 space-y-8">
            <h3 className='text-3xl text-center md:text-left '>The AI Innovation Consultancy</h3>
            <div className="space-y-2">
              <p className="block md:hidden">Privacy Statement  | Terms & Conditions | Creative Commons</p>
              <p className='text-[9px] text-left '>197 Grand Street, Ste 5W, New York, NY 10013</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPageFooter