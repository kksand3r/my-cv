import React from 'react';
import { Code } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

const ProjectsSection = ({ visibleSections }) => {
	return (
		<section
			id="projects"
			className={`py-20 px-4 glass transition-all duration-1000 ${visibleSections.has('projects')
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-10'
			}`}
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
					<Code className="text-purple-400" size={48} /> Проєкти
				</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projectsData.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;