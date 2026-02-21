import React from 'react';

const GlobalStyles = () => {
    return (
        <style>{`
            @media (min-width: 769px) {
                * {
                    cursor: none !important;
                }
            }

            @media (max-width: 768px) {
                * {
                    cursor: auto !important;
                }
            }

            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
            }

            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }

            .animate-gradient {
                background-size: 200% 200%;
                animation: gradient 15s ease infinite;
            }

            .card-3d {
                transform-style: preserve-3d;
                transition: transform 0.3s ease;
            }

            .card-3d:hover {
                transform: rotateY(5deg) rotateX(5deg);
            }

            .glass {
                background: rgba(17, 25, 40, 0.75);
                backdrop-filter: blur(16px) saturate(180%);
                border: 1px solid rgba(255, 255, 255, 0.125);
            }

            html {
                scroll-behavior: smooth;
                overflow-x: hidden; 
            }

            body {
                margin: 0;
                padding: 0;
                overflow-x: hidden;
            }

            ::-webkit-scrollbar {
                width: 8px;
            }
            ::-webkit-scrollbar-track {
                background: #111827;
            }
            ::-webkit-scrollbar-thumb {
                background: #4b5563;
                border-radius: 10px;
            }
            ::-webkit-scrollbar-thumb:hover {
                background: #7c3aed;
            }
        `}</style>
    );
};

export default GlobalStyles;