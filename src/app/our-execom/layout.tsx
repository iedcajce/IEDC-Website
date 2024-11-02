import LandingPageFooter from '@/components/landing-page/Footer';
import LandingPageHeader from '@/components/landing-page/Header';
import React from 'react'

interface OurExecomLayoutProps {
    children: React.ReactNode;
}

const OurExecomLayout = ({
    children,
}: OurExecomLayoutProps) => {
    return (
        <div className="min-h-screen bg-background relative w-full overflow-x-hidden">
            <LandingPageHeader />
            {children}
            <LandingPageFooter />
        </div>
    )
}

export default OurExecomLayout
