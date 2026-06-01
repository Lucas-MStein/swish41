import React from "react";

const About = () => {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-center">
                    {/* Portrait */}
                    <div className="md:col-span-2">
                        <div className="relative aspect-[3/4] border-2 border-frame bg-surface shadow-offset overflow-hidden">
                            <img
                                src="/about.webp"
                                alt="swish41 Künstlerportrait"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-coffee/60 pointer-events-none"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 space-y-6">
                        {/* Section Header */}
                        <div className="flex items-baseline gap-4">
                            <h2 className="font-mono text-4xl md:text-5xl tracking-tighter">
                                Über mich
                            </h2>
                            <div
                                aria-hidden="true"
                                className="flex-1 h-px bg-frame/40 mt-4"
                            />
                        </div>

                        {/* Body Text */}
                        <p className="text-base md:text-lg leading-relaxed text-cream/80">
                            Junger Baller aus dem Südwesten Deutschlands braucht fette Karren,
                            iced-out Jesus Pieces und eine Crib in den Hills von LA. Sheesh.
                        </p>

                        {/* Quote */}
                        <blockquote className="border-l-4 border-accent/40 pl-6 py-4 bg-surface/30">
                            <p className="italic text-lg text-cream/70">
                                „Atzen wollen Beef, ich serviere jetzt."
                            </p>
                            <footer className="mt-2 font-mono text-xs uppercase tracking-wider text-cream/40 not-italic">
                                — swish41
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
