import FeaturesSection from "../../components/landingPage/FeaturesSection";
import Footer from "../../components/landingPage/Footer";
import LandingPageHeader from "../../components/landingPage/Header";
import HeroSection from "../../components/landingPage/HeroSection";
import SecuritySection from "../../components/landingPage/SecuritySection";

export default function LandingPage() {
    return (
        <>
            <LandingPageHeader />
            <HeroSection />
            <FeaturesSection />
            <SecuritySection />
            <Footer />
        </>
    );
}
