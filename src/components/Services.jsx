import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import './Services.css'

export default function Services() {
  const { t } = useLanguage()
  const { eyebrow, title, subtitle, items } = t.services

  return (
    <section id="usluge" className="services">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="services__grid">
          {items.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-card__icon">
                <Icon name={service.icon} size={24} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
