import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <header
            ref={ref}
            className="hero"
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#111'
            }}
        >
            {/* Parallax Background */}
            <motion.div
                className="hero-bg"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '120%', // Taller for parallax
                    y: yBg,
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #282e50 0%, #000 70%)',
                    zIndex: 1,
                    opacity: 0.8
                }}
            />

            {/* Decorative Elements */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80vw',
                height: '80vh',
                border: '1px solid rgba(255,255,255,0.05)',
                zIndex: 1,
                pointerEvents: 'none'
            }}></div>

            {/* Main Content */}
            <motion.div
                className="container"
                style={{
                    position: 'relative',
                    zIndex: 10,
                    textAlign: 'center',
                    color: '#fff',
                    y: yText,
                    opacity: opacityText
                }}
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
                        letterSpacing: '0.5em',
                        textTransform: 'uppercase',
                        marginBottom: 'var(--spacing-md)',
                        color: 'var(--color-secondary)'
                    }}
                >
                    Polyphonic • Dynamic • Innovative
                </motion.p>

                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 7rem)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    marginBottom: 'var(--spacing-md)',
                    fontFamily: 'var(--font-heading)'
                }}>
                    <span style={{ display: 'block', overflow: 'hidden' }}>
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                            style={{ display: 'block' }}
                        >
                            GENESIS NOVA
                        </motion.span>
                    </span>
                    <span style={{ display: 'block', overflow: 'hidden' }}>
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                            style={{ display: 'block', fontStyle: 'italic', opacity: 0.8 }}
                        >
                            CHORUS
                        </motion.span>
                    </span>
                </h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <a href="#listen" className="btn btn-outline" style={{
                        color: '#fff',
                        borderColor: 'rgba(255,255,255,0.3)',
                        padding: '1rem 3rem',
                        fontSize: '0.9rem',
                        letterSpacing: '2px',
                        marginTop: '2rem',
                        backdropFilter: 'blur(5px)',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.borderColor = 'var(--color-secondary)';
                            e.currentTarget.style.backgroundColor = 'rgba(186, 180, 162, 0.1)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        LISTEN NOW
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    x: '-50%',
                    zIndex: 10,
                    color: 'rgba(255,255,255,0.5)'
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                ↓
            </motion.div>
        </header>
    );
};

export default HeroSection;
