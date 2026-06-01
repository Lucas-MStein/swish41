import React from "react";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-[90vh] flex items-center px-4 pt-12 pb-20"
        >
            <div className="max-w-6xl w-full mx-auto">
                <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-center">
                    {/* Artist Image */}
                    <div className="md:col-span-2">
                        <div className="relative aspect-square border-2 border-frame shadow-offset overflow-hidden">
                            <img
                                src="/hero.webp"
                                alt="swish41 Künstlerbild"
                                className="w-full h-full object-cover"
                                loading="eager"
                                fetchpriority="high"
                            />

                            {/* Decorative corner markers */}
                            <span
                                aria-hidden="true"
                                className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-accent"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-accent"
                            />
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div className="md:col-span-3 space-y-6">
                        <div>
                            <p className="font-mono text-xs tracking-[0.4em] uppercase text-accent mb-4">
                                :::ARTIST
                            </p>
                            <h1>
                                <img
                                    src="/logo.png"
                                    alt="swish41"
                                    className="w-48 sm:w-56 md:w-64 h-auto"
                                    loading="eager"
                                    fetchpriority="high"
                                />
                            </h1>
                        </div>

                        <div className="border-l-4 border-accent/40 pl-6">
                            <p className="text-2xl md:text-3xl leading-tight tracking-tight text-cream">
                                Der Atze aus der Kleinstadt liefert Hitze aus dem Kinderzimmer.
                            </p>
                        </div>

                        <div className="pt-2">
                            <a
                                href="#music"
                                className="inline-block px-6 py-3 bg-accent text-deep font-mono text-sm uppercase tracking-wider
                                shadow-offset-cta
                                hover:bg-accent-bright
                                active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                                transition-all
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-coffee"
                            >
                                /// Jetzt anhören
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
