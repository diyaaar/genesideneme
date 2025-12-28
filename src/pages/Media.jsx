import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from '../components/OptimizedImage';
import EventModal from '../components/EventModal';
import './Media.css';

// Import Assets
import blogLarge from '../assets/images/blog-large.webp';
import blogSmall from '../assets/images/blog-small.webp';
import choirLarge from '../assets/images/choir-large.webp';
import choirSmall from '../assets/images/choir-small.webp';
import podcastLarge from '../assets/images/podcast-large.webp';
import podcastSmall from '../assets/images/podcast-small.webp';

// Consolidating all media into "Events"
const MEDIA_EVENTS = [
    {
        id: 'holyween',
        title: 'Holyween',
        category: 'Performances',
        date: 'Nov 01, 2025',
        venue: 'En Passant, Beyoğlu',
        description: 'Together with Şalter, Genesi Nova transformed En Passant into a living soundscape. In a church-turned-stage, voices echoed beyond genre, creating a night shaped by ritual, presence, and shared listening.',
        images: [
            'https://res.cloudinary.com/dfwioqqgc/image/upload/v1766945202/11_lbchr0.jpg',
            'https://res.cloudinary.com/dfwioqqgc/image/upload/v1766945202/8_pbopqq.jpg',
            'https://res.cloudinary.com/dfwioqqgc/image/upload/v1766945201/9_nwobjl.jpg',
            'https://res.cloudinary.com/dfwioqqgc/image/upload/v1766945200/7_q8k0e5.jpg',
            'https://res.cloudinary.com/dfwioqqgc/image/upload/v1766945200/10_zbkzcd.jpg',
            'https://res.cloudinary.com/dfwioqqgc/image/upload/v1766945199/6_o9a5tp.jpg',
            'https://res.cloudinary.com/dfwioqqgc/image/upload/v1766945198/5_g4fqc3.jpg',
            'https://res.cloudinary.com/dfwioqqgc/image/upload/v1766945198/4_tfchzd.jpg',
            'https://res.cloudinary.com/dfwioqqgc/video/upload/v1766945650/IMG_6199_hvib3p.mov',
            'https://res.cloudinary.com/dfwioqqgc/video/upload/v1766945639/IMG_6171_izcsrn.mov'
        ],
        links: [
            { label: 'View Collab', url: '/collab', type: 'primary' }
        ],
        type: 'performance'
    },
    {
        id: 1,
        title: 'Winter Solstice Concert 2024',
        category: 'Performances',
        date: 'Dec 21, 2024',
        venue: 'Metropolitan Cathedral',
        description: 'A full recording of our annual winter performance. The acoustics of the cathedral provided a natural reverb that enhanced our polyphonic arrangements, creating a truly ethereal atmosphere for the 2,000 attendees.',
        images: [
            'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200'
        ],
        links: [
            { label: 'Watch Full Concert', url: 'https://youtube.com', type: 'primary' },
            { label: 'View Gallery', url: '#', type: 'secondary' }
        ],
        type: 'performance'
    },
    {
        id: 2,
        title: 'Morning Echoes Rehearsal',
        category: 'Rehearsals',
        date: 'Nov 12, 2024',
        venue: 'Studio A',
        description: 'Capturing the first light in the rehearsal hall. Before the world wakes up, we find our harmony in the quiet moments of dawn. This session focused on the intricate layers of our upcoming album.',
        images: [
            'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200'
        ],
        links: [
            { label: 'View on Instagram', url: 'https://instagram.com/genexinova' }
        ],
        type: 'rehearsal'
    },
    {
        id: 3,
        title: 'The Velvet Night Gala',
        category: 'Galas',
        date: 'Oct 15, 2024',
        venue: 'Grand Opera House',
        description: 'An evening of classical reimagining and velvet-draped stages. We collaborated with the National Orchestra to bring a fusion of choral and symphonic sound to life.',
        images: [
            'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1544211086-6eff66f9776f?auto=format&fit=crop&q=80&w=1200'
        ],
        links: [
            { label: 'Event Recap', url: '#' },
            { label: 'Sponsor Info', url: '#' }
        ],
        type: 'event'
    },
    {
        id: 4,
        title: 'Crafting the Harmony',
        category: 'Behind the Scenes',
        date: 'Sep 28, 2024',
        venue: 'Main Hall',
        description: 'A look into our vocal arrangement process and collective ritual. See how we break down complex chords into individual vocal lines.',
        images: [
            'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200'
        ],
        links: [
            { label: 'Watch Documentary', url: 'https://youtube.com' }
        ],
        type: 'behind-the-scenes'
    },
    {
        id: 5,
        title: 'Final Bow',
        category: 'Concerts',
        date: 'Aug 30, 2024',
        venue: 'Open Air Theatre',
        description: 'The moment after the last note fades. The energy of the crowd at the Open Air Theatre was palpable even after the lights went down.',
        images: [
            'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=1200'
        ],
        links: [
            { label: 'View on Instagram', url: '#' }
        ],
        type: 'concert'
    },
    {
        id: 6,
        title: 'Shadow and Soul',
        category: 'Performances',
        date: 'Jul 14, 2024',
        venue: 'Blackbox Theater',
        description: 'Soloist performance under the spotlight. An experimental night featuring individual members showcasing their unique vocal colors.',
        images: [
            'https://images.unsplash.com/photo-1482442120256-9c03866de390?auto=format&fit=crop&q=80&w=1200'
        ],
        links: [
            { label: 'Watch Clip', url: '#' }
        ],
        type: 'performance'
    },
    // --- TESTING DUPLICATES ---
    {
        id: '1_copy',
        title: 'Winter Solstice Concert 2024',
        category: 'Performances',
        date: 'Dec 21, 2024',
        venue: 'Metropolitan Cathedral',
        description: 'A full recording of our annual winter performance. The acoustics of the cathedral provided a natural reverb that enhanced our polyphonic arrangements, creating a truly ethereal atmosphere for the 2,000 attendees.',
        images: [
            'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200'
        ],
        links: [
            { label: 'Watch Full Concert', url: 'https://youtube.com', type: 'primary' },
            { label: 'View Gallery', url: '#', type: 'secondary' }
        ],
        type: 'performance'
    },
    {
        id: '2_copy',
        title: 'Morning Echoes Rehearsal',
        category: 'Rehearsals',
        date: 'Nov 12, 2024',
        venue: 'Studio A',
        description: 'Capturing the first light in the rehearsal hall. Before the world wakes up, we find our harmony in the quiet moments of dawn. This session focused on the intricate layers of our upcoming album.',
        images: [
            'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200'
        ],
        links: [
            { label: 'View on Instagram', url: 'https://instagram.com/genexinova' }
        ],
        type: 'rehearsal'
    },
    {
        id: '3_copy',
        title: 'The Velvet Night Gala',
        category: 'Galas',
        date: 'Oct 15, 2024',
        venue: 'Grand Opera House',
        description: 'An evening of classical reimagining and velvet-draped stages. We collaborated with the National Orchestra to bring a fusion of choral and symphonic sound to life.',
        images: [
            'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1544211086-6eff66f9776f?auto=format&fit=crop&q=80&w=1200'
        ],
        links: [
            { label: 'Event Recap', url: '#' },
            { label: 'Sponsor Info', url: '#' }
        ],
        type: 'event'
    },
    {
        id: '4_copy',
        title: 'Crafting the Harmony',
        category: 'Behind the Scenes',
        date: 'Sep 28, 2024',
        venue: 'Main Hall',
        description: 'A look into our vocal arrangement process and collective ritual. See how we break down complex chords into individual vocal lines.',
        images: [
            'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200'
        ],
        links: [
            { label: 'Watch Documentary', url: 'https://youtube.com' }
        ],
        type: 'behind-the-scenes'
    },
    {
        id: '5_copy',
        title: 'Final Bow',
        category: 'Concerts',
        date: 'Aug 30, 2024',
        venue: 'Open Air Theatre',
        description: 'The moment after the last note fades. The energy of the crowd at the Open Air Theatre was palpable even after the lights went down.',
        images: [
            'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=1200'
        ],
        links: [
            { label: 'View on Instagram', url: '#' }
        ],
        type: 'concert'
    },
    {
        id: '6_copy',
        title: 'Shadow and Soul',
        category: 'Performances',
        date: 'Jul 14, 2024',
        venue: 'Blackbox Theater',
        description: 'Soloist performance under the spotlight. An experimental night featuring individual members showcasing their unique vocal colors.',
        images: [
            'https://images.unsplash.com/photo-1482442120256-9c03866de390?auto=format&fit=crop&q=80&w=1200'
        ],
        links: [
            { label: 'Watch Clip', url: '#' }
        ],
        type: 'performance'
    }
];

const Media = () => {
    const [filter, setFilter] = useState('All');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6);

    const categories = ['All', 'Performances', 'Rehearsals', 'Galas'];

    const handleFilterChange = (cat) => {
        setFilter(cat);
        setVisibleCount(6);
    };

    const filteredData = filter === 'All'
        ? MEDIA_EVENTS
        : MEDIA_EVENTS.filter(item => item.category === filter);

    const handleShowMore = () => setVisibleCount(prev => Math.min(prev + 6, filteredData.length));
    const handleShowLess = () => {
        const gridSection = document.querySelector('.media-grid-section');
        if (gridSection) {
            const targetY = gridSection.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
            setTimeout(() => setVisibleCount(6), 400);
        } else {
            setVisibleCount(6);
        }
    };

    const openModal = (event) => setSelectedEvent(event);
    const closeModal = () => setSelectedEvent(null);

    return (
        <div className="media-page">
            {/* Hero Section */}
            <section className="media-hero">
                <div className="container">
                    <motion.div
                        className="media-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="media-eyebrow">The Showcase</span>
                        <h1 className="media-headline">Media</h1>
                        <p className="media-subtitle">A living archive of voice, presence, and shared moments.</p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="media-filters">
                <div className="container">
                    <div className="filter-wrapper">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => handleFilterChange(cat)}
                            >
                                {cat}
                                {filter === cat && (
                                    <motion.div
                                        className="filter-underline"
                                        layoutId="underline"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="media-grid-section">
                <div className="container">
                    <div className="media-grid">
                        <AnimatePresence mode="popLayout">
                            {filteredData.slice(0, visibleCount).map((event) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="media-card"
                                    onClick={() => openModal(event)}
                                >
                                    <div className="media-thumb-wrapper">
                                        <OptimizedImage
                                            src={event.images[0]}
                                            alt={event.title}
                                            className="media-thumb"
                                        />

                                        <div className="media-expand-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                            </svg>
                                        </div>

                                        <div className="media-overlay">
                                            <span className="media-category">{event.category}</span>
                                            <h3 className="media-item-title">{event.title}</h3>
                                            <span className="media-cta-hint">View Event →</span>
                                        </div>
                                    </div>
                                    <div className="event-info-snippet">
                                        <div className="event-meta">
                                            <span className="event-date">{event.date}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Show More / Show Less */}
                    {filteredData.length > 6 && (
                        <div className="media-load-more">
                            {visibleCount < filteredData.length ? (
                                <button onClick={handleShowMore} className="show-more-btn">
                                    <span>Show more</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </button>
                            ) : (
                                <button onClick={handleShowLess} className="show-more-btn">
                                    <span>Show less</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M18 15l-6-6-6 6" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Use the new Event Modal */}
            <EventModal
                isOpen={!!selectedEvent}
                onClose={closeModal}
                event={selectedEvent}
            />
        </div>
    );
};

export default Media;
