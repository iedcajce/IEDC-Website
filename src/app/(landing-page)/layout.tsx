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
        <div className="flex min-h-screen flex-col bg-background relative">
            <LandingPageHeader />
            {children}
            <LandingPageFooter />
        </div>
    )
}

export default LandingPageLayout