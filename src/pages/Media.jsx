import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from '../components/OptimizedImage';
import './Media.css';

const MEDIA_DATA = [
    {
        id: 1,
        type: 'video',
        category: 'Performances',
        title: 'Winter Solstice Concert 2024',
        description: 'A full recording of our annual winter performance at the Metropolitan Cathedral.',
        thumbnail: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1200',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    },
    {
        id: 2,
        type: 'photo',
        category: 'Rehearsals',
        title: 'Morning Echoes',
        description: 'Capturing the first light in the rehearsal hall.',
        url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 3,
        type: 'event',
        category: 'Galas',
        title: 'The Velvet Night Gala',
        date: 'Oct 15, 2024',
        venue: 'Grand Opera House',
        description: 'An evening of classical reimagining and velvet-draped stages.',
        image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 4,
        type: 'video',
        category: 'Behind the Scenes',
        title: 'Crafting the Harmony',
        description: 'A look into our vocal arrangement process and collective ritual.',
        thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    },
    {
        id: 5,
        type: 'photo',
        category: 'Concerts',
        title: 'Final Bow',
        description: 'The moment after the last note fades.',
        url: 'https://images.unsplash.com/photo-1501612780327-451e5044d0ec?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 6,
        type: 'photo',
        category: 'Performances',
        title: 'Shadow and Soul',
        description: 'Soloist performance under the spotlight.',
        url: 'https://images.unsplash.com/photo-1517230815975-254337da8903?auto=format&fit=crop&q=80&w=1200'
    }
];

const Media = () => {
    const [filter, setFilter] = useState('all');
    const [selectedMedia, setSelectedMedia] = useState(null);

    const categories = ['all', 'video', 'photo', 'event'];

    const filteredData = filter === 'all'
        ? MEDIA_DATA
        : MEDIA_DATA.filter(item => item.type === filter);

    const openLightbox = (item) => setSelectedMedia(item);
    const closeLightbox = () => setSelectedMedia(null);

    return (
        <div className="media-page">
            {/* Hero Section */}
            <section className="media-hero">
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="media-title">Media / <span className="italic">Showcase</span></h1>
                        <p className="media-subtitle">A curated collection of our vocal rituals and visual moments.</p>
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
                                onClick={() => setFilter(cat)}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}s
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
                    <motion.div
                        className="media-grid"
                        layout
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredData.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className={`media-card ${item.type}-card`}
                                    onClick={() => openLightbox(item)}
                                >
                                    <div className="media-thumb-wrapper">
                                        <OptimizedImage
                                            src={item.type === 'video' ? item.thumbnail : (item.type === 'event' ? item.image : item.url)}
                                            alt={item.title}
                                            className="media-thumb"
                                        />
                                        {item.type === 'video' && (
                                            <div className="play-overlay">
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        )}
                                        <div className="media-overlay">
                                            <span className="media-category">{item.category}</span>
                                            <h3 className="media-item-title">{item.title}</h3>
                                        </div>
                                    </div>
                                    {item.type === 'event' && (
                                        <div className="event-info">
                                            <div className="event-meta">
                                                <span className="event-date">{item.date}</span>
                                                <span className="event-venue">{item.venue}</span>
                                            </div>
                                            <p className="event-desc">{item.description}</p>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        className="media-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-btn" onClick={closeLightbox}>×</button>

                            {selectedMedia.type === 'video' ? (
                                <div className="video-container">
                                    <iframe
                                        src={selectedMedia.videoUrl}
                                        title={selectedMedia.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <div className="image-container">
                                    <img src={selectedMedia.type === 'event' ? selectedMedia.image : selectedMedia.url} alt={selectedMedia.title} />
                                </div>
                            )}

                            <div className="modal-info">
                                <h2>{selectedMedia.title}</h2>
                                <p>{selectedMedia.description}</p>
                                {selectedMedia.type === 'event' && (
                                    <div className="modal-meta">
                                        <span>{selectedMedia.date}</span>
                                        <span>{selectedMedia.venue}</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Media;
