import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6 px-4 text-sm border-t border-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© {new Date().getFullYear()} joshwithoutc – Alle Rechte vorbehalten</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition">Impressum</a>
                    <a href="#" className="hover:text-white transition">Datenschutz</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;