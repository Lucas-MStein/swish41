import React, { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";

const Footer = () => {
    const [openModal, setOpenModal] = useState(null); // null | "impressum" | "datenschutz"
    const year = new Date().getFullYear();

    const closeModal = () => setOpenModal(null);

    // Escape schließen + Body scroll lock
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
            <footer className="bg-primary text-white/60 border-t border-white/5 mt-16">
                <div className="container py-10 text-sm">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-center md:text-left">
                            © {year}{" "}
                            <span className="text-white/80 font-medium">
                Lucas-Maurice Stein
              </span>{" "}
                            – Alle Rechte vorbehalten
                        </p>

                        <div className="flex items-center justify-center flex-wrap gap-x-5 gap-y-2">
                            <button
                                type="button"
                                onClick={() => setOpenModal("impressum")}
                                className="text-sky-300 hover:text-sky-200 transition-colors underline-offset-4 hover:underline
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                            >
                                Impressum
                            </button>

                            <span className="hidden sm:inline text-white/20">•</span>

                            <button
                                type="button"
                                onClick={() => setOpenModal("datenschutz")}
                                className="text-sky-300 hover:text-sky-200 transition-colors underline-offset-4 hover:underline
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                            >
                                Datenschutz
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Modal Overlay */}
            {openModal && (
                <div className="fixed inset-0 z-[9999]">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={closeModal}
                    />

                    {/* Modal */}
                    <div className="relative z-10 min-h-[100svh] flex items-center justify-center px-4 py-10">
                        <div
                            className="w-full max-w-2xl rounded-2xl bg-white/10 text-white ring-1 ring-white/15 shadow-xl shadow-black/40 backdrop-blur-md"
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="flex items-start justify-between gap-4 p-6 border-b border-white/10">
                                <h2 className="font-display text-2xl tracking-tight">
                                    {openModal === "impressum" ? "Impressum" : "Datenschutzerklärung"}
                                </h2>

                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white transition
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                                    aria-label="Modal schließen"
                                >
                                    <HiX className="text-2xl" />
                                </button>
                            </div>

                            <div className="p-6 text-white/85 leading-relaxed">
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
                                                className="text-sky-200 hover:text-sky-100 underline-offset-4 hover:underline"
                                            >
                                                lucasmauricestein@gmail.com
                                            </a>
                                        </p>

                                        <p className="mt-4 text-sm text-white/55">
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
                      <span className="text-white/90 font-medium">
                        Lucas-Maurice Stein
                      </span>
                                            <br />
                                            E-Mail:{" "}
                                            <a
                                                href="mailto:lucasmauricestein@gmail.com"
                                                className="text-sky-200 hover:text-sky-100 underline-offset-4 hover:underline"
                                            >
                                                lucasmauricestein@gmail.com
                                            </a>
                                        </p>

                                        <p className="mb-4">
                                            Diese Website dient ausschließlich der Information. Es werden keine
                                            personenbezogenen Daten aktiv erhoben.
                                        </p>

                                        <p className="mb-4">
                                            Beim Zugriff auf diese Website werden durch den Hosting-Anbieter (Vercel)
                                            technisch notwendige Zugriffsdaten (z. B. IP-Adresse, Browsertyp, Zeitpunkt
                                            des Zugriffs) verarbeitet, um den sicheren Betrieb der Website zu gewährleisten.
                                        </p>

                                        <p className="text-sm text-white/55">
                                            Es werden keine Cookies zu Analyse- oder Marketingzwecken eingesetzt.
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