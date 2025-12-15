import HeroSection from './components/HeroSection';
import ImpactCTA from './components/ImpactCTA';
import ColumnNav from './components/ColumnNav';
import ChoirUpdates from './components/ChoirUpdates';
import PodcastUpdates from './components/PodcastUpdates';
import BlogUpdates from './components/BlogUpdates';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <ImpactCTA />
      <ColumnNav />
      <ChoirUpdates />
      <PodcastUpdates />
      <BlogUpdates />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
