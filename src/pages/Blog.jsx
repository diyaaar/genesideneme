import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import TypewriterText from '../components/TypewriterText';
import OptimizedImage from '../components/OptimizedImage';
import HeroTypewriterHeadlines from '../components/HeroTypewriterHeadlines';
import './Blog.css';

// Import Assets
// Import Assets
import manifest from '../lib/media/manifest.json';

const blogMain = manifest['blog-hero'];
const choirImg = manifest['choir-hero'];
const podcastImg = manifest['podcast-hero'];
// Reuse the same assets for small versions, the component handles sizing
const blogSmall = manifest['blog-hero'];
const choirSmall = manifest['choir-hero'];

// Sample blog headlines for typewriter effect
const TYPEWRITER_HEADLINES = [
    "The Resurgence of Polyphony in Modern Pop",
    "Echoes from the Past: The Making of Our New Album",
    "The Science of Harmony: Why We Love Chords",
    "Vocal Health 101 for Touring Choirs",
    "Interview: The Future of Choral Music"
];

const POSTS = [
    {
        id: 1,
        title: "Echoes from the Past: The Making of Our New Album",
        excerpt: "Journey with us as we explore the ancient acoustics that inspired our latest collection of polyphonic arrangements.",
        category: "Behind the Scenes",
        image: choirImg,
        date: "Dec 15, 2024",
        readTime: "5 min read",
        author: {
            name: "Sarah Jenkins",
            initials: "SJ",
            avatarColor: "#a89080",
            instagram: "https://instagram.com/sarahjenkins",
            twitter: "https://twitter.com/sarahjenkins"
        }
    },
    {
        id: 2,
        title: "The Science of Harmony: Why We Love Chords",
        excerpt: "A deep dive into the psychoacoustics of harmony and why certain chord progressions trigger such powerful emotional responses.",
        category: "Music Theory",
        image: podcastImg,
        date: "Dec 02, 2024",
        readTime: "8 min read",
        author: {
            name: "Dr. Alan Grant",
            initials: "AG",
            avatarColor: "#8a9ba8",
            instagram: "https://instagram.com/alangrant",
            twitter: "https://twitter.com/alangrant"
        }
    },
    {
        id: 3,
        title: "Vocal Health 101 for Touring Choirs",
        excerpt: "Essential tips and warm-up routines that keep our voices crystal clear during our intense touring schedule.",
        category: "Education",
        image: blogSmall,
        date: "Nov 28, 2024",
        readTime: "4 min read",
        author: {
            name: "Elena Fisher",
            initials: "EF",
            avatarColor: "#b4a89a",
            instagram: "https://instagram.com/elenafisher",
            twitter: "https://twitter.com/elenafisher"
        }
    },
    {
        id: 4,
        title: "Interview: The Future of Choral Music",
        excerpt: "We sat down with contemporary composer Eric Whitacre to discuss where choral music is heading in the digital age.",
        category: "Interviews",
        image: choirSmall,
        date: "Nov 15, 2024",
        readTime: "12 min read",
        author: {
            name: "Genesi Team",
            initials: "GT",
            avatarColor: "#9a8a7a",
            instagram: "https://instagram.com/genesinovachoir",
            twitter: "https://twitter.com/genesinovachoir"
        }
    }
];

const Blog = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Behind the Scenes', 'Music Theory', 'Education', 'Interviews'];

    // Refs for dynamic typewriter positioning
    const subscribeCtaRef = useRef(null);
    const notebookRef = useRef(null);
    const introRef = useRef(null);

    // Parallax Logic matching Home Page
    const { scrollYProgress } = useScroll({
        target: introRef,
        offset: ["start start", "end start"]
    });

    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const yContent = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "100%"]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 1 : 0]);

    const filteredPosts = activeCategory === 'All'
        ? POSTS
        : POSTS.filter(post => post.category === activeCategory);

    const handleSubscribeScroll = () => {
        const newsletterSection = document.getElementById('newsletter-section');
        if (newsletterSection) {
            const isMobile = window.innerWidth <= 768;

            if (isMobile) {
                // Mobile: Custom scroll with larger offset to prevent footer overshoot
                const targetPosition = newsletterSection.getBoundingClientRect().top + window.pageYOffset;
                const offset = 180; // Generous offset for mobile - lands above footer
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: 'smooth'
                });
            } else {
                // Desktop: Use scrollIntoView with scroll-margin-top
                newsletterSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                    // Respects scroll-margin-top CSS property for proper offset
                });
            }

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
                <section
                    ref={introRef}
                    className="blog-intro-section"
                    style={{
                        position: 'relative',
                        zIndex: 10
                    }}
                >
                    <motion.div
                        style={{
                            y: yContent,
                            opacity: opacityContent,
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                            willChange: 'transform, opacity'
                        }}
                    >
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
                                ref={subscribeCtaRef}
                                className="blog-intro-cta"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                onClick={handleSubscribeScroll}
                            >
                                Subscribe to our Notebook →
                            </motion.div>
                        </div>

                        {/* Center-Screen Typewriter Headlines */}
                        <HeroTypewriterHeadlines
                            headlines={TYPEWRITER_HEADLINES}
                            subscribeRef={subscribeCtaRef}
                            notebookRef={notebookRef}
                        />

                        {/* Notebook Icon - Bottom Positioned */}
                        <motion.div
                            ref={notebookRef}
                            className="notebook-group"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1.5 }}
                            onClick={() => {
                                const target = document.getElementById('featured-post');
                                if (target) {
                                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                                    const offset = 120; // Natural offset space above section
                                    window.scrollTo({
                                        top: targetPosition - offset,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                        >
                            <img
                                src="/blog_page_notebook.svg"
                                alt="Notebook"
                                style={{
                                    width: '36px',
                                    height: 'auto',
                                    opacity: 0.6,
                                    filter: 'brightness(0) invert(1)'
                                }}
                            />
                            <span className="notebook-label">READ OUR NOTEBOOK</span>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Hero Section - Featured Post */}
                <div style={{ position: 'relative', zIndex: 20, backgroundColor: '#05060a' }}>
                    <ScrollReveal>
                        <div
                            className="blog-hero"
                            id="featured-post"
                            onClick={() => navigate('/blog/featured')}
                            role="link"
                            tabIndex={0}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="blog-hero-image-wrapper">
                                <OptimizedImage
                                    src={blogMain}
                                    alt="Featured Blog Post"
                                    className="blog-hero-img"
                                    priority={true}
                                    sizes="100vw"
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

                                {/* Featured Author Metadata - Refined */}
                                <div className="featured-author-metadata">
                                    <div className="author-info">
                                        <div className="author-avatar" style={{ backgroundColor: '#bab4a2' }}>
                                            MT
                                        </div>
                                        <div className="author-details">
                                            <div className="author-name">Marcus Thorne</div>
                                            <time className="post-date">Dec 20, 2024</time>
                                        </div>
                                    </div>
                                    <div className="author-social">
                                        <span className="follow-label">Follow</span>
                                        <a
                                            href="https://instagram.com/marcusthorne"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <img src="/instagram.svg" alt="Instagram" />
                                        </a>
                                        <a
                                            href="https://twitter.com/marcusthorne"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <img src="/twitter.svg" alt="Twitter" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <div
                                    className="blog-card"
                                    onClick={() => navigate(`/blog/${post.id}`)}
                                    role="link"
                                    tabIndex={0}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="blog-card-image-wrapper">
                                        <OptimizedImage
                                            src={post.image}
                                            alt={post.title}
                                            className="blog-card-img"
                                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
                                        {/* Author Metadata Block */}
                                        <div className="author-metadata">
                                            <div className="author-info">
                                                <div
                                                    className="author-avatar"
                                                    style={{ backgroundColor: post.author.avatarColor }}
                                                >
                                                    {post.author.initials}
                                                </div>
                                                <div className="author-details">
                                                    <div className="author-name">{post.author.name}</div>
                                                    <time className="post-date">{post.date}</time>
                                                </div>
                                            </div>
                                            <div className="author-social">
                                                <span className="follow-label">Follow</span>
                                                <a
                                                    href={post.author.instagram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="social-link"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <img src="/instagram.svg" alt="Instagram" />
                                                </a>
                                                <a
                                                    href={post.author.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="social-link"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <img src="/twitter.svg" alt="Twitter" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}


                    </div>
                </div>
            </main>
        </div>
    );
};

export default Blog;
