import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Testimonials from './components/home/Testimonials';
import CallToAction from './components/home/CallToAction';
import About from './pages/About';
import Join from './pages/Join';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Members from './pages/Members';
import Chapters from './pages/Chapters';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
