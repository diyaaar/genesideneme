import React from 'react';
import ScrollReveal from './ScrollReveal';

const BlogUpdates = () => {
    const posts = [
        {
            id: 1,
            title: "The Power of Polyphony",
            excerpt: "Exploring how multiple voices come together to create a unified sound...",
            image: "#"
        },
        {
            id: 2,
            title: "Behind the Scenes: Rehearsals",
            excerpt: "A look into our weekly preparation and the dedication of our members...",
            image: "#"
        },
        {
            id: 3,
            title: "Upcoming Tour Announcement",
            excerpt: "We are excited to announce our summer tour dates across the region...",
            image: "#"
        }
    ];

    return (
        <section className="blog-updates section">
            <div className="container">
                <ScrollReveal>
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)', textTransform: 'uppercase' }}>Latest Blog Updates</h2>

                    <div className="blog-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 'var(--spacing-md)'
                    }}>
                        {posts.map(post => (
                            <article key={post.id} className="blog-card" style={{
                                backgroundColor: 'var(--color-bg-light)',
                                border: '1px solid #eee',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                transition: 'all 0.4s ease',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 30px rgba(0,0,0,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                                }}
                            >
                                <div className="card-image" style={{
                                    height: '200px',
                                    backgroundColor: '#ddd',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#666',
                                    background: 'linear-gradient(to bottom, #eee, #ddd)'
                                }}>
                                    <span style={{ fontSize: '2rem', opacity: 0.5 }}>📝</span>
                                </div>
                                <div className="card-content" style={{ padding: '1.5rem' }}>
                                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>{post.title}</h3>
                                    <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>{post.excerpt}</p>
                                    <span style={{
                                        color: 'var(--color-primary)',
                                        fontWeight: '600',
                                        fontSize: '0.9rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        borderBottom: '1px solid transparent',
                                        transition: 'border-color 0.3s'
                                    }}>Read Article &rarr;</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default BlogUpdates;
