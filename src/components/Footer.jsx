import React from 'react';

const Footer = () => {
	return (
		<footer className="py-10 text-center text-gray-500 border-t border-gray-800 relative">
			<div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
			<p className="relative z-10 text-lg">© 2025 Бенедик Олександр. Всі права захищені.</p>
			<p className="relative z-10 text-sm mt-2">Створено з ❤️ та React</p>
		</footer>
	);
};

export default Footer;