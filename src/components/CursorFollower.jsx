import React from 'react';

const CursorFollower = ({ mousePosition }) => {
	return (
		<div
			className="fixed w-8 h-8 border-2 border-purple-500 rounded-full pointer-events-none z-50 transition-transform duration-100"
			style={{
				left: mousePosition.x - 16,
				top: mousePosition.y - 16,
				transform: 'translate(-50%, -50%)',
			}}
		/>
	);
};

export default CursorFollower;