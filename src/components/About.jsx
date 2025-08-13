import React from "react";

const About = () => {
    return (
        <section id="about" className="bg-gray-950 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Bild */}
                <div className="md:w-1/2 w-full">
                    <img
                        src="/about.jpg"
                        alt="Künstlerportrait"
                        className="rounded-xl shadow-lg"
                    />
                </div>

                {/* Text */}
                <div className="md:w-1/2 w-full">
                    <h2 className="text-4xl font-bold mb-6">Über mich</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Junger Baller aus dem Südwesten Deutschlands braucht fette Karren, iced-out
                        Jesus Pieces und eine Crib in den Hills von LA. Sheesh.
                    </p>
                    <p className="text-gray-400 text-sm">
                        „Atzen wollen Beef, ich serviere jetzt.“
                        — swish41
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;