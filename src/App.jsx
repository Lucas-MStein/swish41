import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Music from "./components/Music";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Header />
            <main className="pt-20"> {/* Platz schaffen für fixierten Header */}
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