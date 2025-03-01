import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const OurWorks = () => {
  return (

<div className="container mx-auto px-4 py-12">
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left Content */}
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-600">About Us</p>
          <h2 className="text-3xl font-bold mt-2">
            We collaborate with leaders to{' '}
            <span className="text-blue-600">revolutionize.</span>
          </h2>
        </div>
        
        <p className="text-gray-600 leading-relaxed">
          At Research Valley, we are the architects of tomorrow, shaping dreams into 
          reality. Established in 2006 and recognized by the Government of India's 
          Department of Science and Technology and Department of Biotechnology, we 
          are more than just a hub, we are a crucible where visionaries, innovators, and 
          change-makers converge. Our mission is to redefine paradigms, guiding the next 
          generation from ideation to tangible outcomes, from lab benches to brilliance, 
          through groundbreaking technologies. With Kerala Tech Hub, NIDHI-PRAYAS and a 
          transformative incubation initiative, we cultivate an ecosystem where brilliance 
          flourishes, envisioning an entrepreneurial landscape that turns ideas into 
          legacies one startup at a time.
        </p>
        
        <button className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
          Explore <span className="ml-2">→</span>
        </button>
      </div>

      {/* Right Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-square bg-gray-200 rounded-lg"></div>
        <div className="aspect-square bg-gray-200 rounded-lg"></div>
        <div className="aspect-square bg-gray-200 rounded-lg"></div>
        <div className="aspect-square bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  </div>

    // <div id='what-we-do' className='max-w-screen-2xl mx-auto py-10 text-foreground grid grid-cols-1 md:grid-cols-3 gap-4 px-6'>
    //   <div className='col-span-1'>
    //     <p className='text-base font-sans	font-medium text-blue-700 tracking-wide'>What we do</p>
    //     <p className='text-3xl md:text-5xl font-sans font-normal text-foreground mb-8'>Our Work</p>
    //     <Button variant={'outline'} className='p-5 md:p-6 mb-8 md:mb-0 rounded-3xl text-base border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'>Check out more work</Button>
    //   </div>
    //   <div className="col-span-2 space-y-4 md:space-y-12">
    //     <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
    //       <div className='md:col-span-2 rounded-3xl'>
    //         <Image src={'/images/stock-image1.png'} alt='Our Work' width={1000} height={300} className='w-full rounded-3xl max-h-[300px] mb-4 object-cover' />
    //         <Link href={'/'} className='text-sm font-sans font-bold text-gray-700 tracking-wide mb-3 flex gap-2 items-center'>
    //           AI-native Retail <ChevronRight className='w-2 h-2' />
    //         </Link>
    //         <p className='font-sans font-normal text-gray-600 tracking-wide mb-3 flex gap-2 items-center'>
    //           Building the world&apos;s first AI-native fashion and retail model
    //         </p>
    //       </div>
    //       <div className='md:col-span-1 rounded-3xl w-full'>
    //         <Image src={'/images/stock-image2.png'} alt='Our Work' width={1000} height={300} className='w-full rounded-3xl max-h-[300px] mb-4 object-cover' />
    //         <Link href={'/'} className='text-sm font-sans font-bold text-gray-700 tracking-wide mb-3 flex gap-2 items-center'>
    //           AI-native Innovation <ChevronRight className='w-2 h-2' />
    //         </Link>
    //         <p className='font-sans font-normal text-gray-600 tracking-wide mb-3 flex gap-2 items-center'>
    //           Pioneering the world&apos;s first AI-native CPG innovation engine <ChevronRight className='w-2 h-2' />
    //         </p>
    //       </div>
    //     </div>
    //     <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
    //       <div className='md:col-span-1 rounded-3xl'>
    //         <Image src={'/images/stock-image4.png'} alt='Our Work' width={1000} height={300} className='w-full rounded-3xl max-h-[300px] mb-4 object-cover' />
    //         <Link href={'/'} className='text-sm font-sans font-bold text-gray-700 tracking-wide mb-3 flex gap-2 items-center'>
    //           ING <ChevronRight className='w-2 h-2' />
    //         </Link>
    //         <p className='font-sans font-normal text-gray-600 tracking-wide mb-3 flex gap-2 items-center'>
    //           Building the world&apos;s largest multi-bank trade finance platform <ChevronRight className='w-2 h-2' />
    //         </p>
    //       </div>
    //       <div className='md:col-span-2 rounded-3xl'>
    //         <Image src={'/images/stock-image3.png'} alt='Our Work' width={1000} height={300} className='w-full rounded-3xl max-h-[300px] mb-4 object-cover' />
    //         <Link href={'/'} className='text-sm font-sans font-bold text-gray-700 tracking-wide mb-3 flex gap-2 items-center'>
    //           Loop <ChevronRight className='w-2 h-2' />
    //         </Link>
    //         <p className='font-sans font-normal text-gray-600 tracking-wide mb-3 flex gap-2 items-center'>
    //           Building the future portfolio for a quieter world <ChevronRight className='w-2 h-2' />
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>




  )
}

export default OurWorks