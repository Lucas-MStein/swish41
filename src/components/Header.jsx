import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const closeMenu = () => setMenuOpen(false);

    const menuItems = (
        <>
            <a href="#home" onClick={closeMenu} className="hover:text-gray-300">
                Home
            </a>
            <a href="#music" onClick={closeMenu} className="hover:text-gray-300">
                Releases
            </a>
            <a href="#about" onClick={closeMenu} className="hover:text-gray-300">
                About
            </a>
            <a href="#contact" onClick={closeMenu} className="hover:text-gray-300">
                Kontakt
            </a>
        </>
    );

    return (
        <header className="fixed w-full top-0 z-50 bg-black bg-opacity-80 backdrop-blur border-b border-gray-800 text-white">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">joshwithoutc</h1>

                {/* Desktop-Navigation */}
                <nav className="hidden md:flex space-x-6 text-sm">{menuItems}</nav>

                {/* Mobile Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-2xl text-white focus:outline-none"
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menü */}
            {menuOpen && (
                <div className="md:hidden bg-black bg-opacity-90 border-t border-gray-800 px-6 py-4 space-y-4 text-sm">
                    <div className="flex flex-col space-y-4">{menuItems}</div>
                </div>
            )}
        </header>
    );
};

export default Header;