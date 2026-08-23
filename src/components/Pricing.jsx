import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { pricingPlans } from '../data/content.js'
import './Pricing.css'

export default function Pricing() {
  return (
    <section id="cijene" className="pricing">
      <div className="container">
        <SectionHeading
          eyebrow="Cijene"
          title="Transparentni paketi, bez skrivenih troškova"
          subtitle="Orijentacijske cijene za najčešće vrste projekata. Konačna ponuda ovisi o opsegu i funkcionalnostima koje vam trebaju."
        />

        <div className="pricing__grid">
          {pricingPlans.map((plan) => (
            <div
              className={`pricing-card ${plan.highlighted ? 'pricing-card--highlighted' : ''}`}
              key={plan.name}
            >
              {plan.highlighted && <span className="pricing-card__badge">Najpopularnije</span>}
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

        <p className="pricing__note">
          Svaki projekt je drugačiji — ako vam ne odgovara nijedan paket, javite se i pripremit ću
          ponudu skrojenu po mjeri.
        </p>
      </div>
    </section>
  )
}
