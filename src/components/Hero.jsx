import React from "react";

const Hero = () => {
  return (
      <section
          id="home"
          className="h-screen bg-cover bg-center flex items-center justify-center text-center"
          style={{
            backgroundImage: `url('/hero.jpg')`,
          }}
      >
        <div className="bg-zinc-500 bg-opacity-70 p-10 rounded-xl">
          <img
              src="/logo.png" // Pfad zu deinem Logo
              alt="swish41 Logo"
              className="mx-auto mb-4 w-48 md:w-64" // Größe anpassen
          />
          <p className="text-xl text-gray-300 mb-6">
            Der Atze aus der Kleinstadt liefert Hitze aus dem Kinderzimmer.
          </p>
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