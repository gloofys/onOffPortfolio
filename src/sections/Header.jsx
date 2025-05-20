import React, { useState } from "react";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleMenu = () => setMobileOpen(!mobileOpen);

    const navItems = [
        { label: "Why Onoff?", href: "#why" },
        { label: "About Me", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header className="bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/FBOnOff.png" alt="Logo" className="h-8 w-auto"/>
                        <span className="text-xl font-bold text-gray-800">
              Fred<span className="text-blue-400">Brosman</span>
            </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href} className="hover:text-blue-600">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="ml-4 hidden md:inline-block px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition"
                    >
                        Let's Talk
                    </a>

                    {/* Hamburger (Mobile Only) */}
                    <button
                        className="md:hidden relative w-8 h-8 focus:outline-none"
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
                <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-40 px-6 py-6 animate-slide-down rounded-b-xl">
                    <nav className="flex flex-col space-y-4 text-gray-800 text-base font-medium">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="hover:text-blue-600"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="mt-4 inline-block px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition"
                        >
                            Let's Talk
                        </a>
                        <a href="#login" className="text-gray-600 hover:text-gray-800">
                            Login
                        </a>
                    </nav>
                </div>
            )}

        </header>
    );
};

export default Header;
