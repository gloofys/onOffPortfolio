import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {LanguageSwitcher} from "../components/LanguageSwitcher.jsx";



const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleMenu = () => setMobileOpen(!mobileOpen);
    const { t } = useTranslation();

    const navItems = [
        { label: t("nav.why"), href: "#why" },
        { label: t("nav.projects"), href: "#projects" },
        { label: t("nav.techStack"), href: "#techStack" },
        { label: t("nav.aboutMe"), href: "#aboutMe" },
    ];


    return (
        <header className="bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-[72px]">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img
                            src="/public/assets/FBOnOff.png"
                            alt="Logo"
                            className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 p-1"
                        />
                        <span className="text-xl font-semibold text-gray-900 font-sans">
            Fred<span className="text-[#339CFF] font-bold">Brosman</span>
        </span>
                    </div>

                    {/* Right section (nav + cta) */}
                    <div className="ml-auto flex items-center space-x-6">
                        {/* Desktop Navigation */}
                        <nav
                            className="hidden md:flex items-center space-x-6 text-sm text-[#273348] font-medium font-sans">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="hover:text-[#339CFF] transition"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="ml-4">
                                <LanguageSwitcher/>
                            </div>
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:flex items-center ml-[20px]">
                            <a
                                href="https://drive.google.com/file/d/1aUr9iR7RXMLaJLjzofdVfHDISMH_Kj4T/view"
                                target="_blank"
                                className="px-[15px] py-[10px] bg-white border-2 border-[#007bff] rounded-[27px] text-[#007bff] text-sm font-medium hover:bg-[#007bff] hover:text-white transition"
                            >
                                Curriculum Vitae
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative w-8 h-8 focus:outline-none ml-auto"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
        <span
            className={`absolute top-1/2 left-0 w-6 h-0.5 bg-black rounded transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
        />
                        <span
                            className={`absolute top-1/2 left-0 w-6 h-0.5 bg-black rounded transition-opacity duration-300 ${
                                mobileOpen ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <span
                            className={`absolute top-1/2 left-0 w-6 h-0.5 bg-black rounded transition-transform duration-300 ${
                                mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="fixed top-16 left-0 right-0 bg-white shadow-md z-40 px-6 py-6 animate-slide-down rounded-b-xl">
                    <nav className="flex flex-col items-center space-y-4 text-[#273348] text-base font-medium">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="hover:text-[#339CFF]"
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Language Switcher */}
                        <div className="pt-2">
                            <LanguageSwitcher />
                        </div>

                        {/* CV Button */}
                        <a
                            href="https://drive.google.com/file/d/1aUr9iR7RXMLaJLjzofdVfHDISMH_Kj4T/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block px-[15px] py-[10px] bg-white border-2 border-[#007bff] rounded-[27px] text-[#007bff] text-sm font-medium hover:bg-[#007bff] hover:text-white transition"
                        >
                            Curriculum Vitae
                        </a>

                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
