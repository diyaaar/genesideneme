import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


import OptimizedImage from '../components/OptimizedImage';
import './Contact.css';

// Import Social Icons (Reuse existing assets)
import instaIcon from '../assets/icons/instagram.svg';
import spotifyIcon from '../assets/icons/spotify.svg';
import youtubeIcon from '../assets/icons/youtube.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

const Contact = () => {
    const { t } = useTranslation();
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
        if (!formData.name.trim()) newErrors.name = t('contact.form.errors.name');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = t('contact.form.errors.email_required');
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = t('contact.form.errors.email_invalid');
        }

        if (!formData.message.trim()) newErrors.message = t('contact.form.errors.message');

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
                        <span className="contact-label">{t('contact.label')}</span>
                        <h1 className="contact-headline">{t('contact.headline')}</h1>
                        <p className="contact-description">
                            {t('contact.description')}
                        </p>

                        <div className="contact-details-grid">
                            <div className="detail-item">
                                <span className="detail-label">{t('contact.details.email')}</span>
                                <span className="detail-value">hello@genesinovachoir.com</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">{t('contact.details.location')}</span>
                                <span className="detail-value">{t('contact.details.location_value')}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">{t('contact.details.phone')}</span>
                                <span className="detail-value">+90 531 568 18 00</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">{t('contact.details.rehearsals')}</span>
                                <span className="detail-value">
                                    {t('contact.details.rehearsal_days')}
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
                                    <h3 className="success-title">{t('contact.form.success.title')}</h3>
                                    <p className="success-desc">{t('contact.form.success.desc')}</p>
                                    <button
                                        className="submit-btn"
                                        onClick={() => setStatus('idle')}
                                        style={{ marginTop: '2rem', alignSelf: 'center' }}
                                    >
                                        {t('contact.form.success.another')}
                                    </button>
                                </motion.div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">{t('contact.form.fullname')}</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className={`form-input ${errors.name ? 'error' : ''}`}
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder={t('contact.form.placeholder_name')}
                                        />
                                        {errors.name && <span className="error-msg">{errors.name}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">{t('contact.form.email')}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className={`form-input ${errors.email ? 'error' : ''}`}
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder={t('contact.form.placeholder_email')}
                                        />
                                        {errors.email && <span className="error-msg">{errors.email}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject" className="form-label">{t('contact.form.subject')}</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="form-input"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder={t('contact.form.placeholder_subject')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">{t('contact.form.message')}</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className={`form-textarea ${errors.message ? 'error' : ''}`}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder={t('contact.form.placeholder_message')}
                                        />
                                        {errors.message && <span className="error-msg">{errors.message}</span>}
                                    </div>

                                    <button
                                        type="submit"
                                        className="submit-btn"
                                        disabled={status === 'submitting'}
                                    >
                                        {status === 'submitting' ? t('contact.form.sending') : t('contact.form.submit')}
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
