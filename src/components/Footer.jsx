import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import OptimizedImage from './OptimizedImage';
import './Footer.css';

// Import Social Icons
import instaIcon from '../assets/icons/instagram.svg';
import spotifyIcon from '../assets/icons/spotify.svg';
import youtubeIcon from '../assets/icons/youtube.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import tiktokIcon from '../assets/icons/tiktok.svg';

const SocialIcon = ({ name, href, src }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label={name}
        onClick={(e) => !href || href === '#' ? e.preventDefault() : null}
        style={{ cursor: !href || href === '#' ? 'default' : 'pointer' }}
    >
        <OptimizedImage
            src={src}
            alt={name}
            className="social-icon-img"
        />
    </a>
);

const Footer = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribed:', { name, email });
        alert("Thank you for subscribing! We'll keep you updated.");
        setName('');
        setEmail('');
    };

    React.useEffect(() => {
        const handleSync = (e) => {
            const { email: syncedEmail } = e.detail;
            if (syncedEmail) {
                setEmail(syncedEmail);
                setName(''); // Ensure name is empty

                const newsletterSection = document.getElementById('newsletter-section');
                const emailInput = document.getElementById('footer-email-input');

                if (newsletterSection) {
                    newsletterSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Remove class first to re-trigger animation if needed
                    newsletterSection.classList.remove('highlight-subtly');
                    // Force reflow
                    void newsletterSection.offsetWidth;
                    newsletterSection.classList.add('highlight-subtly');

                    setTimeout(() => {
                        newsletterSection.classList.remove('highlight-subtly');
                    }, 2000);
                }

                if (emailInput) {
                    // Small delay to allow scroll to settle before focus
                    setTimeout(() => {
                        emailInput.focus({ preventScroll: true });
                    }, 600);
                }
            }
        };

        window.addEventListener('footer-subscribe-sync', handleSync);
        return () => window.removeEventListener('footer-subscribe-sync', handleSync);
    }, []);

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <ScrollReveal>
                    <div className="footer-content">
                        {/* Column 1: Brand, Newsletter, & Socials */}
                        <div className="brand-column">
                            <div className="brand-info">
                                <h2>Genesi Nova</h2>

                            </div>

                            {/* Compact Newsletter */}
                            <div id="newsletter-section" className="compact-newsletter">
                                <h4 className="compact-title">Let’s stay close.</h4>
                                <p className="newsletter-subtext">No worries, we promise not to be a nuisance.</p>
                                <form className="newsletter-form-compact" onSubmit={handleSubscribe}>
                                    <div className="input-row">
                                        <input
                                            type="text"
                                            placeholder="Full Name *"
                                            className="compact-input"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                        <input
                                            id="footer-email-input"
                                            type="email"
                                            placeholder="Email Address *"
                                            className="compact-input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="compact-submit-btn">
                                        Subscribe
                                    </button>
                                </form>
                            </div>

                            <div className="social-links">
                                <SocialIcon name="Instagram" href="https://www.instagram.com/genesi_nova/" src={instaIcon} />
                                <SocialIcon name="YouTube" href="http://youtube.com/@GenesiNovaChoir" src={youtubeIcon} />
                                <SocialIcon name="Spotify" href="#" src={spotifyIcon} />
                                <SocialIcon name="LinkedIn" href="https://www.linkedin.com/company/genesi-nova-choir/" src={linkedinIcon} />
                                <SocialIcon name="TikTok" href="#" src={tiktokIcon} />
                            </div>
                        </div>

                        {/* Column 2: More About Us */}
                        <div>
                            <span className="footer-col-title">More About Us</span>
                            <div className="footer-links">
                                <Link to="/about" className="footer-link">About Us</Link>
                                <Link to="/contact" className="footer-link">Contact</Link>
                                <Link to="/store" className="footer-link">Store</Link>
                                <Link to="/collab" className="footer-link">Collab</Link>
                            </div>
                        </div>

                        {/* Column 3: Creative Works */}
                        <div>
                            <span className="footer-col-title">Creative Works</span>
                            <div className="footer-links">
                                <Link to="/choir" className="footer-link">Choir</Link>
                                <Link to="/podcast" className="footer-link">Podcast</Link>
                                <Link to="/media" className="footer-link">Media</Link>
                                <Link to="/blog" className="footer-link">Blog</Link>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Genesi Nova Choir. All rights reserved.</p>
                    </div>
                </ScrollReveal>
            </div>
        </footer>
    );
};

export default Footer;
