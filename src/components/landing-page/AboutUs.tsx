

"use client";

import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { LogoScroll } from '../ui/logoscroll';
const AboutUs = () => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed); // Toggle collapse state
  };

  return (
    <>
      <LogoScroll />
      <div className="flex flex-col p-6 max-w-screen-2xl mx-auto  justify-center items-center w-full min-h-[300px] ">
        <div className="flex flex-col text-wrap sm:items-center md:items-start items-center justify-center md:pl-[200px] sm:w-[100%] ">
          <h4 className="text-blue-600 sm:text-sm mb-2 font-normal">What we do</h4>
          <h1 className="md:text-[57px] text-2xl leading-snug font-normal">We partner with</h1>
          <h1 className="md:text-[57px] text-2xl	 leading-snug flex ">
            bold leaders to&nbsp;
            <span className="text-blue-600">
              <Typewriter
                options={{
                  strings: ['bold', 'innovative ', 'visionary'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </ span>
            <br />
          </h1>
          <h1 className="md:text-[57px] text-2xl font-normal leading-snug">the autonomous age.</h1>
        </div>

        <div className="flex sm:items-end  sm:justify-end justify-center	w-[100%]" >
          <a onClick={handleClick} href="#more" className="text-blue-600 mt-4 no-underline hover:text-blue-800">
            Read more   {isCollapsed ? <span>&#x25BC; </span> : <span>&#x25B2; </span>}
          </a>
        </div>

        {!isCollapsed && (<>
          <div className={`flex flex-col sm:flex-row items-center space-x-4 overflow-hidden ${isCollapsed ? ' h-0 opacity-0' : 'h-auto opacity-100 '} `}>
            {/* Video Div */}
            <div className="relative w-full sm:w-[600px] h-80 rounded-lg shadow-lg object-cover mb-6 mt-4">
              <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              >
                <source src="https://videos.pexels.com/video-files/3205627/3205627-hd_1920_1080_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Text Div */}
            <div className="flex items-start justify-center sm:p-20 font-normal sm:w-[60%]  bg-opacity-50">
              <h3 className="text-lg font-normal text-gray-700">
                By living and working with intelligent technologies, businesses and the humans that drive them will operate at a level far beyond our previous potential. We call this the autonomous age.
                <br /><br />
                This will create a paradigm shift for humanity, positively impacting everything from drug discovery to disease management. From the crops we grow, the products we use, to the way we live our lives.
                <br /><br />
                To seize the opportunity, we must boldly reinvent our businesses – how we innovate, grow, and lead. Today.
              </h3>
            </div>
          </div>

        </>
        )}




      </div>
    </>

  );
};

export default AboutUs;



