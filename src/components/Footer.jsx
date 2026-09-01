import { useLanguage } from '../i18n/LanguageContext.jsx'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLanguage()
  const navLinks = t.nav.links
  const contactInfo = t.contactInfo
  const { tagline, navHeading, contactHeading, rights } = t.footer

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#pocetna" className="footer__logo">
            <span className="footer__logo-mark">N</span>
            NerKod
          </a>
          <p>{tagline}</p>
        </div>

        <div className="footer__nav">
          <span className="footer__heading">{navHeading}</span>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer__contact">
          <span className="footer__heading">{contactHeading}</span>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
          <span>{contactInfo.location}</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} NerKod. {rights}</p>
      </div>
    </footer>
  )
}
