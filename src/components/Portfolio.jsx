import SectionHeading from './SectionHeading.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import './Portfolio.css'

export default function Portfolio() {
  const { t } = useLanguage()
  const { eyebrow, title, subtitle, items } = t.portfolio

  return (
    <section id="reference" className="portfolio">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="portfolio__grid">
          {items.map((item) => (
            <article className="portfolio-card" key={item.title}>
              <div className="portfolio-card__cover">
                <span>{item.category}</span>
              </div>
              <div className="portfolio-card__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="portfolio-card__tags">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
