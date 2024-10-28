'use client'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import ServiceDetail from './components/ServiceDetail'
import CaseStudy from './components/CaseStudy'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <nav className="p-4">
          <ul className="flex justify-center space-x-6">
            <li><Link to="/" className="text-blue-400 hover:text-blue-300">Inicio</Link></li>
            <li><Link to="/about" className="text-blue-400 hover:text-blue-300">Acerca de</Link></li>
            <li><Link to="/services" className="text-blue-400 hover:text-blue-300">Servicios</Link></li>
            <li><Link to="/contact" className="text-blue-400 hover:text-blue-300">Contacto</Link></li>
          </ul>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}