"use client"
import React, { useRef, useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const Insights = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const backgroundX = useTransform(mouseX, [-300, 300], ['45%', '55%'])
  const backgroundY = useTransform(mouseY, [-300, 300], ['45%', '55%'])

  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [api, setApi] = React.useState<CarouselApi>()

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    console.log('Mouse position:', {
      x: e.clientX - centerX,
      y: e.clientY - centerY
    })

    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div
      ref={ref}
      className='max-w-screen-2xl mx-auto w-full px-6 text-foreground pt-20 md:pt-24'
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className='text-sm font-medium font-sans tracking-wide text-blue-700 text-center'
      >
        Featured content
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center text-3xl md:text-6xl font-sans font-normal md:mt-2'
      >
        Insights for impact
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onMouseMove={handleMouseMove}
        style={{
          backgroundImage: 'url(/images/insights-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // backgroundPosition: `${backgroundX} ${backgroundY}`,
        }}
        className="flex flex-col md:flex-row gap-3 rounded-2xl mt-20 md:mt-24 text-white p-5 md:p-8 overflow-hidden"
      >
        <div className="w-full ">
          <p className='text-sm font-normal tracking-normal'>New guide</p>
          <h1 className='text-5xl font-normal mt-4 '>AI Strategy Guide</h1>
          <p className='text-sm font-normal tracking-normal mt-4'>Discover how you can use AI to transform your business and unlock new levels of growth, efficiency, and innovation.</p>
          <p className='text-sm font-normal tracking-normal mt-4'>60 pages of insights, tools and guides.</p>
          <Button variant={'outline'} className='text-sm mt-4 rounded-full bg-transparent py-5 border-primary-background text-primary-foreground hover:bg-primary-background hover:text-white'>Get your copy</Button>

        </div>
        <div className="w-full h-full flex justify-end py-4">
          <Image src={"/images/innovation-playbook.png"} alt='insights' width={600} height={400} />
        </div>
      </motion.div>

      {/* Cards Section */}
      <div className="mt-12">
        {/* Desktop View (3 cards in a row) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <Link href="/" className="block h-[250px] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/images/insights-card-1.png"
                    alt='insights'
                    width={400}
                    height={200}
                    className='rounded-2xl w-full h-full object-cover'
                  />
                </div>
              </Link>
              <h3 className="text-2xl font-normal mt-2">Setting your (im)possible strategy for AI-powered growth</h3>
              <Link href={'/'} className='text-xs mt-2 font-sans font-normal text-blue-600 tracking-wide mb-3 flex gap-1 items-center'>
                <ChevronRight className='w-2 h-2 mt-1 font-bold' />Read more
              </Link>
            </CardContent>
          </Card>

          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <Link href="/" className="block h-[250px] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/images/insights-card-2.png"
                    alt='insights'
                    width={400}
                    height={200}
                    className='rounded-2xl w-full h-full object-cover'
                  />
                </div>
              </Link>
              <h3 className="text-2xl font-normal mt-2">Transforming to an AI-first operating model</h3>
              <Link href={'/'} className='text-xs mt-2 font-sans font-normal text-blue-600 tracking-wide mb-3 flex gap-1 items-center'>
                <ChevronRight className='w-2 h-2 mt-1 font-bold' />Read more
              </Link>
            </CardContent>
          </Card>

          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <Link href="/" className="block h-[250px] w-full overflow-hidden rounded-2xl">
                <div className="h-full w-full transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/images/insights-card-3.png"
                    alt='insights'
                    width={400}
                    height={200}
                    className='rounded-2xl w-full h-full object-cover'
                  />
                </div>
              </Link>
              <h3 className="text-2xl font-normal mt-2">Building new AI-powered engines for innovation</h3>
              <Link href={'/'} className='text-xs mt-2 font-sans font-normal text-blue-600 tracking-wide mb-3 flex gap-1 items-center'>
                <ChevronRight className='w-2 h-2 mt-1 font-bold' />Read more
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Mobile View (Carousel) */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <Link href="/" className="block h-[250px] w-full overflow-hidden rounded-2xl">
                      <div className="h-full w-full transition-transform duration-300 hover:scale-105">
                        <Image
                          src="/images/insights-card-1.png"
                          alt='insights'
                          width={400}
                          height={200}
                          className='rounded-2xl w-full h-full object-cover'
                        />
                      </div>
                    </Link>
                    <h3 className="text-2xl font-normal mt-2">Setting your (im)possible strategy for AI-powered growth</h3>
                    <Link href={'/'} className='text-xs mt-2 font-sans font-normal text-blue-600 tracking-wide mb-3 flex gap-1 items-center'>
                      <ChevronRight className='w-2 h-2 mt-1 font-bold' />Read more
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <Link href="/" className="block h-[250px] w-full overflow-hidden rounded-2xl">
                      <div className="h-full w-full transition-transform duration-300 hover:scale-105">
                        <Image
                          src="/images/insights-card-2.png"
                          alt='insights'
                          width={400}
                          height={200}
                          className='rounded-2xl w-full h-full object-cover'
                        />
                      </div>
                    </Link>
                    <h3 className="text-2xl font-normal mt-2">Transforming to an AI-first operating model</h3>
                    <Link href={'/'} className='text-xs mt-2 font-sans font-normal text-blue-600 tracking-wide mb-3 flex gap-1 items-center'>
                      <ChevronRight className='w-2 h-2 mt-1 font-bold' />Read more
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <Link href="/" className="block h-[250px] w-full overflow-hidden rounded-2xl">
                      <div className="h-full w-full transition-transform duration-300 hover:scale-105">
                        <Image
                          src="/images/insights-card-3.png"
                          alt='insights'
                          width={400}
                          height={200}
                          className='rounded-2xl w-full h-full object-cover'
                        />
                      </div>
                    </Link>
                    <h3 className="text-2xl font-normal mt-2">Building new AI-powered engines for innovation</h3>
                    <Link href={'/'} className='text-xs mt-2 font-sans font-normal text-blue-600 tracking-wide mb-3 flex gap-1 items-center'>
                      <ChevronRight className='w-2 h-2 mt-1 font-bold' />Read more
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <div className="flex items-center justify-center gap-2 mt-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <button
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${index === current - 1  ? 'bg-blue-700' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="my-12 md:my-20 w-full flex justify-center">
        <Button variant={'outline'} className='p-5 md:p-6 mb-8 md:mb-0 rounded-3xl text-base border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'>Check out more work</Button>
      </div>
    </div>
  )
}

export default Insights