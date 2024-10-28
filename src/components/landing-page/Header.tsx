import Link from 'next/link'
import { Button } from '../ui/button'

const LandingPageHeader = () => {
  return (
    <header className='sticky top-0 z-50 h-16 bg-white/40 backdrop-blur-md min-w-[100vw]'>
      <div className='max-w-screen-2xl mx-auto w-full px-6 h-full text-foreground flex justify-between items-center'>
        <div className=''>
          {/* <Image src={'/images/logo.png'} alt='Logo' width={100} height={100} className='h-10 w-auto' /> */}
          <h1 className='text-2xl font-sans font-semibold'>IEDC AJCE</h1>
        </div>
        <div className='flex justify-end gap-14 items-center'>
          <div className="hidden md:flex justify-between gap-6 text-xs text-gray-700 tracking-wide">
            <Link href={'/'}>Work</Link>
            <Link href={'/'}>Capabilities</Link>
            <Link href={'/'}>Autonoumous Innovation</Link>
            <Link href={'/'}>Tune in</Link>
            <Link href={'/'}>Insights</Link>
            <Link href={'/'}>Tools</Link>
            <Link href={'/'}>Meet us</Link>
          </div>
          <Button variant={'default'} className='bg-white text-black rounded-full shadow-lg text-xs font-light tracking-wider'>Get in touch</Button>
        </div>
      </div>
    </header>
  )
}

export default LandingPageHeader