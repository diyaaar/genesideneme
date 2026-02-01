import React from 'react';
import OptimizedImage from './OptimizedImage';
import './ImpactCTA.css';

const ImpactCTA = () => {
    return (
        <section className="impact-cta">
            <div className="cta-reference-wrapper">
                <OptimizedImage
                    src="/CTA.svg"
                    alt="Abstract Background"
                    className="cta-bg-image-wrapper"
                    imgClassName="cta-bg-image"
                />

                <div className="cta-overlay"></div>

                <div className="cta-frame">
                    {/* Frame border is handled by CSS pseudo-elements */}
                </div>

                <div className="cta-content">
                    <p className="cta-label">We're building something new.</p>
                    <h2 className="cta-headline">Be part of the journey.</h2>
                </div>
            </div>
        </section>
    );
};

export default ImpactCTA;
