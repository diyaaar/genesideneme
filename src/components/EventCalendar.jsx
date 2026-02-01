import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import './EventCalendar.css';

const EVENTS = [
    {
        id: 1,
        title: 'Yüz Yüze Seçmeler',
        type: 'Selection',
        date: '23–27',
        month: 'Feb',
        year: '2026',
        location: 'Kulüpler Vadisi',
        capacity: '—'
    },
    {
        id: 2,
        title: 'Şalter x GeNova',
        type: 'Concert',
        date: '28',
        month: 'Mar',
        year: '2026',
        location: 'Ortaköy Kethüda Hamamı',
        capacity: '150–250 people'
    },
    {
        id: 3,
        title: 'Ruhi Su x GeNova',
        type: 'Concert',
        date: '03',
        month: 'Apr',
        year: '2026',
        location: 'Bakırköy Cem Karaca Kültür Merkezi',
        capacity: '460 people'
    },
    {
        id: 4,
        title: 'KVK x GeNova Bağış Konseri',
        type: 'Concert',
        date: '08',
        month: 'Apr',
        year: '2026',
        location: 'YTÜ Davutpaşa Kongre Merkezi',
        capacity: '800–1000 people'
    },
    {
        id: 5,
        title: '11. SANSEV Uluslararası Koro Festivali',
        type: 'Festival',
        date: '07–10',
        month: 'May',
        year: '2026',
        location: 'Maltepe Türkan Saylan Kültür Merkezi',
        capacity: '400–500 people'
    },
    {
        id: 6,
        title: 'Acıbadem Üniversitesi Koro Festivali',
        type: 'Festival',
        date: '13',
        month: 'May',
        year: '2026',
        location: 'Acıbadem Üni. Konferans Merkezi',
        capacity: '750 people'
    },
    {
        id: 7,
        title: 'AAS Uluslararası Koro Festivali',
        type: 'Festival',
        date: '21–24',
        month: 'May',
        year: '2026',
        location: 'AAS Sanat Merkezi, İzmir',
        capacity: '1130 people'
    }
];

const EventCalendar = () => {
    const [index, setIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [gap, setGap] = useState(32); // 2rem = 32px
    const trackRef = useRef(null);
    const controls = useAnimation();
    const x = useMotionValue(0);

    // Responsive Logic
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
                setGap(16); // 1rem
            } else {
                setItemsPerPage(3);
                setGap(32); // 2rem
            }
        };

        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Ensure index doesn't go out of bounds when resizing
    useEffect(() => {
        const maxIndex = Math.max(0, EVENTS.length - itemsPerPage);
        if (index > maxIndex) {
            setIndex(maxIndex);
        }
    }, [itemsPerPage, index]);

    // Calculate Movement
    const maxIndex = Math.max(0, EVENTS.length - itemsPerPage);

    const slideTo = (newIndex) => {
        const clampedIndex = Math.max(0, Math.min(newIndex, maxIndex));
        setIndex(clampedIndex);
    };

    const handleNext = () => slideTo(index + 1);
    const handlePrev = () => slideTo(index - 1);

    const onDragEnd = (event, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset < -100 || velocity < -500) {
            handleNext();
        } else if (offset > 100 || velocity > 500) {
            handlePrev();
        }
    };

    // Calculate percentage-based transform to avoid px parsing issues
    // Using CSS variables to handle the gap logic is cleaner, but for framer motion x value:
    // We can animate x as a percentage string " - (index * percent)%"
    // But gap complicates it. 
    // Simplified: Just use % logic assuming the CSS gap is handled by the container width? No.
    // The previous CSS had: min-width: calc((100% - 4rem) / 3);
    // Let's use formatting variants.

    // Actually, simplest way for Gap + Framer Motion:
    // Move by (100% / itemsPerPage) + adjustment?
    // Let's rely on the fact that each item is (100% - totalGap) / itemsPerPage
    // Total width of one "slot" (card + gap) = (100% + gap) / itemsPerPage ? No.
    // Let's try pure percentage movement and let CSS Flex 'gap' handle spacing visually,
    // BUT gap isn't part of the percent width.
    // To make it perfectly align, we can calculate percentage step:
    // width of item = W. gap = G.
    // Step = W + G.
    // Container width = C.
    // itemsPerPage = N.
    // W = (C - (N-1)*G) / N.
    // Step as % of C = (1/N) * 100 + (G/C * ...) - wait, too complex for responsive.

    // Better: translateX using percentage: -(index * 100 / itemsPerPage)%
    // AND we set the width of the track to: calc(100% + some_overlap)?

    // ALTERNATIVE: Use scroll container with 'scrollTo' logic if framer math gets hard.
    // BUT I want to stick to Framer Motion.
    // I will use a simple animation variant that calculates the x offset based on index and the assumption of equal distribution.
    // We'll trust the mapping.

    return (
        <section className="event-calendar-section">
            <div className="event-calendar-container">
                <div className="event-calendar-header">
                    <span className="event-calendar-eyebrow">Event Calendar</span>
                    <h2 className="event-calendar-title">Season 2026</h2>
                </div>

                <div className="calendar-carousel-wrapper">
                    <motion.div
                        className="calendar-track"
                        animate={{
                            x: `calc(-${index} * ((100% - ${(itemsPerPage - 1) * gap}px) / ${itemsPerPage} + ${gap}px))`
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }} // Just for triggering dragEnd
                        dragElastic={0.1}
                        onDragEnd={onDragEnd}
                        ref={trackRef}
                    >
                        {EVENTS.map((event) => (
                            <motion.div
                                key={event.id}
                                className="event-card"
                            >
                                <div className="card-top">
                                    <div className="card-date-group">
                                        <span className="card-date-numerals">{event.date}</span>
                                        <span className="card-date-month">{event.month} {event.year}</span>
                                    </div>
                                    <span className="card-type">{event.type}</span>
                                    <h3 className="card-title">{event.title}</h3>
                                </div>

                                <div className="card-meta-group">
                                    <div className="meta-row">
                                        <svg className="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        <span>{event.location}</span>
                                    </div>
                                    {/* Always render capacity row for consistent spacing */}
                                    {event.capacity && event.capacity !== '—' ? (
                                        <div className="meta-row">
                                            <svg className="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                                <circle cx="9" cy="7" r="4" />
                                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                            </svg>
                                            <span>{event.capacity}</span>
                                        </div>
                                    ) : (
                                        <div className="meta-row" style={{ opacity: 0, pointerEvents: 'none' }}>
                                            {/* Invisible placeholder to maintain spacing */}
                                            <svg className="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            </svg>
                                            <span>&nbsp;</span>
                                        </div>
                                    )}
                                </div>

                                <div className="card-actions">
                                    <button className="details-btn">Details</button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Navigation Controls */}
                {/* Dots */}
                <div className="carousel-dots-container">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <div
                            key={i}
                            className={`dot ${i === index ? 'active' : ''}`}
                            onClick={() => slideTo(i)}
                        />
                    ))}
                </div>

                {/* Arrow Buttons */}
                <div className="carousel-arrows-container">
                    <button
                        className="nav-arrow prev"
                        onClick={handlePrev}
                        disabled={index === 0}
                        aria-label="Previous Events"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <button
                        className="nav-arrow next"
                        onClick={handleNext}
                        disabled={index === maxIndex}
                        aria-label="Next Events"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EventCalendar;
