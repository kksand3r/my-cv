import React from 'react';

const SkillCard = ({ skill, isVisible }) => {
	return (
		<div className="group card-3d glass rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300">
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center gap-3">
					<span className="text-4xl">{skill.icon}</span>
					<span className="font-bold text-xl">{skill.name}</span>
				</div>
				<span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
					{skill.level}%
				</span>
			</div>

			<div className="relative h-4 bg-gray-700 rounded-full overflow-hidden">
				<div
					className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
					style={{ width: isVisible ? `${skill.level}%` : "0%" }}
				>
					<div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
				</div>
			</div>
		</div>
	);
};

export default SkillCard;