import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("#home");

    const links = [
        { href: "#home", label: "Home" },
        { href: "#music", label: "Releases" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Kontakt" },
    ];

    // Header-Background beim Scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Active Section Highlight
    useEffect(() => {
        const sections = links
            .map((l) => document.getElementById(l.href.replace("#", "")))
            .filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

                if (visible?.target?.id) setActive(`#${visible.target.id}`);
            },
            { threshold: [0.2, 0.4, 0.6], rootMargin: "-30% 0px -60% 0px" }
        );

        sections.forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, []); // links ist konstant → ok

    // Body scroll lock + Cleanup
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    // Escape schließt Menü
    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    const handleClick = (href) => {
        setActive(href);
        setMenuOpen(false);
    };

    return (
        <header
            className={[
                "fixed w-full top-0 z-50 text-white",
                "transition-all duration-300",
                scrolled
                    ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
                    : "bg-black/50 backdrop-blur-md",
            ].join(" ")}
        >
            <div className="container flex justify-between items-center py-4">
                {/* Brand */}
                <a
                    href="#home"
                    onClick={() => handleClick("#home")}
                    className="font-display text-xl tracking-wide underline underline-offset-4"
                    aria-label="Zur Startsektion"
                >
                    Ubuntu presents: swish41
                </a>

                {/* Desktop Navigation (Pills) */}
                <nav className="hidden md:flex items-center gap-2 text-sm">
                    {links.map((l) => {
                        const isActive = active === l.href;
                        return (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => handleClick(l.href)}
                                className={[
                                    "px-4 py-2 rounded-full transition duration-200",
                                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                                    isActive
                                        ? "bg-white/15 text-white"
                                        : "text-white/70 hover:bg-white/10 hover:text-white",
                                ].join(" ")}
                            >
                                {l.label}
                            </a>
                        );
                    })}
                </nav>

                {/* Mobile Toggle */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((v) => !v)}
                    className="md:hidden text-2xl rounded-full p-2 hover:bg-white/10 transition
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Overlay via Portal */}
            {menuOpen &&
                createPortal(
                    <div
                        id="mobile-menu"
                        className="md:hidden fixed inset-0 z-[9999]"
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* Backdrop (immer unten) */}
                        <div
                            className="absolute inset-0 z-0 bg-black/90 backdrop-blur-sm"
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Content Layer */}
                        <div className="relative z-10 min-h-[100svh]">
                            {/* Close Button (garantiert oben) */}
                            <button
                                type="button"
                                aria-label="Menü schließen"
                                onClick={() => setMenuOpen(false)}
                                className="absolute right-5 top-5 z-20 rounded-full p-2 text-white/90 hover:bg-white/10
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                            >
                                <HiX className="text-2xl" />
                            </button>

                            {/* Menü */}
                            <nav className="flex min-h-[100svh] flex-col items-center justify-center gap-8 text-lg font-medium">
                                {links.map((l) => (
                                    <a
                                        key={l.href}
                                        href={l.href}
                                        onClick={() => handleClick(l.href)}
                                        className="rounded-full px-6 py-3 bg-white/5 hover:bg-white/10 text-white transition
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                                    >
                                        {l.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>,
                    document.body
                )}
        </header>
    );
};

export default Header;