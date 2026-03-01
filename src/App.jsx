import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Music from "./components/Music";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white">
            <Header />

            <main className="pt-24">
                {/* globaler Container: gleiche Breite für alle Sections */}
                <div className="container space-y-24">
                    <Hero />
                    <Music />
                    <About />
                    <Contact />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;