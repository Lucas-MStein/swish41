import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
    { href: "#home", label: "Home" },
    { href: "#music", label: "Releases" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Kontakt" },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("#home");

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
                    .sort(
                        (a, b) =>
                            (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
                    )[0];

                if (visible?.target?.id) setActive(`#${visible.target.id}`);
            },
            { threshold: [0.2, 0.4, 0.6], rootMargin: "-30% 0px -60% 0px" }
        );

        sections.forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    // Body scroll lock when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    // Escape closes mobile menu
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
        <header className="sticky top-0 z-40 bg-coffee/95 backdrop-blur-sm border-b border-frame/40">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                {/* Brand */}
                <a
                    href="#home"
                    onClick={() => handleClick("#home")}
                    className="font-mono text-xs tracking-wider uppercase text-cream/70 hover:text-accent transition-colors
                     focus:outline-none focus-visible:text-accent"
                    aria-label="Zur Startsektion"
                >
                    ///Ubuntu presents: swish41
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
                    {links.map((l) => {
                        const isActive = active === l.href;
                        return (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => handleClick(l.href)}
                                className={[
                                    "transition-colors",
                                    "focus:outline-none focus-visible:text-accent",
                                    isActive
                                        ? "text-accent"
                                        : "text-cream/50 hover:text-accent",
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
                    className="md:hidden text-2xl p-1 text-cream/70 hover:text-accent transition-colors
                     focus:outline-none focus-visible:text-accent"
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
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 z-0 bg-coffee/95 backdrop-blur-sm"
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Content Layer */}
                        <div className="relative z-10 min-h-[100svh]">
                            {/* Close Button */}
                            <button
                                type="button"
                                aria-label="Menü schließen"
                                onClick={() => setMenuOpen(false)}
                                className="absolute right-5 top-5 z-20 p-2 text-cream/80 hover:text-accent transition-colors
                           focus:outline-none focus-visible:text-accent"
                            >
                                <HiX className="text-2xl" />
                            </button>

                            {/* Menu */}
                            <nav className="flex min-h-[100svh] flex-col items-center justify-center gap-6 font-mono text-sm uppercase tracking-wider">
                                {links.map((l) => {
                                    const isActive = active === l.href;
                                    return (
                                        <a
                                            key={l.href}
                                            href={l.href}
                                            onClick={() => handleClick(l.href)}
                                            className={[
                                                "px-6 py-3 border-2 transition-all",
                                                "focus:outline-none",
                                                isActive
                                                    ? "border-accent text-accent shadow-offset-sm"
                                                    : "border-frame text-cream/70 hover:border-accent hover:text-accent hover:shadow-offset-sm",
                                            ].join(" ")}
                                        >
                                            {l.label}
                                        </a>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>,
                    document.body
                )}
        </header>
    );
};

export default Header;
