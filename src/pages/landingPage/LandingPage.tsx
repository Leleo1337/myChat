import { useEffect, useState } from "react";
import FeaturesSection from "../../components/landingPage/FeaturesSection";
import Footer from "../../components/landingPage/Footer";
import Header from "../../components/landingPage/Header";
import HeroSection from "../../components/landingPage/HeroSection";
import SecuritySection from "../../components/landingPage/SecuritySection";
import { getTheme, setTheme } from "../../utils/toggleTheme";

export default function LandingPage() {
    const [currentTheme, setCurrentTheme] = useState(getTheme());

    useEffect(() => {
        if (currentTheme) setTheme(currentTheme);
    }, [currentTheme]);

    useEffect(() => {
        const initialTheme = getTheme() || "light";
        setCurrentTheme(initialTheme);
    }, []);

    return (
        <>
            <Header setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
            <HeroSection currentTheme={currentTheme} />
            <FeaturesSection />
            <SecuritySection />
            <Footer />
        </>
    );
}
