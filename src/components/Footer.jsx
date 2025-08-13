import React, { useState } from "react";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <footer className="bg-gray-900 text-gray-400 py-6 px-4 text-sm border-t border-gray-800">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>
                        © {new Date().getFullYear()} Lucas-Maurice Stein – Alle Rechte vorbehalten
                    </p>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="hover:text-white transition underline"
                        >
                            Impressum
                        </button>
                    </div>
                </div>
            </footer>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white text-black rounded-lg max-w-lg w-full p-6 shadow-lg relative"
                        onClick={(e) => e.stopPropagation()} // verhindert Schließen beim Klick ins Modal
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
                        >
                            &times;
                        </button>

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
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;