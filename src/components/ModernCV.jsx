import React, { useState, useEffect, useRef } from 'react';
import HeroSection from "./HeroSection";
import SkillSection from "./SkillSection";
import ProjectsSection from "./ProjectSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import CursorFollower from "./CursorFollower";
import Particle from "./Particle";
import GlobalStyles from "./GlobalStyles";


const ModernCV = () => {
	const [scrollY, setScrollY] = useState(0);
	const [showScrollTop, setShowScrollTop] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [visibleSections, setVisibleSections] = useState(new Set());

	useEffect(() => {
		const handleScroll = () => {
			const scrollPos = window.scrollY;
			setScrollY(scrollPos);
			setShowScrollTop(scrollPos > 500);
		};

		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setVisibleSections(prev => new Set([...prev, entry.target.id]));
					}
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll('section[id]').forEach(section => {
			observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div className="bg-gray-900 text-gray-100 min-h-screen relative overflow-hidden">
			<GlobalStyles />
			<CursorFollower mousePosition={mousePosition} />

			{[...Array(20)].map((_, i) => (
				<Particle
					key={i}
					delay={i * 0.5}
					duration={5 + Math.random() * 5}
					x={Math.random() * 100}
					y={Math.random() * 100}
				/>
			))}

			<HeroSection scrollY={scrollY} />
			<SkillSection visibleSections={visibleSections} />
			<ProjectsSection visibleSections={visibleSections} />
			<EducationSection visibleSections={visibleSections} />
			<ContactSection visibleSections={visibleSections} />
			<Footer />
			<ScrollToTop showScrollTop={showScrollTop} />
		</div>
	);
};

export default ModernCV;