import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import RouteTitle from './components/RouteTitle';
import Hero from './components/home/Hero';
import SummitBanner from './components/home/SummitBanner';
import ScrollingTicker from './components/home/ScrollingTicker';
import Features from './components/home/Features';
import SocialProof from './components/home/SocialProof';
import CreatorGrid from './components/home/CreatorGrid';
import Testimonials from './components/home/Testimonials';
import CallToAction from './components/home/CallToAction';
import Events from './components/home/Events';
import FeaturedIn from './components/home/FeaturedIn';
import About from './pages/About';
import Join from './pages/Join';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Members from './pages/Members';
import Chapters from './pages/Chapters';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CodeOfConduct from './pages/CodeOfConduct';
import Summit from './pages/Summit';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const HomePage = () => (
  <main>
    <SummitBanner />
    <Hero />
    <ScrollingTicker />
    <FeaturedIn />
    <Features />
    <SocialProof />
    <Events />
    <CreatorGrid />
    <Testimonials />
    <CallToAction />
  </main>
);

const App = () => (
  <Router>
    <ScrollToTop />
    <ScrollProgress />
    <RouteTitle />
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/summit" element={<Summit />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
