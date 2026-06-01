import React, { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";

const Footer = () => {
    const [openModal, setOpenModal] = useState(null); // null | "impressum" | "datenschutz"
    const year = new Date().getFullYear();

    const closeModal = () => setOpenModal(null);

    // Escape closes + body scroll lock
    useEffect(() => {
        if (!openModal) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") closeModal();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [openModal]);

    return (
        <>
            <footer className="bg-deep border-t border-frame/40 py-6 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-xs text-cream/40">
                    <p className="text-center md:text-left">
                        © {year}{" "}
                        <span className="text-cream/70">Lucas-Maurice Stein</span>
                    </p>

                    <div className="flex gap-6">
                        <button
                            type="button"
                            onClick={() => setOpenModal("impressum")}
                            className="uppercase tracking-wider hover:text-accent transition-colors
                         focus:outline-none focus-visible:text-accent"
                        >
                            Impressum
                        </button>
                        <button
                            type="button"
                            onClick={() => setOpenModal("datenschutz")}
                            className="uppercase tracking-wider hover:text-accent transition-colors
                         focus:outline-none focus-visible:text-accent"
                        >
                            Datenschutz
                        </button>
                    </div>
                </div>
            </footer>

            {/* Modal Overlay */}
            {openModal && (
                <div
                    className="fixed inset-0 z-[9999]"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-coffee/85 backdrop-blur-sm"
                        onClick={closeModal}
                    />

                    {/* Modal */}
                    <div className="relative z-10 min-h-[100svh] flex items-center justify-center px-4 py-10 overflow-y-auto">
                        <div
                            className="w-full max-w-2xl bg-surface border-2 border-frame shadow-offset"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4 p-6 border-b border-frame/40">
                                <h2 className="font-mono text-2xl md:text-3xl tracking-tighter">
                                    {openModal === "impressum"
                                        ? "Impressum"
                                        : "Datenschutzerklärung"}
                                </h2>

                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="p-2 text-cream/70 hover:text-accent transition-colors
                             focus:outline-none focus-visible:text-accent"
                                    aria-label="Modal schließen"
                                >
                                    <HiX className="text-2xl" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-cream/85 leading-relaxed">
                                {openModal === "impressum" && (
                                    <>
                                        <p>
                                            Lucas-Maurice Stein
                                            <br />
                                            Herrengarten 39
                                            <br />
                                            75365 Calw
                                        </p>

                                        <p className="mt-4">
                                            E-Mail:{" "}
                                            <a
                                                href="mailto:lucasmauricestein@gmail.com"
                                                className="text-accent hover:text-accent-bright transition-colors underline-offset-4 hover:underline"
                                            >
                                                lucasmauricestein@gmail.com
                                            </a>
                                        </p>

                                        <p className="mt-6 font-mono text-xs uppercase tracking-wider text-cream/50">
                                            Dieses Impressum gilt auch für meine Social-Media-Profile.
                                        </p>
                                    </>
                                )}

                                {openModal === "datenschutz" && (
                                    <>
                                        <p className="mb-4">
                                            Verantwortlicher im Sinne der DSGVO:
                                        </p>

                                        <p className="mb-4">
                                            <span className="text-cream font-medium">
                                                Lucas-Maurice Stein
                                            </span>
                                            <br />
                                            E-Mail:{" "}
                                            <a
                                                href="mailto:lucasmauricestein@gmail.com"
                                                className="text-accent hover:text-accent-bright transition-colors underline-offset-4 hover:underline"
                                            >
                                                lucasmauricestein@gmail.com
                                            </a>
                                        </p>

                                        <p className="mb-4">
                                            Diese Website dient ausschließlich der Information. Es
                                            werden keine personenbezogenen Daten aktiv erhoben.
                                        </p>

                                        <p className="mb-4">
                                            Beim Zugriff auf diese Website werden durch den
                                            Hosting-Anbieter (Vercel) technisch notwendige
                                            Zugriffsdaten (z. B. IP-Adresse, Browsertyp, Zeitpunkt
                                            des Zugriffs) verarbeitet, um den sicheren Betrieb der
                                            Website zu gewährleisten.
                                        </p>

                                        <p className="font-mono text-xs uppercase tracking-wider text-cream/50">
                                            Es werden keine Cookies zu Analyse- oder
                                            Marketingzwecken eingesetzt.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;
