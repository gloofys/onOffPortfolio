import React from "react";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import './App.css'
import Header from "./sections/Header.jsx";
import WhatIBring from "./sections/WhatIBring.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import DeveloperPlans from "./sections/DeveloperPlans.jsx";
import PersonalNoteSection from "./sections/PersonalNoteSection.jsx";
import VideoSection from "./sections/VideoSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import DividerLine from "./sections/DividerLine.jsx";

const App = () => {
    return (
        <div className="font-sans text-gray-800">
            <Header />
            <Hero />
            <VideoSection />
            <ShowcaseSection/>
            <DeveloperPlans/>
            <PersonalNoteSection/>
            <ContactSection/>
            <DividerLine/>
            <Footer />
        </div>
    );
};

export default App;
