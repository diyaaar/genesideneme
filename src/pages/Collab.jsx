import React, { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../components/OptimizedImage';
import './Collab.css';

const Collab = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const collaborationOptions = [
        {
            id: 'invite',
            label: 'Invite us to an existing project',
            placeholder: 'Tell us about the project and how we might contribute...'
        },
        {
            id: 'create',
            label: 'Create a project together',
            placeholder: 'What kind of vision do you want to build with us?'
        },
        {
            id: 'sponsor',
            label: 'Sponsor our work',
            placeholder: 'How would you like to support our journey?'
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedOption) return;
        // For now, just show confirmation
        alert("Thank you for reaching out. We'll be in touch soon.");
        alert("Thank you for reaching out. We'll be in touch soon.");
    };

    const scrollToForm = () => {
        const formSection = document.getElementById('collab-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="collab-page">

            {/* ═══════════════════════════════════════════════════════════════
                HERO SECTION
            ═══════════════════════════════════════════════════════════════ */}
            <section className="collab-hero">
                <div className="collab-hero-content">
                    <motion.div
                        className="hero-eyebrow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Collaboration
                    </motion.div>

                    <motion.h1
                        className="hero-headline"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Where voices meet,
                        <br />
                        <span className="italic">ideas intersect.</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtext"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        This is a space for shared rituals — where artists, institutions,
                        and ideas come together to create something beyond the expected.
                        <span
                            className="inline-collab-link"
                            onClick={scrollToForm}
                        >
                            Collaborate →
                        </span>
                    </motion.p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                PAST COLLABORATION SHOWCASE — ŞALTER
            ═══════════════════════════════════════════════════════════════ */}
            <section className="collab-showcase">
                <div className="showcase-container">

                    {/* Event Title & Meta Info */}
                    <motion.div
                        className="showcase-intro"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="event-title">Holyween</h2>
                        <div className="showcase-meta">
                            <div className="meta-item">
                                <svg className="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <time className="meta-date">01.11.2025</time>
                            </div>
                            <span className="meta-divider">—</span>
                            <div className="meta-item">
                                <svg className="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span className="meta-venue">En Passant, Beyoğlu</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Integrated Editorial Divider */}
                    <motion.div
                        className="showcase-divider"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* Editorial Layout — Logos Left, Text Right */}
                    <motion.div
                        className="showcase-editorial"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Left: Collaboration Logos - Clickable */}
                        <div className="showcase-brands">
                            <a
                                href="https://www.instagram.com/p/DQw2cMfDPCZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="logo-link"
                            >
                                <OptimizedImage
                                    src="/genesi_nova.svg"
                                    alt="Genesi Nova"
                                    className="brand-logo genesi-logo"
                                />
                            </a>
                            <OptimizedImage
                                src="/collab/X.svg"
                                alt="×"
                                className="collaboration-x"
                            />
                            <a
                                href="https://www.instagram.com/p/DQpKc6RCGq3Zvgt4Zui3AFpzEnAxRryQjbqOnU0/?img_index=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="logo-link"
                            >
                                <OptimizedImage
                                    src="/collab/salter/shalter-logo-white.svg"
                                    alt="Şalter"
                                    className="brand-logo salter-logo"
                                />
                            </a>
                        </div>

                        {/* Right: Editorial Text */}
                        <div className="showcase-text">
                            <p className="showcase-lead">
                                Together with Şalter, Genesi Nova transformed En Passant into a living soundscape.
                            </p>
                            <p className="showcase-body">
                                In a church-turned-stage, voices echoed beyond genre, creating a night shaped by ritual, presence, and shared listening.
                            </p>
                            <p className="showcase-hint">
                                Two perspectives. One night. Click the logos.
                            </p>
                        </div>
                    </motion.div>

                    {/* Editorial Image Grid */}
                    <div className="showcase-gallery">
                        <motion.figure
                            className="gallery-figure gallery-figure--choir"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="figure-atmosphere" />
                            <OptimizedImage
                                src="/collab/salter/choir_salter.svg"
                                alt="Genesi Nova Choir performing at Holyween"
                            />
                        </motion.figure>


                        <motion.figure
                            className="gallery-figure gallery-figure--audience"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                        >
                            <div className="figure-atmosphere" />
                            <OptimizedImage
                                src="/collab/salter/audience_salter.svg"
                                alt="Audience at Holyween"
                            />
                        </motion.figure>
                    </div>


                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                COLLABORATION CTA / FORM
            ═══════════════════════════════════════════════════════════════ */}
            <section className="collab-cta" id="collab-form">
                <div className="cta-container">

                    <motion.div
                        className="cta-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="cta-title">Collaborate with us</h2>
                        <p className="cta-subtitle">
                            We're open to conversations that lead somewhere meaningful.
                        </p>
                    </motion.div>

                    <motion.form
                        className="collab-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Option Selection */}
                        <div className="form-options">
                            {collaborationOptions.map((option) => (
                                <button
                                    key={option.id}
                                    type="button"
                                    className={`form-option ${selectedOption === option.id ? 'active' : ''}`}
                                    onClick={() => setSelectedOption(option.id)}
                                >
                                    <span className="option-indicator" />
                                    <span className="option-label">{option.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Form Fields - Appear after selection */}
                        <motion.div
                            className="form-fields"
                            initial={false}
                            animate={{
                                opacity: selectedOption ? 1 : 0.3,
                                y: selectedOption ? 0 : 10
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="collab-name">Name or Organization</label>
                                    <input
                                        id="collab-name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        disabled={!selectedOption}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="collab-email">Email</label>
                                    <input
                                        id="collab-email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        disabled={!selectedOption}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="collab-message">Your message</label>
                                <textarea
                                    id="collab-message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder={
                                        selectedOption
                                            ? collaborationOptions.find(o => o.id === selectedOption)?.placeholder
                                            : 'Select an option above to continue...'
                                    }
                                    disabled={!selectedOption}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={!selectedOption}
                            >
                                <span>Send proposal</span>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.form>
                </div>
            </section>
        </div>
    );
};

export default Collab;
