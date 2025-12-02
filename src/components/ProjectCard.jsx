import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
	return (
		
		<a
			href={project.link}
			target="_blank"
			rel="noopener noreferrer"
			className="card-3d glass rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 group cursor-pointer block"
		>
			<div className="h-56 relative overflow-hidden">
				{project.image ? (
					<img 
						src={project.image} 
						alt={project.title}
						className="w-full h-full object-cover"
					/>
				) : (
					<div className={`w-full h-full bg-gradient-to-br ${project.gradient}`}></div>
				)}
				
				<div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
					<div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
						<ExternalLink className="text-white" size={64} />
					</div>
				</div>
			</div>

			<div className="p-6">
				<h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
					{project.title}
				</h3>
				<p className="text-gray-400 mb-4">{project.description}</p>

				<div className="flex flex-wrap gap-2">
					{project.tech.map((tech, i) => (
						<span
							key={i}
							className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/50 px-3 py-1 rounded-full text-sm text-gray-300 hover:scale-110 transition-transform"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</a>
	);
};

export default ProjectCard;