import React from 'react'
import { Button } from '../ui/button'
import NumberTicker from "@/components/ui/number-ticker";
const CountDownBanner = () => {
  return (
    <>

      <div className="flex flex-col  md:flex-row w-full items-center justify-center lg:justify-around flex-wrap bg-[url('https://www.boardofinnovation.com/wp-content/uploads/2024/06/Banner-3D-background.webp')] bg-no-repeat bg-cover h-[600px] pl-4 pr-4">
        <div className='flex  flex-col text-center md:text-start items-center md:items-start  justify-center sm:justify-start gap-4 lg:w-[30%]'>
          <h1 className='text-white leading-snug '>Measuring our impact</h1>
          <h1 className=' lg:text-[57px] leading-snug font-sans font-normal text-white mb-8'>Pioneering autonomous innovation</h1>
          <Button variant={'outline'} className='text-xs md:text-base md:py-5 rounded-full border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white w-[40%]'>Our Work</Button>
        </div>



        <div className='flex flex-col gap-10 item-center justify-center h-[300px]   '>
          <div className='flex gap-20'>

          <div className='text-center text-white'>
              <p className=" lg:text-[110px] text-[50px]   font-medium tracking-tighter text-white ">
                <NumberTicker className='text-white' value={100} />+
              </p>
              <p className='text-[11px]'>Products invented and built</p>
            </div>
            <div className='text-center text-white'>
              <p className=" lg:text-[110px] text-[50px]   font-medium tracking-tighter text-white ">
                <NumberTicker className='text-white' value={100} />+
              </p>
              <p className='text-[11px]'>Products invented and built</p>
            </div>

          </div>
          <div className='flex gap-20 '>

            <div className='text-center text-white'>
              <p className=" lg:text-[110px] text-[50px]   font-medium tracking-tighter text-white ">
                <NumberTicker className='text-white' value={100} />+
              </p>
              <p className='text-[11px]'>Products invented and built</p>
            </div>
            <div className='text-center text-white'>
              <p className=" lg:text-[110px] text-[50px]   font-medium tracking-tighter text-white ">
                <NumberTicker className='text-white' value={100} />+
              </p>
              <p className='text-[11px]'>Products invented and built</p>
            </div>

          </div>



        </div>
      </div>

    </>
  )
}

export default CountDownBanner