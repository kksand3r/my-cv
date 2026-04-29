import React, { useState, useEffect, useRef } from 'react';
import HeroSection from "./HeroSection";
import SkillSection from "./SkillSection";
import ProjectsSection from "./ProjectSection";
import CoursesSection from "./CoursesSection";
import EducationSection from "./EducationSection";
import CreativeSection from "./CreativeSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import CursorFollower from "./CursorFollower";
import Particle from "./Particle";
import GlobalStyles from "./GlobalStyles";

const ModernCV = () => {
    const [scrollY, setScrollY] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [visibleSections, setVisibleSections] = useState(new Set());
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            const mobile = window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches;
            setIsMobile(mobile);
        };

        checkDevice();

        const handleScroll = () => {
            const scrollPos = window.scrollY;
            setScrollY(scrollPos);
            setShowScrollTop(scrollPos > 500);
        };

        const handleMouseMove = (e) => {
            if (!isMobile) {
                setMousePosition({ x: e.clientX, y: e.clientY });
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', checkDevice);
        };
    }, [isMobile]);

    useEffect(() => {
        const timer = setTimeout(() => {
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
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen relative overflow-hidden">
			<GlobalStyles />
			<div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,60,255,0.25),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,180,255,0.18),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40"></div>
        </div>

            {!isMobile && <CursorFollower mousePosition={mousePosition} />}
            <HeroSection scrollY={scrollY} />
            <SkillSection visibleSections={visibleSections} />
            <CreativeSection visibleSections={visibleSections} />
			<ProjectsSection visibleSections={visibleSections} />
			<CoursesSection visibleSections={visibleSections} />
            <EducationSection visibleSections={visibleSections} />
            <ContactSection visibleSections={visibleSections} />
            <Footer />
        </div>
    );
};

export default ModernCV;