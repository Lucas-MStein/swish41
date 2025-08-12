import React from "react";
import { FaInstagram, FaYoutube, FaEnvelope, FaTiktok } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="bg-black text-white py-16 px-6 border-t border-gray-800">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Kontakt & Socials</h2>
                <p className="text-gray-400 mb-6">
                    Für Anfragen, Booking oder Kollaborationen – gerne per E-Mail oder über Social Media.
                </p>

                <div className="flex justify-center gap-6 text-3xl mb-8">
                    <a href="mailto:josh@example.com" className="hover:text-gray-300" title="E-Mail">
                        <FaEnvelope/>
                    </a>
                    <a
                        href="https://www.instagram.com/josh.without.c/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500"
                        title="Instagram"
                    >
                        <FaInstagram/>
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UC4NkoAZXjh-UpGux-DmOEew"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-500"
                        title="YouTube"
                    >
                        <FaYoutube/>
                    </a>
                    <a
                        href="https://www.tiktok.com/@joshwithoutc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-fuchsia-300"
                        title="YouTube"
                    >
                        <FaTiktok/>
                    </a>
                </div>

            </div>
        </section>
);
};

export default Contact;