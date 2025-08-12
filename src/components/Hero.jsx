import React from "react";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      <div className="bg-black bg-opacity-70 p-10 rounded-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">"Logo"</h1>
        <p className="text-xl text-gray-300 mb-6">Alternative Beats & Emotion</p>
        <a
          href="#music"
          className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Jetzt anhören
        </a>
      </div>
    </section>
  );
};

export default Hero;
