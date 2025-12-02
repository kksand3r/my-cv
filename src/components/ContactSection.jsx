import React from 'react';
import { Mail, Phone, Github, MapPin } from 'lucide-react';

const ContactSection = ({ visibleSections }) => {
	return (
		<section
			id="contact"
			className={`py-20 px-4 glass transition-all duration-1000 ${visibleSections.has('contact')
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-10'
			}`}
		>
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
					Зв'яжіться зі мною
				</h2>

				<div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
					<a href="mailto:nonamesan9i@gmail.com" className="group glass p-8 rounded-2xl card-3d hover:shadow-purple-500/30 transition-all transform hover:scale-105">
						<Mail size={32} className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
						<span className="block text-lg">nonamesan9i@gmail.com</span>
					</a>

					<a href="tel:+380683261404" className="group glass p-8 rounded-2xl card-3d hover:shadow-blue-500/30 transition-all transform hover:scale-105">
						<Phone size={32} className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
						<span className="block text-lg">+380 68 326 14 04</span>
					</a>

					<a href="https://github.com/kksand3r" className="group glass p-8 rounded-2xl card-3d hover:shadow-gray-500/30 transition-all transform hover:scale-105 md:col-span-2">
						<Github size={32} className="text-gray-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
						<span className="block text-lg">github.com/kksand3r</span>
					</a>
				</div>

				<div className="flex items-center justify-center gap-3 text-gray-400 text-lg">
					<MapPin size={24} className="text-purple-400" />
					<span>Костопіль, Україна</span>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;