import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import useActiveSection from '../hooks/useActiveSection.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { languages } from '../i18n/translations.js'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const navLinks = t.nav.links
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

        <nav className="header__nav header__nav--desktop" aria-label={t.nav.ariaMain}>
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

        <div className="header__lang header__lang--desktop">
          {languages.map((lng) => (
            <button
              key={lng.code}
              className={language === lng.code ? 'is-active' : ''}
              onClick={() => setLanguage(lng.code)}
              aria-pressed={language === lng.code}
            >
              {lng.label}
            </button>
          ))}
        </div>

        <a href="#kontakt" className="btn btn-primary btn-sm header__cta">
          {t.nav.cta}
        </a>

        <button
          className="header__toggle"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      <div className={`header__mobile ${menuOpen ? 'is-open' : ''}`}>
        <nav aria-label={t.nav.ariaMobile}>
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

        <div className="header__lang">
          {languages.map((lng) => (
            <button
              key={lng.code}
              className={language === lng.code ? 'is-active' : ''}
              onClick={() => setLanguage(lng.code)}
              aria-pressed={language === lng.code}
            >
              {lng.label}
            </button>
          ))}
        </div>

        <a href="#kontakt" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          {t.nav.cta}
        </a>
      </div>
    </header>
  )
}
