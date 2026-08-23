import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import useActiveSection from '../hooks/useActiveSection.js'
import { navLinks } from '../data/content.js'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(navLinks.map((link) => link.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__bar">
        <a href="#pocetna" className="header__logo" onClick={() => setMenuOpen(false)}>
          <span className="header__logo-mark">N</span>
          NerKod
        </a>

        <nav className="header__nav header__nav--desktop" aria-label="Glavna navigacija">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeId === link.id ? 'is-active' : ''}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#kontakt" className="btn btn-primary btn-sm header__cta">
          Zatraži ponudu
        </a>

        <button
          className="header__toggle"
          aria-label={menuOpen ? 'Zatvori izbornik' : 'Otvori izbornik'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      <div className={`header__mobile ${menuOpen ? 'is-open' : ''}`}>
        <nav aria-label="Mobilna navigacija">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeId === link.id ? 'is-active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#kontakt" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Zatraži ponudu
        </a>
      </div>
    </header>
  )
}
