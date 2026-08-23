import Icon from './Icon.jsx'
import heroGraphic from '../assets/hero.png'
import './Hero.css'

const badges = [
  { icon: 'layout', label: 'Moderan dizajn' },
  { icon: 'search', label: 'SEO spremno' },
  { icon: 'shield', label: 'Pouzdana podrška' },
]

export default function Hero() {
  return (
    <section id="pocetna" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="pill">Izrada web stranica</span>
          <h1>
            Vaša ideja zaslužuje <span className="hero__accent">web stranicu</span> koja radi posao za vas
          </h1>
          <p className="hero__lead">
            Ja sam iza obrta <strong>NerKod</strong> — projektiram i razvijam brze, moderne i
            responzivne web stranice za obrtnike, male firme i startupe, od prve ideje do
            lansiranja.
          </p>
          <div className="hero__actions">
            <a href="#kontakt" className="btn btn-primary">
              Zatraži besplatnu ponudu
              <Icon name="arrow" size={18} />
            </a>
            <a href="#reference" className="btn btn-ghost">
              Pogledaj reference
            </a>
          </div>
          <div className="hero__badges">
            {badges.map((badge) => (
              <div className="hero__badge" key={badge.label}>
                <Icon name={badge.icon} size={18} />
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--main">
            <div className="hero__card-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="hero__code-line hero__code-line--1" />
            <div className="hero__code-line hero__code-line--2" />
            <div className="hero__code-line hero__code-line--3" />
            <div className="hero__code-line hero__code-line--4" />
            <img src={heroGraphic} alt="" className="hero__graphic" />
          </div>
          <div className="hero__card hero__card--float">
            <Icon name="check" size={18} />
            <span>Stranica lansirana</span>
          </div>
        </div>
      </div>
    </section>
  )
}
