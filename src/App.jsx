import React from "react";
import Hero from "./sections/Hero";
import WhyOnoff from "./sections/WhyOnoff";
import Footer from "./sections/Footer";
import './App.css'
import Header from "./sections/Header.jsx";
import WhatIBring from "./sections/WhatIBring.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";

const App = () => {
    return (
        <div className="font-sans text-gray-800">
            <Header />
            <Hero />
            <WhyOnoff />
            <ShowcaseSection/>
            <WhatIBring/>
            <Footer />
        </div>
    );
};

export default App;
