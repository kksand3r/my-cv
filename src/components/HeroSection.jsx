import React, { useState, useEffect } from 'react';
import { ArrowRight, Github } from 'lucide-react';
import photo from '../assets/photo.jpg';

const HeroSection = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "Junior Creative Production";

    useEffect(() => {
        let index = 0;

        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center bg-black px-6 md:px-12 relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 opacity-90"></div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse top-10 left-10"></div>
                <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse bottom-10 right-10"></div>
                <div className="absolute w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse top-1/2 left-1/2"></div>
            </div>

            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 z-10 pt-20 pb-10">

                <div className="flex-1 flex flex-col items-start text-left">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-black/30 text-purple-300 text-xs font-medium mb-8 backdrop-blur">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                        Available for opportunities
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                        Олександр <br className="hidden md:block" /> Бенедик
                    </h1>

                    <div className="text-xl md:text-3xl mb-6 text-gray-200 h-10 md:h-12">
                        <span className="border-r-2 border-purple-400 pr-2 animate-pulse">
                            {typedText}
                        </span>
                    </div>

					<p className="text-lg md:text-xl text-gray-300 font-light mb-8 max-w-2xl leading-relaxed">
						Привіт! Я студент 3-го курсу, який розвивається в напрямку 
						<span className="text-purple-300 font-medium"> Creative Production. </span> 
						Створюю крео для TikTok, Instagram, Facebook і YouTube Shorts. Постійно експериментую з AI-інструментами (ChatGPT, Claude, Runway, Kling), аналізую тренди TikTok та Instagram, тестую різні підходи та намагаюся зрозуміти, що краще заходить аудиторії.
					</p>
					
                    <div className="flex items-center gap-4 flex-wrap">
                        <a
                            href="#projects"
                            className="group flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white
                                       bg-gradient-to-r from-purple-600 to-blue-600
                                       shadow-lg shadow-purple-900/40
                                       hover:scale-105 transition-all duration-300"
                        >
                            Проєкти
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
						</a>
						
                        <a
                            href="https://docs.google.com/document/d/1sWXwUYpkqfvPtf2A-3YE3f3lQsIpsJ0ZXj02wRi28i4/edit?tab=t.0#heading=h.6ttfwlag5hen"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-2 px-6 py-3 rounded-full font-medium
                                       text-purple-200 border border-purple-500/40
                                       bg-white/5 backdrop-blur-md
                                       hover:bg-white/10 hover:border-purple-400
                                       transition-all duration-300 hover:scale-105"
                        >
                            Case Study
                        </a>

                    </div>
                </div>

                <div className="md:w-1/3 flex justify-center md:justify-end">
                    <div className="relative group">
                        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 opacity-30 blur-xl group-hover:opacity-50 transition"></div>

                        <img
                            src={photo}
                            alt="Бенедик Олександр"
                            className="relative w-64 h-80 md:w-80 md:h-[400px] object-cover rounded-2xl border border-purple-500/30"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;