import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <div>
       <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=61567877829313" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Npass. All rights reserved.
      </div>
    </footer>
    </div>
  )
}
