import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#1a1e36',
            color: '#ecf0f1',
            padding: 'var(--spacing-lg) 0 var(--spacing-md) 0'
        }}>
            <div className="container">
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 'var(--spacing-md)',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Genesi Nova</h3>
                        <p>Innovative Polyphonic Choir</p>
                        <p>Istanbul, Turkey</p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Sitemap</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Choir</a></li>
                            <li><a href="#">Podcast</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Connect</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">YouTube</a></li>
                            <li><a href="#">Spotify</a></li>
                            <li><a href="#">Email Us</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    opacity: 0.6
                }}>
                    &copy; {new Date().getFullYear()} Genesi Nova Choir. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
