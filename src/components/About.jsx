import React from "react";

const About = () => {
    return (
        <section id="about" className="bg-gray-950 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Bild */}
                <div className="md:w-1/2 w-full">
                    <img
                        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"
                        alt="Künstlerportrait"
                        className="rounded-xl shadow-lg"
                    />
                </div>

                {/* Text */}
                <div className="md:w-1/2 w-full">
                    <h2 className="text-4xl font-bold mb-6">Über mich</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        joshwithoutc kombiniert atmosphärische Lo-Fi-Elemente mit ehrlichen Lyrics und
                        modernen Synth-Sounds. Inspiriert von nächtlichen Spaziergängen durch Großstädte und
                        dem Rauschen der Gedanken, entstehen Klangwelten zwischen Melancholie und Hoffnung.
                    </p>
                    <p className="text-gray-400 text-sm">
                        „Musik ist für mich das Ventil, das Worte ersetzen kann.“
                        — Josh
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;