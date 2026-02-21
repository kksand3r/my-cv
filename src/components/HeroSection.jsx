import React, { useState, useEffect, useRef } from 'react';
import { Mail, Code, FileText } from 'lucide-react';
import photo from '../assets/photo.jpg';

const HeroSection = ({ scrollY }) => {
    const [typedText, setTypedText] = useState('');
    const fullText = "AI Creator";
    const heroRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else clearInterval(timer);
        }, 100);

        return () => {
            clearInterval(timer);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const startFadingAt = isMobile ? 400 : 200; 
    const fadeDistance = 800; 
    
    const opacity = scrollY < startFadingAt 
        ? 1 
        : Math.max(0, 1 - (scrollY - startFadingAt) / fadeDistance);

    const blurEffect = scrollY < startFadingAt 
        ? 0 
        : Math.min(8, (scrollY - startFadingAt) / 100);
    
    const parallaxY = isMobile ? scrollY * 0.05 : scrollY * 0.3;

    return (
        <div 
            ref={heroRef} 
            className="relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-300 ease-out"
            style={{ 
                opacity: opacity,
                filter: `blur(${blurEffect}px)`
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 opacity-90 animate-gradient"></div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
                    style={{ top: '10%', left: '10%', animationDuration: '4s' }}></div>
                <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
                    style={{ bottom: '10%', right: '10%', animationDuration: '5s', animationDelay: '1s' }}></div>
                <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
                    style={{ top: '50%', left: '50%', animationDuration: '6s', animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-10 md:pt-0"
                style={{ transform: `translateY(${parallaxY}px)` }}>
                
                <div className="mb-6 md:mb-8 inline-block group">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 animate-gradient group-hover:scale-110 transition-transform duration-300">
                        <img
                            src={photo}
                            alt="Бенедик Олександр"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient leading-tight">
                    Бенедик Олександр
                </h1>

                <div className="text-xl md:text-4xl mb-6 text-gray-300 h-10 md:h-12">
                    <span className="border-r-2 border-purple-400 pr-2 animate-pulse">{typedText}</span>
                </div>

                <div className="text-sm md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed space-y-4 px-2">
                    <p>
                        Привіт! Я студент 3 курсу і захоплююся світом <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">генеративного штучного інтелекту</span>. Створюю текстовий і візуальний контент за допомогою таких інструментів, як ChatGPT, Claude, Runway, Veo3 та іншими ШІ. Кожен проєкт для мене — це можливість експериментувати, навчатися та вдосконалювати свої навички у сфері AI.
                    </p>
                    <p>
                        Мій досвід у <span className="text-purple-300">комп'ютерних науках</span> та знання <span className="text-green-300">C#</span> і <span className="text-cyan-300">.NET</span> дозволяють підходити до AI-процесів з технічної точки зору, поєднуючи креативність із системним вирішенням задач.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-10">
                    <a href="#contact" className="w-full sm:w-48 group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 md:py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 overflow-hidden">
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                        <Mail size={20} /> <span>Зв'язатися</span>
                    </a>
                    <a href="#projects" className="w-full sm:w-48 group relative border-2 border-purple-500 hover:bg-purple-500 hover:bg-opacity-20 px-6 py-3 md:py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                        <Code size={20} /> <span>Проєкти</span>
                    </a>
                </div>
                
            </div>
        </div>
    );
};

export default HeroSection;