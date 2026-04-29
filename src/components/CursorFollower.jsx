import React from 'react';

const CursorFollower = ({ mousePosition }) => {
    return (
        <div
            className="fixed w-1.5 h-2 bg-purple-500 rounded-full pointer-events-none z-50 transition-transform duration-75 ease-out shadow-[0_0_15px_rgba(168,85,247,0.8)]"
            style={{
                left: mousePosition.x,
                top: mousePosition.y,
                transform: 'translate(-50%, -50%)',
            }}
        />
    );
};

export default CursorFollower;