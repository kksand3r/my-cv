import React, { useState } from 'react';
import SkillCard from './SkillCard';
import { skillsData } from '../data/skillsData';

const SkillsSection = ({ visibleSections }) => {
	const [selectedCategory, setSelectedCategory] = useState("All");

	return (
		<section
			id="skills"
			className={`py-20 px-4 glass transition-all duration-1000 ${visibleSections.has('skills')
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-10'
				}`}
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
					Навички та Технології
				</h2>

				<div className="flex justify-center gap-4 mb-12 flex-wrap">
					{["All", "Frontend", "Backend", "Tools", "AI", "Hardware"].map(category => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-6 py-2 rounded-full border transition-all
								${selectedCategory === category
									? "bg-purple-600 border-purple-400"
									: "border-gray-600 hover:border-purple-400"
								}`}
						>
							{category}
						</button>
					))}
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillsData
						.filter(
							skill =>
								selectedCategory === "All" ||
								skill.category === selectedCategory
						)
						.map((skill, index) => (
							<SkillCard
								key={index}
								skill={skill}
								isVisible={visibleSections.has("skills")}
							/>
						))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
