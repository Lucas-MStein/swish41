import React from "react";

const releases = [
    {
        title: "XTRA LONG",
        year: 2025,
        cover: "/covers/XTRA LONG.jpg",
        spotify: "https://open.spotify.com/embed/album/5lGHrdFDcunYs86nNsg1FX?utm_source=generator",
    },
    {
        title: "burrberg",
        year: 2025,
        cover: "/covers/burrberg.jpg",
        spotify: "https://open.spotify.com/embed/track/4vFkYw4Oyo2muPcKzVG6ph?utm_source=generator",
    },
];

const Music = () => {
    return (
        <section id="music" className="bg-gray-900 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Releases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {releases.map((release, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg">
                            <img
                                src={release.cover}
                                alt={release.title}
                                className="rounded-lg mb-4 w-full h-64 object-contain"
                            />
                            <h3 className="text-2xl font-semibold">{release.title}</h3>
                            <p className="text-sm text-gray-400 mb-4">{release.year}</p>
                            <iframe
                                src={release.spotify}
                                width="100%"
                                height="80"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Music;