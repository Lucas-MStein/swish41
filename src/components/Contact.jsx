import React from "react";
import { FaInstagram, FaYoutube, FaEnvelope, FaTiktok } from "react-icons/fa";

const socials = [
    {
        url: "https://www.instagram.com/prodatlucas/",
        icon: FaInstagram,
        hover: "hover:bg-pink-500/20 hover:text-pink-400",
    },
    {
        url: "https://www.youtube.com/@balloutlucas",
        icon: FaYoutube,
        hover: "hover:bg-red-500/20 hover:text-red-400",
    },
    {
        url: "https://www.tiktok.com/@prodatlucas",
        icon: FaTiktok,
        hover: "hover:bg-fuchsia-500/20 hover:text-fuchsia-300",
    },
];

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-primary text-white py-20 border-t border-white/5"
        >
            <div className="container text-center">

                <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                    Kontakt & Socials
                </h2>

                <p className="mt-4 text-white/70 max-w-prose mx-auto">
                    Für Anfragen, Booking oder Kollaborationen – direkt schreiben oder auf Social Media folgen.
                </p>

                {/* Email CTA */}
                <div className="mt-8">
                    <a
                        href="mailto:lucasmauricestein@gmail.com"
                        className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold
                       hover:bg-gray-200 transition active:scale-[0.98]
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    >
                        <FaEnvelope />
                        lucasmauricestein@gmail.com
                    </a>
                </div>

                {/* Social Cards */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl
                            bg-white/5 ring-1 ring-white/10 shadow-lg shadow-black/30
                            transition ${social.hover}`}
                            >
                                <Icon className="text-3xl" />
                                <span className="text-sm font-medium">
                  {social.name}
                </span>
                            </a>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Contact;