import React from 'react';
import HeroSection from '../components/HeroSection';
import ImpactCTA from '../components/ImpactCTA';
import ColumnNav from '../components/ColumnNav';
import ChoirUpdates from '../components/ChoirUpdates';
import PodcastUpdates from '../components/PodcastUpdates';
import BlogUpdates from '../components/BlogUpdates';
import AboutSection from '../components/AboutSection';

const Home = () => {
    return (
        <main>
            <HeroSection />

            {/* Unified Gradient Wrapper for CTA and Columns */}
            <div style={{
                background: 'linear-gradient(to bottom, rgba(5, 6, 10, 0.8) 0%, rgba(20, 25, 45, 0.2) 100%)',
                width: '100%'
            }}>
                <ImpactCTA />
                <ColumnNav />
            </div>

            <ChoirUpdates />
            <PodcastUpdates />
            <BlogUpdates />
            <AboutSection />
        </main>
    );
};

export default Home;
