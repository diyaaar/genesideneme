import React, { useState } from 'react';
import { motion } from 'framer-motion';


import OptimizedImage from '../components/OptimizedImage';
import './Contact.css';

// Import Social Icons (Reuse existing assets)
import instaIcon from '../assets/icons/instagram.svg';
import spotifyIcon from '../assets/icons/spotify.svg';
import youtubeIcon from '../assets/icons/youtube.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <div className="contact-page">
            <main className="contact-hero">
                <div className="contact-grid">
                    {/* Left Column: Info */}
                    <motion.div
                        className="contact-info-col"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="contact-label">Contact</span>
                        <h1 className="contact-headline">Let's get in touch!</h1>
                        <p className="contact-description">
                            Whether it's a concert inquiry, a workshop collaboration, or just a note to say hello — we'd love to hear from you.
                        </p>

                        <div className="contact-details-grid">
                            <div className="detail-item">
                                <span className="detail-label">Email</span>
                                <span className="detail-value">hello@genesinovachoir.com</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Location</span>
                                <span className="detail-value">Istanbul, Turkey</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Phone</span>
                                <span className="detail-value">+90 531 568 18 00</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Rehearsals</span>
                                <span className="detail-value">
                                    Tuesdays & Fridays
                                    <br />
                                    18:00–20:30
                                </span>
                            </div>
                        </div>

                        <div className="contact-social-row">
                            <a href="https://www.instagram.com/genesi_nova/" target="_blank" rel="noopener noreferrer" className="social-link-minimal">
                                <OptimizedImage src={instaIcon} alt="Instagram" />
                            </a>
                            <a href="http://youtube.com/@GenesiNovaChoir" target="_blank" rel="noopener noreferrer" className="social-link-minimal">
                                <OptimizedImage src={youtubeIcon} alt="YouTube" />
                            </a>
                            <a href="#" className="social-link-minimal">
                                <OptimizedImage src={spotifyIcon} alt="Spotify" />
                            </a>
                            <a href="https://www.linkedin.com/company/genesi-nova-choir/" target="_blank" rel="noopener noreferrer" className="social-link-minimal">
                                <OptimizedImage src={linkedinIcon} alt="LinkedIn" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        className="contact-form-col"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="form-card">
                            {status === 'success' ? (
                                <motion.div
                                    className="success-message"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <span className="success-icon">✓</span>
                                    <h3 className="success-title">Message Sent</h3>
                                    <p className="success-desc">Thank you for reaching out. We'll be in touch shortly.</p>
                                    <button
                                        className="submit-btn"
                                        onClick={() => setStatus('idle')}
                                        style={{ marginTop: '2rem', alignSelf: 'center' }}
                                    >
                                        Send Another
                                    </button>
                                </motion.div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className={`form-input ${errors.name ? 'error' : ''}`}
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Jane Doe"
                                        />
                                        {errors.name && <span className="error-msg">{errors.name}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className={`form-input ${errors.email ? 'error' : ''}`}
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="jane@example.com"
                                        />
                                        {errors.email && <span className="error-msg">{errors.email}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject" className="form-label">Subject (Optional)</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="form-input"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Concert Inquiry"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className={`form-textarea ${errors.message ? 'error' : ''}`}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us what's on your mind..."
                                        />
                                        {errors.message && <span className="error-msg">{errors.message}</span>}
                                    </div>

                                    <button
                                        type="submit"
                                        className="submit-btn"
                                        disabled={status === 'submitting'}
                                    >
                                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </main>

        </div>
    );
};

export default Contact;
