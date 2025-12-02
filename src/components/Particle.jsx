import React from 'react';

const Particle = ({ delay, duration, x, y }) => (
	<div
		className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-30"
		style={{
			left: `${x}%`,
			top: `${y}%`,
			animation: `float ${duration}s ease-in-out infinite`,
			animationDelay: `${delay}s`,
		}}
	/>
);

export default Particle;