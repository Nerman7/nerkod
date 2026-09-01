import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import './About.css'

export default function About() {
  const { t } = useLanguage()
  const { pill, title, paragraphs, values, cta } = t.about

  return (
    <section id="o-meni" className="about">
      <div className="container about__inner">
        <div className="about__visual">
          <div className="about__avatar">NK</div>
          <div className="about__visual-ring" aria-hidden="true" />
        </div>

        <div className="about__content">
          <span className="pill">{pill}</span>
          <h2>{title}</h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <ul className="about__values">
            {values.map((value) => (
              <li key={value.title}>
                <Icon name="check" size={18} />
                <div>
                  <strong>{value.title}</strong>
                  <span>{value.description}</span>
                </div>
              </li>
            ))}
          </ul>

          <a href="#kontakt" className="btn btn-primary">
            {cta}
          </a>
        </div>
      </div>
    </section>
  )
}
