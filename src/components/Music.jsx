import React from "react";

const releases = [
    {
        title: "Trackhawk",
        year: 2025,
        cover: "https://i.scdn.co/image/ab67616d0000b273fe0f3a0f1a65b541e5c7b45a",
        spotify: "https://open.spotify.com/embed/track/0ioUErXFqx4eigNVzQEBpw?utm_source=generator",
    },
    {
        title: "Kein Candlelight",
        year: 2025,
        cover: "https://i.scdn.co/image/ab67616d0000b273da9b814b6dbf6e3dc79537a0",
        spotify: "https://open.spotify.com/embed/track/5HuK4hVtqm0073j3gLSLUm?utm_source=generator",
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
                                className="rounded-lg mb-4 w-full h-64 object-cover"
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