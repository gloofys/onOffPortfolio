import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { i18n, t } = useTranslation();

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <footer className="bg-white border-t text-gray-500 text-sm py-10 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left: Logo + Review */}
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/FBOnOff.png" alt="Logo" className="h-6" />
                        <span className="text-xl font-bold text-gray-800">
              Fred<span className="text-blue-400">Brosman</span>
            </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>Great</span>
                        <img src="/trustpilot-stars.svg" alt="Rating" className="h-4" />
                    </div>
                    <p className="text-xs">
                        Built to reflect Onoff’s design.<br />Just a demo, not affiliated.
                    </p>
                </div>

                {/* Middle: Links */}
                <div className="space-y-1">
                    <h4 className="font-semibold text-gray-700 mb-2">Navigation</h4>
                    <a href="#projects" className="hover:text-gray-800">Projects</a><br />
                    <a href="#contact" className="hover:text-gray-800">Contact</a><br />
                    <a href="#about" className="hover:text-gray-800">About Me</a><br />
                    <a href="#partner" className="hover:text-gray-800">Let’s Work Together</a>
                </div>

                {/* Right: Address + Language */}
                <div className="space-y-4">
                    <div>
                        <p>Viru Väljak 2, Tallinn<br />10111 Estonia</p>
                        <p className="mt-2">123 Example Street<br />Paris, France</p>
                    </div>
                    {/* Language Selector */}
                    <div className="relative">
                        <select
                            className="border text-sm px-2 py-1 rounded"
                            value={i18n.language}
                            onChange={handleLanguageChange}
                        >
                            <option value="en">🇬🇧 English</option>
                            <option value="fr">🇫🇷 Français</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="mt-10 text-center text-xs text-gray-400">
                ©{new Date().getFullYear()} Fred Brosman
            </div>
        </footer>
    );
};

export default Footer;
