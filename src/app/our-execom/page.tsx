"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";


const execomMembers = [
    {
        name: "John Doe",
        image: "/images/execom/execom-member-1.jpg",
        role: "CEO",
    },
    {
        name: "Jane Doe",
        image: "/images/execom/execom-member-2.jpg",
        role: "CTO",
    },
    {
        name: "John Doe",
        image: "/images/execom/execom-member-5.jpg",
        role: "CFO",
    },
    {
        name: "Jane Doe",
        image: "/images/execom/execom-member-3.jpg",
        role: "CMO",
    },
    {
        name: "John Doe",
        image: "/images/execom/execom-member-4.jpg",
        role: "CIO",
    },
    {
        name: "John Doe",
        image: "/images/execom/execom-member-6.jpg",
        role: "CFO",
    },
    {
        name: "Jane Doe",
        image: "/images/execom/execom-member-9.jpg",
        role: "CMO",
    },
    {
        name: "John Doe",
        image: "/images/execom/execom-member-8.jpg",
        role: "CIO",
    },
   
]

const OurExecom = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className='max-w-screen-2xl mx-auto w-full px-6 text-foreground pt-20 md:pt-24 space-y-8'
        >
            <div className="w-full max-w-3xl">
                <p className='text-lg font-medium tracking-wide text-blue-700 uppercase text-center md:text-left '>Speakers</p>
                <h3 className='mt-2 text-5xl font-normal leading-snug text-center md:text-left '>Speakers at <br /><span className='uppercase text-blue-700 font-medium'>Autonomous</span></h3>
                <p className='mt-4 text-base text-center md:text-left'>Across keynotes, masterclasses, demos, and panel discussions, learn from the industry pioneers, thought leaders and disruptors who are transforming their industries.</p>
                <p className='mt-4 text-base text-center md:text-left'>Learn how these leaders are leveraging AI to create new markets, disrupt existing ones, and drive exponential growth.</p>
                <p className='mt-4 text-base text-center md:text-left'>More speakers announces continuously.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-4 gap-5 pb-10'>
                {execomMembers.map((member, index) => (
                    <Card
                        className="overflow-hidden max-w-[280px] hover:scale-105 transition-all duration-300 mb-4 relative"
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <CardContent className="p-0">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={300}
                                height={400}
                                className="w-full h-full object-cover aspect-[3/4]"
                            />
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute bottom-0 left-0 flex flex-row px-6 justify-between items-center rounded-t-2xl right-0 p-2 md:p-4 backdrop-blur-md bg-gradient-to-b from-white/5 via-white/20 to-white/50 border-t outline-1"
                                    >
                                        <div className="space-y-0">
                                            <p className="text-white font-medium text-center ">{member.name}<br /></p>
                                            <p className='text-xs text-white'>{member.role}</p>
                                        </div>
                                        <Link href={`https://www.linkedin.com/`} target="_blank">
                                            <FaLinkedin className='text-white text-2xl' />
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default OurExecom