import React from 'react';
import { GraduationCap } from 'lucide-react';

const EducationSection = ({ visibleSections }) => {
	return (
		<section
			id="education"
			className={`py-20 px-4 transition-all duration-1000 ${visibleSections.has('education')
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-10'
			}`}
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
					<GraduationCap className="text-purple-400" size={48} /> Освіта
				</h2>

				<div className="glass rounded-2xl p-10 card-3d hover:shadow-2xl hover:shadow-purple-500/30 transition-all">
					<div className="flex items-start gap-6">
						<div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center animate-pulse">
							<GraduationCap size={40} />
						</div>

						<div>
							<h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
								Національний університет «Острозька академія»
							</h3>
							<p className="text-xl text-gray-300 mb-2">Спеціальність: Комп'ютерні науки</p>
							<p className="text-gray-400">2023 - Дотепер</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EducationSection;