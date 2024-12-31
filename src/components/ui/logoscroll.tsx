"use client";
import { cn } from "@/lib/utils";
import Marquee from "./marquee";
import Image from 'next/image';

const logos = [
    { id: 1, img: "/images/logos/amazon.png", alt: "Amazon Logo" },
    { id: 2, img: "/images/logos/colgate.png", alt: "Colgate Logo" },
    { id: 3, img: "/images/logos/google.png", alt: "Google Logo" },
    { id: 4, img: "/images/logos/pepsico.png", alt: "Pepsico Logo" },
    { id: 5, img: "/images/logos/philips.png", alt: "Philips Logo" },
    { id: 6, img: "/images/logos/starbucks.png", alt: "Starbucks Logo" },
    { id: 7, img: "/images/logos/walmart.png", alt: "Walmart Logo" },
];

const LogoCard = ({ img, alt }: { img: string; alt: string }) => {
    return (
        <div className={cn("flex-shrink-0 w-48 h-24 mx-8")}>
            <div className="h-full w-full relative flex items-center justify-center">
                <Image
                    src={img}
                    alt={alt}
                    width={250}
                    height={150}
                    className="object-contain h-12 max-h-12 w-auto"
                    style={{ filter: 'grayscale(100%)' }}
                />
            </div>
        </div>
    );
};

export function LogoScroll() {
    return (
        <div className="relative flex h-40 w-full items-center justify-center overflow-hidden bg-background">
            <Marquee pauseOnHover className="[--duration:40s]">
                {logos.map((logo) => (
                    <LogoCard key={logo.id} {...logo} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background" />
        </div>
    );
}
