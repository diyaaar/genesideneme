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
            <ImpactCTA />
            <ColumnNav />
            <ChoirUpdates />
            <PodcastUpdates />
            <BlogUpdates />
            <AboutSection />
        </main>
    );
};

export default Home;
