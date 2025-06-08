import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Tours from './pages/Tours';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import Post from './pages/Post';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Post />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App