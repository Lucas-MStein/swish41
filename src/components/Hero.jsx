import React from "react";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-[calc(100vh-80px)] md:min-h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
            style={{ backgroundImage: `url('/hero.webp')` }}
        >
            <div className="w-full max-w-sm sm:max-w-md md:max-w-xl mx-auto rounded-2xl
                bg-white/10 backdrop-blur-sm
                border border-white/10
                shadow-xl
                p-6 sm:p-8 md:p-10">
                <img
                    src="/logo.png"
                    alt="swish41 Logo"
                    className="mx-auto mb-4 w-40 sm:w-44 md:w-64"
                />

                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6">
                    Der Atze aus der Kleinstadt liefert Hitze aus dem Kinderzimmer.
                </p>

                <a
                    href="#music"
                    className="inline-flex items-center justify-center bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition w-full sm:w-auto"
                >
                    Jetzt anhören
                </a>
            </div>
        </section>
    );
};

export default Hero;