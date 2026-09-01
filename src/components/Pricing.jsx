import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import './Pricing.css'

export default function Pricing() {
  const { t } = useLanguage()
  const { eyebrow, title, subtitle, plans, popularBadge, note } = t.pricing

  return (
    <section id="cijene" className="pricing">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="pricing__grid">
          {plans.map((plan) => (
            <div
              className={`pricing-card ${plan.highlighted ? 'pricing-card--highlighted' : ''}`}
              key={plan.name}
            >
              {plan.highlighted && <span className="pricing-card__badge">{popularBadge}</span>}
              <h3>{plan.name}</h3>
              <p className="pricing-card__description">{plan.description}</p>
              <div className="pricing-card__price">
                <span className="pricing-card__period">{plan.period}</span>
                <span className="pricing-card__amount">{plan.price}</span>
              </div>
              <ul className="pricing-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Icon name="check" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-ghost'} pricing-card__cta`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="pricing__note">{note}</p>
      </div>
    </section>
  )
}
