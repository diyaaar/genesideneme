import React from 'react';
import ScrollReveal from './ScrollReveal';

const PodcastUpdates = () => {
    return (
        <section className="podcast-updates section" style={{ backgroundColor: 'var(--color-bg-offwhite)' }}>
            <div className="container">
                <ScrollReveal>
                    <h2 style={{
                        textAlign: 'center',
                        marginBottom: 'var(--spacing-lg)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        Podcast'teki Son Gelişmeler
                    </h2>

                    <div className="podcast-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 'var(--spacing-md)',
                        alignItems: 'center',
                        background: '#fff',
                        padding: '2rem',
                        borderRadius: '16px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
                    }}>
                        {/* Left: Visual */}
                        <div className="visual" style={{
                            height: '300px',
                            background: 'linear-gradient(135deg, var(--color-primary), #000)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            borderRadius: '8px',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 10px 20px rgba(40, 46, 80, 0.3)'
                        }}>
                            <span style={{ fontSize: '4rem', opacity: 0.2 }}>🎙️</span>
                            <span style={{ position: 'absolute', bottom: '20px', left: '20px', fontWeight: 'bold' }}>EPISODE #42</span>
                        </div>

                        {/* Center: Links */}
                        <div className="links" style={{ textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.8rem' }}>The Sound of Genesis</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                                <button className="btn" style={{ width: '200px', borderRadius: '30px' }}>Listen on Spotify</button>
                                <button className="btn" style={{ width: '200px', borderRadius: '30px' }}>Apple Podcasts</button>
                                <button className="btn" style={{ width: '200px', borderRadius: '30px' }}>Watch on YouTube</button>
                            </div>
                        </div>

                        {/* Right: Description */}
                        <div className="desc" style={{ padding: '1rem', borderLeft: '1px solid #eee' }}>
                            <h4 style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }}>About this Episode</h4>
                            <p style={{ lineHeight: '1.8', color: '#555' }}>
                                In this latest episode, we discuss the intricacies of our recent performance
                                and dive deep into the history of the pieces we performed. Join us for an
                                insightful conversation with the choir director.
                            </p>
                            <br />
                            <a href="#" style={{
                                fontWeight: 600,
                                borderBottom: '2px solid var(--color-secondary)',
                                paddingBottom: '2px'
                            }}>View All Episodes &rarr;</a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default PodcastUpdates;
