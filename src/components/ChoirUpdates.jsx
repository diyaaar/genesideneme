import React from 'react';
import ScrollReveal from './ScrollReveal';

const ChoirUpdates = () => {
    return (
        <section className="choir-updates section" style={{ position: 'relative' }}>
            <div className="container">
                <ScrollReveal>
                    <h2 style={{
                        textAlign: 'center',
                        marginBottom: 'var(--spacing-md)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        Latest Choir Updates
                    </h2>

                    <div className="update-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {/* Video Placeholder */}
                        <div className="video-wrapper" style={{
                            position: 'relative',
                            paddingBottom: '56.25%', /* 16:9 */
                            height: 0,
                            backgroundColor: '#000',
                            marginBottom: 'var(--spacing-md)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                            borderRadius: '12px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                flexDirection: 'column',
                                background: 'linear-gradient(45deg, #1a1e36, #282e50)'
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    border: '2px solid rgba(255,255,255,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1rem',
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(10px)',
                                    background: 'rgba(255,255,255,0.1)'
                                }}>
                                    <span style={{ fontSize: '2rem', marginLeft: '5px' }}>▶</span>
                                </div>
                                <p style={{ letterSpacing: '1px', opacity: 0.7 }}>LATEST PERFORMANCE</p>
                            </div>
                        </div>

                        <div className="text-content" style={{
                            textAlign: 'center',
                            padding: '2rem',
                            background: 'rgba(255,255,255,0.5)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.4)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                        }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                                Winter Solstice Performance
                            </h3>
                            <p style={{ marginBottom: '2rem', opacity: 0.8, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                                A beautiful polyphonic arrangement performed at our latest concert.
                                This piece explores the depths of harmony and rhythm, bringing together voices in perfect unison.
                            </p>
                            <a href="#" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Read More / See Photos</a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default ChoirUpdates;
