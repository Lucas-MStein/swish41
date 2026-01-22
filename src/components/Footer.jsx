import React, { useState } from "react";

const Footer = () => {
    const [openModal, setOpenModal] = useState(null); // null | "impressum" | "datenschutz"

    const closeModal = () => setOpenModal(null);

    return (
        <>
            <footer className="bg-gray-900 text-gray-400 py-6 px-4 text-sm border-t border-gray-800">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
                    {/* Mobile: eigene Zeile */}
                    <p className="text-center md:text-left whitespace-nowrap">
                        © {new Date().getFullYear()} Lucas-Maurice Stein – Alle Rechte vorbehalten
                    </p>

                    {/* Links: Mobile untereinander/nebeneinander mit Wrap, Desktop rechts */}
                    <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2">
                        <button
                            onClick={() => setOpenModal("impressum")}
                            className="hover:text-white transition underline"
                        >
                            Impressum
                        </button>

                        <button
                            onClick={() => setOpenModal("datenschutz")}
                            className="hover:text-white transition underline"
                        >
                            Datenschutz
                        </button>
                    </div>
                </div>
            </footer>

            {/* Modal Overlay */}
            {openModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white text-black rounded-lg max-w-lg w-full p-6 shadow-lg relative"
                        onClick={(e) => e.stopPropagation()} // verhindert Schließen beim Klick ins Modal
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl leading-none"
                            aria-label="Modal schließen"
                        >
                            &times;
                        </button>

                        {openModal === "impressum" && (
                            <>
                                <h2 className="text-2xl font-bold mb-4">Impressum</h2>
                                <p>
                                    Lucas-Maurice Stein<br />
                                    Herrengarten 39<br />
                                    75365 Calw
                                </p>
                                <p className="mt-4">
                                    E-Mail:{" "}
                                    <a
                                        href="mailto:lucasmauricestein@gmail.com"
                                        className="text-blue-500 hover:underline"
                                    >
                                        lucasmauricestein@gmail.com
                                    </a>
                                </p>
                                <p className="mt-4 text-sm text-gray-500">
                                    Dieses Impressum gilt auch für meine Social-Media-Profile.
                                </p>
                            </>
                        )}

                        {openModal === "datenschutz" && (
                            <>
                                <h2 className="text-2xl font-bold mb-4">Datenschutzerklärung</h2>

                                <p className="mb-4">
                                    Verantwortlicher im Sinne der DSGVO:
                                </p>

                                <p className="mb-4">
                                    <strong>Lucas-Maurice Stein</strong>
                                    <br />
                                    E-Mail:{" "}
                                    <a
                                        href="mailto:lucasmauricestein@gmail.com"
                                        className="text-blue-500 hover:underline"
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

                                <p className="text-sm text-gray-500">
                                    Es werden keine Cookies zu Analyse- oder Marketingzwecken eingesetzt.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;