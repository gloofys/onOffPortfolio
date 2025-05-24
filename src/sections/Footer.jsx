import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white py-10 text-sm text-gray-600">
            <div className="max-w-[1140px] mx-auto flex flex-wrap md:flex-nowrap justify-between gap-6 px-6">

                {/* Column 1: Logo + Note */}
                <div className="w-full md:w-1/4 space-y-3">
                    <div className="flex items-center gap-2">
                        <img src="/public/assets/FBOnOff.png" alt="Logo" className="h-6" />
                        <span className="text-lg font-semibold text-gray-800">
              Fred<span className="text-blue-500">Brosman</span>
            </span>
                    </div>
                    <p className="text-xs">
                        Styled after Onoff design.<br />This is a portfolio demo.
                    </p>
                </div>

                {/* Column 2: Navigation */}
                <div className="w-full md:w-1/4 space-y-2">
                    <h4 className="font-semibold text-gray-700">Navigation</h4>
                    <ul className="space-y-1">
                        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
                        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                        <li><a href="#aboutMe" className="hover:text-blue-600">About Me</a></li>
                        <li><a href="#partner" className="hover:text-blue-600">Partner Up</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div className="w-full md:w-1/4 space-y-2">
                    <h4 className="font-semibold text-gray-700">Contact</h4>
                    <p>Email: <a href="mailto:fred@example.com" className="text-blue-600 hover:underline">fred@example.com</a></p>
                    <p>Phone: <a href="tel:+37212345678" className="text-blue-600 hover:underline">+372 1234 5678</a></p>
                </div>

                {/* Column 4: Location or Language */}
                <div className="w-full md:w-1/4 space-y-2">
                    <h4 className="font-semibold text-gray-700">Location</h4>
                    <p>Tallinn, Estonia</p>
                    <select className="border text-sm px-2 py-1 rounded mt-2">
                        <option value="en">🇬🇧 English</option>
                        <option value="fr">🇫🇷 Français</option>
                    </select>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
