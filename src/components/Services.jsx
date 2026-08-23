import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { services } from '../data/content.js'
import './Services.css'

export default function Services() {
  return (
    <section id="usluge" className="services">
      <div className="container">
        <SectionHeading
          eyebrow="Usluge"
          title="Sve što vam treba za snažnu online prisutnost"
          subtitle="Od prve prezentacijske stranice do potpune online trgovine — biramo rješenje koje odgovara vašem poslovanju i budžetu."
        />

        <div className="services__grid">
          {services.map((service) => (
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
