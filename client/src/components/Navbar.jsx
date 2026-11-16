import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  ['Home', '#home'], ['About', '#about'], ['Services', '#services'],
  ['Projects', '#projects'], ['Contact', '#contact']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar glass-panel">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <img className="company-logo" src="/images/deltacode-logo.jpg.png" alt="DeltaCode company logo" />
        <span>DeltaCode</span>
      </a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's Talk <ArrowUpRight size={16} /></a>
      </nav>
    </header>
  )
}
