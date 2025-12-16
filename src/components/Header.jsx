import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [activeSection, setActiveSection] = React.useState('home');
    const [isSticky, setIsSticky] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            // Update sticky state
            setIsSticky(window.scrollY > 50);

            // Update active section
            const sections = ['home', 'about', 'collab', 'media', 'podcast', 'blog', 'store', 'contact'];
            let current = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If top of section is within the viewport (with some offset)
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Home', 'About', 'Collab', 'Media', 'Podcast', 'Blog', 'Store', 'Contact'];

    return (
        <header className={`header-container ${isSticky ? 'sticky-header' : ''}`}>
            {/* Abstract Spiral-like SVG Background Element */}
            <div className="header-bg-decoration">
                <svg width="100%" height="100%" viewBox="0 0 1440 300" preserveAspectRatio="none">
                    <path
                        d="M0,150 C300,100 600,200 900,150 C1200,100 1440,150 1440,150"
                        fill="none"
                        stroke="rgba(186, 180, 162, 0.1)"
                        strokeWidth="1"
                    />
                    <path
                        d="M0,180 C400,120 700,220 1000,160 C1300,100 1440,180 1440,180"
                        fill="none"
                        stroke="rgba(40, 46, 80, 0.2)"
                        strokeWidth="1"
                    />
                </svg>
            </div>

            <div className="header-content">
                <div className="logo-container">
                    <a href="#home">
                        <img
                            src="/genesi_nova.svg"
                            alt="Genesi Nova Logo"
                            className="header-logo"
                        />
                    </a>
                </div>

                <nav>
                    <motion.ul
                        className="nav-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {navItems.map((item) => {
                            const sectionId = item.toLowerCase();
                            const isActive = activeSection === sectionId;

                            return (
                                <li key={item}>
                                    <a
                                        href={`#${sectionId}`}
                                        className={`nav-link ${isActive ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById(sectionId);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            );
                        })}
                    </motion.ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
