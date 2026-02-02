import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [activeSection, setActiveSection] = React.useState('home');
    const [isSticky, setIsSticky] = React.useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const isStorePage = location.pathname === '/store';
    const isCollabPage = location.pathname === '/collab';
    const isBlogPage = location.pathname.startsWith('/blog');
    const isMediaPage = location.pathname === '/media';
    const isPodcastPage = location.pathname === '/podcast';
    const isContactPage = location.pathname === '/contact';

    React.useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);

            if (isStorePage) {
                setActiveSection('store');
                return;
            }
            if (isCollabPage) {
                setActiveSection('collab');
                return;
            }
            if (isBlogPage) {
                setActiveSection('blog');
                return;
            }
            if (isMediaPage) {
                setActiveSection('media');
                return;
            }
            if (isPodcastPage) {
                setActiveSection('podcast');
                return;
            }
            if (isContactPage) {
                setActiveSection('contact');
                return;
            }

            // Active section logic for Homepage
            const sections = ['home', 'about', 'media', 'podcast', 'contact'];
            let current = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger once

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isStorePage, isCollabPage, isBlogPage, isMediaPage, isPodcastPage, isContactPage]);

    const handleNavClick = (e, item) => {
        e.preventDefault();
        const sectionId = item.toLowerCase();

        if (sectionId === 'store') {
            navigate('/store');
            return;
        }

        if (sectionId === 'collab') {
            navigate('/collab');
            return;
        }

        if (sectionId === 'blog') {
            navigate('/blog');
            return;
        }

        if (sectionId === 'media') {
            navigate('/media');
            return;
        }

        if (sectionId === 'podcast') {
            navigate('/podcast');
            return;
        }

        if (sectionId === 'contact') {
            navigate('/contact');
            return;
        }

        if (sectionId === 'home') {
            if (isStorePage || isCollabPage || isBlogPage || isMediaPage || isContactPage) {
                navigate('/');
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return;
        }

        // For other sections (About, etc.)
        if (isStorePage || isCollabPage || isBlogPage || isMediaPage || isPodcastPage || isContactPage) {
            // If on Store page, navigate to Home and then scroll (simulated by passing hash)
            // Ideally navigate to combined path, but simple navigate works
            navigate('/');
            // A small timeout to let page load before scrolling (naive but functional for minimal app)
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            // Already on Home
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

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
                    <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                        <OptimizedImage
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

                            let href = `/#${sectionId}`;
                            if (sectionId === 'store') href = '/store';
                            if (sectionId === 'collab') href = '/collab';
                            if (sectionId === 'blog') href = '/blog';
                            if (sectionId === 'media') href = '/media';
                            if (sectionId === 'podcast') href = '/podcast';
                            if (sectionId === 'contact') href = '/contact';

                            return (
                                <li key={item}>
                                    <a
                                        href={href}
                                        className={`nav-link ${isActive ? 'active' : ''}`}
                                        onClick={(e) => handleNavClick(e, item)}
                                    >
                                        {t(`header.${sectionId}`)}
                                    </a>
                                </li>
                            );
                        })}
                        {/* Language Switcher */}
                        <li key="lang-switcher" className="lang-switcher-item">
                            <div className="language-switcher">
                                <span
                                    className={`lang-opt ${i18n.language === 'tr' ? 'active' : ''}`}
                                    onClick={() => i18n.changeLanguage('tr')}
                                >
                                    TR
                                </span>
                                <span className="lang-sep">|</span>
                                <span
                                    className={`lang-opt ${i18n.language === 'en' ? 'active' : ''}`}
                                    onClick={() => i18n.changeLanguage('en')}
                                >
                                    EN
                                </span>
                            </div>
                        </li>
                    </motion.ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
