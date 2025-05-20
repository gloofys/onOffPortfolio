import React from "react";
import Hero from "./sections/Hero";
import WhyOnoff from "./sections/WhyOnoff";
import Footer from "./sections/Footer";
import './App.css'
import Header from "./sections/Header.jsx";
import WhatIBring from "./sections/WhatIBring.jsx";

const App = () => {
    return (
        <div className="font-sans bg-gradient-to-b from-[#F0F4FF] to-white text-gray-800">
            <Header />
            <Hero />
            <WhyOnoff />
            <WhatIBring/>
            <Footer />
        </div>
    );
};

export default App;
