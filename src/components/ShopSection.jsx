import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import './ShopSection.css';

const items = [
    {
        id: 1,
        subtitle: "Genesi Nova Original Arrangement",
        title: "Kırmızı",
        desc: "Once a pop song, now reborn through jazz. \"Kırmızı\" shifts its rhythm and deepens its emotion in a Genesi Nova arrangement.",
        image: "/shop/arr1.webp"
    },
    {
        id: 2,
        subtitle: "Genesi Nova Original Arrangement",
        title: "Çanakkale Türküsü",
        desc: "A lament, a memory, a moment of silence. \"Çanakkale Türküsü\" is reinterpreted by Genesi Nova in remembrance of the fallen.",
        image: "/shop/arr2.webp"
    },
    {
        id: 3,
        subtitle: "Genesi Nova Original Arrangement",
        title: "Nasip Olur Amasya'ya Varırsan",
        desc: "A folk song shaped by journey, fate, and longing. \"Nasip Olur Amasya'ya Varırsan\" becomes a timeless voice through Genesi Nova's interpretation.",
        image: "/shop/arr3.webp"
    }
];

const GalleryItem = ({ item, index }) => {
    return (
        <motion.div
            className="gallery-grid-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="gallery-card">
                <div className="card-image-wrapper">
                    {/* Security Blur: Image is permanently obscured */}
                    <OptimizedImage
                        src={item.image}
                        alt="Locked Content"
                        className="card-img-locked"
                    />

                    {/* Permanent Overlay */}
                    <div className="locked-overlay">
                        <div className="lock-badge">
                            <span className="lock-icon">🔒</span>
                        </div>
                    </div>

                    {/* Elegant Hover Reveal Description */}
                    <div className="hover-reveal-content">
                        <p className="reveal-text">{item.desc}</p>
                    </div>
                </div>

                <div className="card-content">
                    <span className="card-subtitle">{item.subtitle}</span>
                    <h3 className="card-title">{item.title}</h3>
                </div>
            </div>
        </motion.div>
    );
};

const ShopSection = () => {
    return (
        <section id="store" className="shop-section">
            <div className="container">
                <header className="shop-header">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="shop-subtitle">The Vault</div>
                        <h2 className="shop-title">Upcoming Arrangements</h2>
                    </motion.div>
                </header>

                <div className="gallery-grid">
                    {items.map((item, index) => (
                        <GalleryItem key={item.id} item={item} index={index} />
                    ))}
                </div>

                <motion.div
                    className="shop-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="footer-line"></div>
                    <p className="footer-text">The score is written. The recording is set.</p>
                    <p className="coming-soon-glow">The Vault Opens Soon</p>
                </motion.div>
            </div>
        </section>
    );
};

export default ShopSection;
