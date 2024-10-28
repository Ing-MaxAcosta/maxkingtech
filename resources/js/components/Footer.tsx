'use client'

import { Facebook, Linkedin, Instagram, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Corp Max King Tech. Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:info@maxkingtech.com" className="hover:text-blue-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
            <a href="https://facebook.com/maxkingtech" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="https://linkedin.com/company/maxkingtech" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com/maxkingtech" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="https://twitter.com/maxkingtech" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}