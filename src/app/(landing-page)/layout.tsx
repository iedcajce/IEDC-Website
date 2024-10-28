import LandingPageFooter from '@/components/landing-page/Footer';
import LandingPageHeader from '@/components/landing-page/Header';
import React from 'react'

interface LandingPageLayoutProps {
    children: React.ReactNode;
}

const LandingPageLayout = ({
    children,
}: LandingPageLayoutProps) => {
    return (
        <div className="min-h-screen bg-background relative w-full overflow-x-hidden">
            <LandingPageHeader />
            {children}
            <LandingPageFooter />
        </div>
    )
}

export default LandingPageLayout
