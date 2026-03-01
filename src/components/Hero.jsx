import React from "react";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex items-center justify-center text-center px-4 min-h-[calc(100svh-80px)] md:min-h-[100svh] bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url('/hero.webp')` }}
        >
            {/* Subtiles Overlay für bessere Lesbarkeit */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />

            <div
                className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-xl mx-auto rounded-2xl
                   bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/30
                   p-6 sm:p-8 md:p-10"
            >
                <img
                    src="/logo.png"
                    alt="swish41 Logo"
                    className="mx-auto mb-4 w-40 sm:w-44 md:w-64"
                    loading="eager"
                    fetchpriority="high"
                />

                <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed mb-6">
                    Der Atze aus der Kleinstadt liefert Hitze aus dem Kinderzimmer.
                </p>

                <a
                    href="#music"
                    className="inline-flex items-center justify-center bg-white text-black font-semibold px-6 py-3 rounded-full
                     hover:bg-gray-200 active:scale-[0.99] transition w-full sm:w-auto
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                    Jetzt anhören
                </a>
            </div>
        </section>
    );
};

export default Hero;