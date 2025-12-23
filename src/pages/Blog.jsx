import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import TypewriterText from '../components/TypewriterText';
import OptimizedImage from '../components/OptimizedImage';
import './Blog.css';

// Import Assets
import blogMain from '../assets/images/blog-large.webp';
import choirImg from '../assets/images/choir-large.webp';
import podcastImg from '../assets/images/podcast-large.webp';
import blogSmall from '../assets/images/blog-small.webp';
import choirSmall from '../assets/images/choir-small.webp';

const POSTS = [
    {
        id: 1,
        title: "Echoes from the Past: The Making of Our New Album",
        excerpt: "Journey with us as we explore the ancient acoustics that inspired our latest collection of polyphonic arrangements.",
        category: "Behind the Scenes",
        image: choirImg,
        date: "Dec 15, 2024",
        readTime: "5 min read",
        author: "Sarah Jenkins"
    },
    {
        id: 2,
        title: "The Science of Harmony: Why We Love Chords",
        excerpt: "A deep dive into the psychoacoustics of harmony and why certain chord progressions trigger such powerful emotional responses.",
        category: "Music Theory",
        image: podcastImg,
        date: "Dec 02, 2024",
        readTime: "8 min read",
        author: "Dr. Alan Grant"
    },
    {
        id: 3,
        title: "Vocal Health 101 for Touring Choirs",
        excerpt: "Essential tips and warm-up routines that keep our voices crystal clear during our intense touring schedule.",
        category: "Education",
        image: blogSmall,
        date: "Nov 28, 2024",
        readTime: "4 min read",
        author: "Elena Fisher"
    },
    {
        id: 4,
        title: "Interview: The Future of Choral Music",
        excerpt: "We sat down with contemporary composer Eric Whitacre to discuss where choral music is heading in the digital age.",
        category: "Interviews",
        image: choirSmall,
        date: "Nov 15, 2024",
        readTime: "12 min read",
        author: "Genesi Team"
    }
];

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Behind the Scenes', 'Music Theory', 'Education', 'Interviews'];

    const filteredPosts = activeCategory === 'All'
        ? POSTS
        : POSTS.filter(post => post.category === activeCategory);

    const handleSubscribeScroll = () => {
        const newsletterSection = document.getElementById('newsletter-section');
        if (newsletterSection) {
            newsletterSection.scrollIntoView({ behavior: 'smooth' });
            newsletterSection.classList.add('highlight-subtly');
            setTimeout(() => {
                newsletterSection.classList.remove('highlight-subtly');
            }, 2000);
        }
    };

    return (
        <div className="blog-page">
            <main>
                {/* Intro Section - Editorial Opening */}
                <section className="blog-intro-section">
                    <div className="blog-intro-content">
                        <motion.div
                            className="blog-eyebrow"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            The Notebook
                        </motion.div>
                        <motion.h1
                            className="blog-intro-headline"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Ideas behind the music,
                            <br />
                            <span className="italic">Inspirations shaping our journey.</span>
                        </motion.h1>

                        <motion.div
                            className="blog-intro-cta"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            onClick={handleSubscribeScroll}
                        >
                            Subscribe to our Notebook →
                        </motion.div>
                    </div>
                </section>

                {/* Hero Section - Featured Post */}
                <ScrollReveal>
                    <section className="blog-hero">
                        <div className="blog-hero-image-wrapper">
                            <OptimizedImage
                                src={blogMain}
                                alt="Featured Blog Post"
                                className="blog-hero-img"
                            />
                        </div>
                        <div className="blog-hero-content">
                            <div className="blog-hero-meta">
                                <span className="category-tag">Featured</span>
                                <span className="divider">•</span>
                                <span className="date">Dec 20, 2024</span>
                            </div>
                            <h2 className="blog-hero-title">
                                The Resurgence of Polyphony in Modern Pop
                            </h2>
                            <p className="blog-hero-excerpt">
                                From Billie Eilish to Jacob Collier, complex vocal layering is making a massive comeback. We explore how classical techniques are shaping the future of pop music.
                            </p>
                            <div className="author-block">
                                <div className="author-avatar" style={{ background: '#bab4a2' }}></div>
                                <div>
                                    <p className="author-name">By Marcus Thorne</p>
                                    <span className="reading-time">10 min read</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Filter Navigation */}
                <nav className="blog-nav">
                    <div className="blog-nav-container">
                        <div className="blog-categories">
                            {categories.map(cat => (
                                <span
                                    key={cat}
                                    className={`category-link ${activeCategory === cat ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                        {/* Optional Search Icon or minimal input here */}
                    </div>
                </nav>

                {/* Main Grid */}
                <div className="blog-grid">
                    {filteredPosts.map((post, index) => (
                        <ScrollReveal key={post.id} delay={index * 0.1}>
                            <a href={`/blog/${post.id}`} className="blog-card">
                                <div className="blog-card-image-wrapper">
                                    <OptimizedImage
                                        src={post.image}
                                        alt={post.title}
                                        className="blog-card-img"
                                    />
                                </div>
                                <div className="blog-card-content">
                                    <div className="blog-card-meta">
                                        <span className="category-tag">{post.category}</span>
                                        <span className="divider">•</span>
                                        <span className="read-time">{post.readTime}</span>
                                    </div>
                                    <h3 className="blog-card-title">{post.title}</h3>
                                    <p className="blog-card-excerpt">{post.excerpt}</p>
                                    <div className="author-block">
                                        <div className="author-name">By {post.author}</div>
                                    </div>
                                </div>
                            </a>
                        </ScrollReveal>
                    ))}

                    {/* Newsletter In-Stream */}
                    <ScrollReveal>
                        <div className="blog-newsletter-section">
                            <h3 className="blog-newsletter-title">Subscribe to our Notebook</h3>
                            <p className="blog-newsletter-subtitle">
                                Get the latest stories, theory deep-dives, and concert announcements delivered to your inbox.
                            </p>
                            <button
                                className="btn btn-primary"
                                style={{ padding: '0.8rem 3rem' }}
                                onClick={() => {
                                    const footerNewsletter = document.getElementById('newsletter-section');
                                    if (footerNewsletter) {
                                        footerNewsletter.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                SUBSCRIBE
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </main>
        </div>
    );
};

export default Blog;
