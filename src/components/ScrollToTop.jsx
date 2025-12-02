import React from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = ({ showScrollTop }) => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	if (!showScrollTop) return null;

	return (
		<button
			onClick={scrollToTop}
			className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 p-4 rounded-full shadow-2xl shadow-purple-500/50 transition-all transform hover:scale-110 z-50 animate-bounce"
		>
			<ChevronUp size={24} />
		</button>
	);
};

export default ScrollToTop;