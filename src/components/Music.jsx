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
        <section id="music" className="bg-primary text-white py-16 border-t border-white/5">
            <div className="container">
                <header className="text-center">
                    <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                        Releases
                    </h2>
                    <p className="mt-3 text-white/70 max-w-prose mx-auto">
                        Direkt streamen auf Spotify.
                    </p>
                </header>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {releases.map((r) => (
                        <article
                            key={r.title}
                            className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-xl shadow-black/30 transition hover:scale-[1.02]"
                        >
                            {/* Cover */}
                            <div className="relative">
                                <img
                                    src={r.cover}
                                    alt={`${r.title} Cover`}
                                    loading="lazy"
                                    className="w-full aspect-square object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute top-4 left-4 text-xs bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                                    {r.type} • {r.year}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="font-display text-2xl tracking-tight">
                                    {r.title}
                                </h3>

                                <a
                                    href={r.spotifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold
                             hover:bg-gray-200 transition"
                                >
                                    Auf Spotify hören <FiExternalLink />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Music;