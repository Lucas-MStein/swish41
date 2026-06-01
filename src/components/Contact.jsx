import React from "react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const socials = [
    {
        url: "https://www.instagram.com/prodatlucas/",
        icon: FaInstagram,
        label: "Instagram",
    },
    {
        url: "https://www.youtube.com/@balloutlucas",
        icon: FaYoutube,
        label: "YouTube",
    },
    {
        url: "https://www.tiktok.com/@prodatlucas",
        icon: FaTiktok,
        label: "TikTok",
    },
];

const Contact = () => {
    return (
        <section id="contact" className="bg-deep/40 py-20 px-4">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Section Header */}
                <div className="flex items-baseline gap-4">
                    <h2 className="font-mono text-4xl md:text-5xl tracking-tighter">
                        Kontakt &amp; Socials
                    </h2>
                    <div
                        aria-hidden="true"
                        className="flex-1 h-px bg-frame/40 mt-4"
                    />
                </div>

                {/* Intro */}
                <p className="text-base md:text-lg text-cream/70 max-w-2xl leading-relaxed">
                    Für Anfragen, Booking oder Kollaborationen – direkt schreiben oder
                    auf Social Media folgen.
                </p>

                {/* Social Cards */}
                <div className="flex flex-wrap justify-center gap-4 pt-2">
                    {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.url}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="group w-20 h-20 border-2 border-frame bg-surface
                   flex items-center justify-center
                   shadow-offset-sm hover:shadow-offset-sm-hover hover:border-accent
                   transition-all
                   focus:outline-none focus-visible:border-accent focus-visible:shadow-offset-sm-hover"
                            >
                                <Icon className="text-3xl text-cream/60 group-hover:text-accent transition-colors" />
                            </a>
                        );
                    })}
                </div>

                {/* Email */}
                <div className="text-center">
                    <a
                        href="mailto:lucasmauricestein@gmail.com"
                        className="font-mono text-sm md:text-base text-cream hover:text-accent transition-colors tracking-wider
                       focus:outline-none focus-visible:text-accent"
                    >
                        lucasmauricestein@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
