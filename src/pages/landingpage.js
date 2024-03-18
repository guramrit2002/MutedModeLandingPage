// LandingPage.js
import React, { useRef, useState } from "react";
import Banner from '../components/Banner';
import UnmuteBanner from '../components/UnmuteBanner';
import BestSeller from '../components/BestSeller';
import SalesBanner from '../components/SalesBanner';
import FeatureSection from '../components/FeatureSection';
import Contact from '../components/Contact';
import Footer from '../components/footer';

function LandingPage() {
    const unmuteBannerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => setIsHovered(!isHovered);

    const handleButtonClick = () => {
        unmuteBannerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="scroll-container">
            <Banner handleHover={handleHover} isHovered={isHovered} handleButtonClick={()=>{handleButtonClick();}} />
            <div ref={unmuteBannerRef}>
                <UnmuteBanner />
            </div>
            <BestSeller />
            <SalesBanner />
            <FeatureSection />
            <Contact />
            <Footer />
        </div>
    );
}

export default LandingPage;