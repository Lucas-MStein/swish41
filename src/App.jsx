import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Music from "./components/Music";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen bg-coffee text-cream">
            {/* Grain texture overlay (global, sits above everything except modals) */}
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 z-[60] opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                }}
            />

            <Header />

            <main>
                <Hero />
                <Music />
                <About />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
