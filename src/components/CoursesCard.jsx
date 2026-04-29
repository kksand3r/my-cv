import React from 'react';
import { ExternalLink } from 'lucide-react';

const CoursesCard = ({ course }) => {
	return (
		
		<a
			href={course.link}
			target="_blank"
			rel="noopener noreferrer"
			className="card-3d glass rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 group cursor-pointer block"
		>
			<div className="h-56 relative overflow-hidden">
				{course.image ? (
					<img 
						src={course.image} 
						alt={course.title}
						className="w-full h-full object-cover"
					/>
				) : (
					<div className={`w-full h-full bg-gradient-to-br ${course.gradient}`}></div>
				)}
				
				<div className="absolute inset-0  group-hover:bg-opacity-20 transition-all flex items-center justify-center">
					<div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
						<ExternalLink className="text-white" size={64} />
					</div>
				</div>
			</div>

			<div className="p-6">
				<h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
					{course.title}
				</h3>
				<p className="text-gray-400">{course.description}</p>
			</div>
		</a>
	);
};

export default CoursesCard;