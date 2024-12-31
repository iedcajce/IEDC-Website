"use client";
import React from 'react'
import { Button } from '../ui/button'
import Typewriter from 'typewriter-effect';

const Blog = () => {
  return (
    <div className="flex flex-col gap-[30px] p-6 max-w-screen-2xl mx-auto justify-center items-center w-full min-h-[600px]">
      <div className="flex flex-col text-wrap items-center sm:items-center md:items-start justify-center w-full">
        <h4 className="text-blue-600 text-sm mb-2 font-normal">Drop us a note</h4>
        <h1 className="md:text-[57px] text-2xl flex leading-snug font-normal">Are you ready to &nbsp; <span className="text-blue-600">
          <Typewriter
            options={{
              strings: ['Grow in', 'innovative in', 'visionary'],
              autoStart: true,
              loop: true,
            }}
          />
        </span></h1>

        <h1 className="md:text-[57px] text-2xl font-normal leading-snug">the autonomous age?</h1>
      </div>

      <div className="flex justify-center sm:justify-start w-full mt-4">
      <Button variant={'outline'} className='p-5 md:p-6 mb-8 md:mb-0 rounded-3xl text-base border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'>Reach out to us</Button>
      </div>
    </div>
  );
}

export default Blog;
