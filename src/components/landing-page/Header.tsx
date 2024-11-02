"use client"

import Link from 'next/link'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { AlignJustify, Menu } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const LandingPageHeader = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      // Show header if:
      // 1. Scrolling up
      // 2. At the top of the page
      setIsVisible(
        (currentScrollPos < prevScrollPos) || // Scrolling up
        currentScrollPos < 10 // At top of page
      )

      setPrevScrollPos(currentScrollPos)
    }

    // Add throttling to prevent too many updates
    let timeoutId: NodeJS.Timeout
    const throttledHandleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(handleScroll, 100)
    }

    window.addEventListener('scroll', throttledHandleScroll)
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [prevScrollPos])

  const handleScrollToSection = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    // Only handle internal links that start with /#
    if (!href.startsWith('/#')) return
    
    const targetId = href.replace('/#', '')
    
    // Check if we're not on the home page
    if (window.location.pathname !== '/') {
      // Navigate to home page first
      window.location.href = `/${targetId ? '#' + targetId : ''}`
      return
    }
    
    // If we're already on home page, just scroll
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 bg-white/40 backdrop-blur-md w-full 
        transform transition-transform duration-1000 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className='max-w-screen-2xl mx-auto w-full px-6 h-full text-foreground flex justify-between items-center'>
        <div className=''>
          <h1 className='text-2xl font-sans font-semibold'>IEDC AJCE</h1>
        </div>
        <div className='flex justify-end gap-4 items-center'>
          <div className="hidden md:flex justify-between gap-6 text-sm text-gray-700 tracking-wide">
            <Link href={'/#home'} onClick={(e) => handleScrollToSection(e, '/#home')}>Home</Link>
            <Link
              href={'/#what-we-do'}
              onClick={(e) => handleScrollToSection(e, '/#what-we-do')}
            >
              What we do
            </Link>
            <Link href={'/our-execom'}>Execom Members</Link>
            <Link href={'/'}>Tune in</Link>
            <Link href={'/'}>Insights</Link>
            <Link href={'/'}>Tools</Link>
            <Link href={'/'}>Meet us</Link>
          </div>
          <div className="md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="default" className="h-12 w-12 text-xl">
                  <Menu className="h-8 w-8" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                side='bottom'
                align='center'
                sideOffset={0}
                className="w-screen h-[calc(100vh-4rem)] p-0 mt-4 border-none bg-transparent"
                onOpenAutoFocus={(e) => e.preventDefault()}
              >
                <div
                  className="fixed inset-0 bg-transparent"
                  onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Escape' }))}
                />
                <div className="relative">
                  <div className="mx-4 p-4 rounded-md shadow-2xl flex flex-col space-y-6 bg-white/70 backdrop-blur-md">
                    <Link
                      href={'/'}
                      className="text-lg font-medium hover:text-primary border-b"
                      onClick={(e) => {
                        document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Escape' }));
                        handleScrollToSection(e, '/')
                      }}
                    >
                      Home
                    </Link>
                    <Link
                      href={'/#what-we-do'}
                      className="text-lg font-medium hover:text-primary border-b"
                      onClick={(e) => {
                        document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Escape' }));
                        handleScrollToSection(e, '/#what-we-do')
                      }}
                    >
                      What we do
                    </Link>
                    <Link
                      href={'/our-execom'}
                      className="text-lg font-medium hover:text-primary border-b"
                      onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Escape' }))}
                    >
                      Execom Members
                    </Link>
                    <Link
                      href={'/'}
                      className="text-lg font-medium hover:text-primary border-b"
                      onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Escape' }))}
                    >
                      Tune in
                    </Link>
                    <Link
                      href={'/'}
                      className="text-lg font-medium hover:text-primary border-b"
                      onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Escape' }))}
                    >
                      Insights
                    </Link>
                    <Link
                      href={'/'}
                      className="text-lg font-medium hover:text-primary border-b"
                      onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Escape' }))}
                    >
                      Tools
                    </Link>
                    <Link
                      href={'/'}
                      className="text-lg font-medium hover:text-primary border-b"
                      onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Escape' }))}
                    >
                      Meet us
                    </Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <Button variant={'default'} className='hidden md:block bg-white text-black rounded-full shadow-lg text-xs font-light tracking-wider'>Get in touch</Button>
        </div>
      </div>
    </header>
  )
}

export default LandingPageHeader