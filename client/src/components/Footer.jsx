import { ArrowUpRight, Github, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer glass-panel">
      <div className="footer-top">
        <div>
          <a className="brand footer-brand" href="#home">
            <img className="company-logo" src="/images/deltacode-logo.jpg.png" alt="DeltaCode company logo" />
            <span>DeltaCode</span>
          </a>
          <p>Ideas deserve exceptional execution.<br />We build digital experiences for what comes next.</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} DeltaCode. All rights reserved.</span><span>Designed with purpose. Built with technology.</span></div>
    </footer>
  )
}
