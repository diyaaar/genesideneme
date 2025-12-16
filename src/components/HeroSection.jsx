import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TypewriterText from './TypewriterText';
import './HeroSection.css';

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
            id="home"
            className="hero"
            style={{
                // Styles moved to HeroSection.css for responsiveness
            }}
        >
            {/* Parallax Background - Velvet Effect */}
            <motion.div
                className="hero-bg"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '120%',
                    y: yBg,
                    zIndex: 1,
                    background: 'transparent'
                }}
            />

            {/* Decorative Elements */}


            {/* Main Content - Empty for now as requested for Full-Width Visual */}
            <motion.div
                className="container"
                style={{
                    position: 'relative',
                    zIndex: 10,
                    textAlign: 'center',
                    color: '#fff',
                    y: yText,
                    opacity: opacityText,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/* Centered Content Block */}
                <div style={{
                    position: 'absolute',
                    top: '42%', /* Slightly higher visual center for laptop screens */
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    zIndex: 20
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)', /* Optimized clamp for 13" screens */
                        fontWeight: 700,
                        lineHeight: 1,
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '-0.02em',
                        color: '#fff',
                        textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}>
                        <span style={{ display: 'block', overflow: 'hidden' }}>
                            <motion.span
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                style={{ display: 'block' }}
                            >
                                GENESI NOVA
                            </motion.span>
                        </span>
                        <span style={{ display: 'block', overflow: 'hidden', marginTop: '-0.2em' }}>
                            <motion.span
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                                style={{ display: 'block', fontStyle: 'italic', opacity: 0.9, color: 'var(--color-secondary)' }}
                            >
                                CHOIR
                            </motion.span>
                        </span>
                    </h1>

                    <div style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'clamp(0.8rem, 1vw, 1rem)',
                        fontWeight: 400,
                        color: 'rgba(255, 255, 255, 0.9)',
                        maxWidth: '800px',
                        lineHeight: 1.6,
                        letterSpacing: '0.05em',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        textTransform: 'uppercase'
                    }}>
                        <div style={{ overflow: 'hidden' }}>
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                This is not just an a cappella group.
                            </motion.div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                            >
                                It's a collective of voices, shaping a new sound culture.
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Locations / Bottom Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                    style={{
                        position: 'absolute',
                        bottom: '8vh', /* Uses viewport height unit for responsiveness */
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.3rem'
                    }}
                >
                    <img
                        src="/based_in_istanbul.svg"
                        alt="Istanbul"
                        width="150"
                        height="100"
                        loading="eager"
                        fetchPriority="high"
                        style={{
                            width: '40px',
                            height: 'auto',
                            opacity: 0.9,
                        }}
                    />
                    <span style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(255, 255, 255, 0.5)'
                    }}>
                        Based in İstanbul
                    </span>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}

        </header>
    );
};

export default HeroSection;
