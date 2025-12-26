import React, { useState, useEffect, useRef } from 'react';
import { Mail, Code, FileText } from 'lucide-react';
import photo from '../assets/photo.jpg';

const HeroSection = ({ scrollY }) => {
	const [typedText, setTypedText] = useState('');
	const fullText = "AI Creator";
	const heroRef = useRef(null);

	useEffect(() => {
		let index = 0;
		const timer = setInterval(() => {
			if (index <= fullText.length) {
				setTypedText(fullText.slice(0, index));
				index++;
			} else clearInterval(timer);
		}, 100);

		return () => clearInterval(timer);
	}, []);

	return (
		<div 
			ref={heroRef} 
			className="relative min-h-screen flex items-center justify-center overflow-hidden transition-opacity duration-500"
			style={{ opacity: Math.max(0, 1 - scrollY / 500) }}
		>
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 opacity-90 animate-gradient"></div>

			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
					style={{ top: '10%', left: '10%', animationDuration: '4s' }}></div>
				<div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
					style={{ bottom: '10%', right: '10%', animationDuration: '5s', animationDelay: '1s' }}></div>
				<div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
					style={{ top: '50%', left: '50%', animationDuration: '6s', animationDelay: '2s' }}></div>
			</div>

			<div className="relative z-10 text-center px-4 max-w-4xl mx-auto"
				style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
				<div className="mb-8 inline-block group">
					<div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 animate-gradient group-hover:scale-110 transition-transform duration-300">
						<img
							src={photo}
							alt="Ваше фото"
							className="w-full h-full rounded-full object-cover"
						/>
					</div>
				</div>

				<h1 className="text-6xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
					Бенедик Олександр
				</h1>
				<div className="text-2xl md:text-4xl mb-6 text-gray-300 h-12">
					<span className="border-r-2 border-purple-400 pr-2 animate-pulse">{typedText}</span>
				</div>
				<div className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed space-y-4">
					<p>
						Привіт! Я студент 3 курсу і захоплююся світом <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">генеративного штучного інтелекту</span>. Створюю текстовий і візуальний контент за допомогою таких інструментів, як ChatGPT, Midjourney, Claude, Sora та HeyGen. Кожен проєкт для мене — це можливість експериментувати, навчатися та вдосконалювати свої навички у сфері AI.
					</p>
					<p>
						Мій досвід у <span className="text-purple-300">комп'ютерних науках</span> та знання <span className="text-green-300">C#</span> і <span className="text-cyan-300">.NET</span> дозволяють підходити до AI-процесів з технічної точки зору, поєднуючи креативність із системним вирішенням задач.
					</p>
				</div>

				<div className="flex gap-4 justify-center flex-wrap">
					<a href="#contact" className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2 overflow-hidden">
						<span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
						<Mail size={20} /> Зв'язатися
					</a>
					<a href="#projects" className="group relative border-2 border-purple-500 hover:bg-purple-500 hover:bg-opacity-20 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
						<Code size={20} /> Проєкти
					</a>
					<a href="https://docs.google.com/document/d/16hGsR8xw84o26n2cHgSdq0PlNbPicySjwwP7sNX5-Mo/edit?usp=sharing" target="_blank" className="group relative border-2 border-pink-500 hover:bg-pink-500 hover:bg-opacity-20 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
						<FileText size={20} /> Приклади сценаріївz
					</a>
				</div>
				
			</div>
		</div>
	);
};

export default HeroSection;