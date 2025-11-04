import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
       <footer className="bg-primary text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
     

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white" style={{textDecoration:'none',color:'white'}}>Home</a></li>
            <li><a href="/about" className="hover:text-white" style={{textDecoration:'none',color:'white'}}>About</a></li>
            <li><a href="/services" className="hover:text-white" style={{textDecoration:'none',color:'white'}}>Services</a></li>
            <li><a href="/contact" className="hover:text-white" style={{textDecoration:'none',color:'white'}}>Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white" style={{color:'white'}}><FaFacebook /></a>
            <a href="#" className="hover:text-white"style={{color:'white'}}><FaInstagram /></a>
            <a href="#" className="hover:text-white"style={{color:'white'}}><FaLinkedin /></a>
            <a href="#" className="hover:text-white"style={{color:'white'}}><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-light">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
