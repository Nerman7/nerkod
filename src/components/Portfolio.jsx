import SectionHeading from './SectionHeading.jsx'
import { portfolioItems } from '../data/content.js'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <section id="reference" className="portfolio">
      <div className="container">
        <SectionHeading
          eyebrow="Reference"
          title="Vrste projekata koje razvijam"
          subtitle="Portfelj se stalno puni novim projektima — ovo su tipovi rješenja koje mogu izraditi za vaše poslovanje."
        />

        <div className="portfolio__grid">
          {portfolioItems.map((item) => (
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
