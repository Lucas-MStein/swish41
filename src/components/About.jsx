import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="bg-primary text-white py-20 border-t border-white/5"
        >
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                    {/* Bild */}
                    <div className="rounded-2xl ring-1 ring-white/10 shadow-xl shadow-black/30 overflow-hidden">
                        <img
                            src="/about.webp"
                            alt="swish41 Künstlerportrait"
                            loading="lazy"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Text */}
                    <div className="order-2 md:order-2">
                        <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                            Über mich
                        </h2>

                        <p className="mt-6 text-white/80 leading-relaxed max-w-prose">
                            Junger Baller aus dem Südwesten Deutschlands braucht fette Karren,
                            iced-out Jesus Pieces und eine Crib in den Hills von LA. Sheesh.
                        </p>

                        <blockquote className="mt-8 border-l-2 border-white/20 pl-5 text-white/60 italic">
                            „Atzen wollen Beef, ich serviere jetzt.“
                            <span className="block mt-2 text-white/40 not-italic">
                — swish41
              </span>
                        </blockquote>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;