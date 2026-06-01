import React from "react";
import { FiExternalLink } from "react-icons/fi";

const releases = [
    {
        title: "XTRA LONG",
        year: 2025,
        cover: "/covers/xtra-long.jpg",
        spotifyUrl: "https://open.spotify.com/album/5lGHrdFDcunYs86nNsg1FX",
        type: "Single",
    },
    {
        title: "self-titled",
        year: 2026,
        cover: "/covers/self-titled.jpg",
        spotifyUrl: "https://open.spotify.com/track/3PCQww9EdClEhHGQNso6gT",
        type: "EP",
    },
];

const Music = () => {
    return (
        <section id="music" className="bg-deep/40 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex items-baseline gap-4 mb-12">
                    <h2 className="font-mono text-4xl md:text-5xl tracking-tighter">
                        Releases
                    </h2>
                    <div
                        aria-hidden="true"
                        className="flex-1 h-px bg-frame/40 mt-4"
                    />
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                    {releases.map((r, idx) => {
                        const number = String(idx + 1).padStart(3, "0");

                        return (
                            <article key={r.title} className="group">
                                {/* Cover Link */}
                                <a
                                    href={r.spotifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${r.title} auf Spotify anhören`}
                                    className="block relative aspect-square border-2 border-frame bg-surface mb-4 overflow-hidden
                     shadow-offset-md group-hover:shadow-offset-md-hover transition-all
                     focus:outline-none focus-visible:shadow-offset-md-hover"
                                >
                                    <img
                                        src={r.cover}
                                        alt={`${r.title} Cover`}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                    />

                                    {/* Subtle warm overlay */}
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 bg-gradient-to-br from-frame/10 to-transparent pointer-events-none"
                                    />

                                </a>

                                {/* Content */}
                                <div className="space-y-2">
                                    <h3 className="text-2xl tracking-tight">{r.title}</h3>
                                    <p className="font-mono text-xs text-cream/50 uppercase tracking-wider">
                                        {r.type} · {r.year}
                                    </p>

                                    <div className="pt-2">
                                        <a
                                            href={r.spotifyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider
                         text-accent/70 hover:text-accent transition-colors
                         focus:outline-none focus-visible:text-accent"
                                        >
                                            Spotify <FiExternalLink size={12} />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Music;
