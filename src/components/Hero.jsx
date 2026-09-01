import Icon from './Icon.jsx'
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
            <svg
              className="hero__graphic"
              viewBox="0 0 320 224"
              role="img"
              aria-label="Prikaz izrađene web stranice"
            >
              <rect x="0" y="0" width="320" height="224" rx="12" fill="#221b3d" />

              <rect x="16" y="16" width="18" height="18" rx="5" fill="url(#heroGrad)" />
              <rect x="44" y="21" width="46" height="8" rx="4" fill="#c9c1e2" opacity="0.5" />
              <rect x="216" y="21" width="24" height="8" rx="4" fill="#c9c1e2" opacity="0.35" />
              <rect x="248" y="21" width="24" height="8" rx="4" fill="#c9c1e2" opacity="0.35" />
              <rect x="280" y="21" width="24" height="8" rx="4" fill="#c9c1e2" opacity="0.35" />

              <rect x="16" y="52" width="150" height="12" rx="6" fill="#faf9ff" />
              <rect x="16" y="70" width="110" height="12" rx="6" fill="#faf9ff" opacity="0.85" />
              <rect x="16" y="94" width="130" height="7" rx="3.5" fill="#c9c1e2" opacity="0.55" />
              <rect x="16" y="106" width="90" height="7" rx="3.5" fill="#c9c1e2" opacity="0.55" />
              <rect x="16" y="126" width="72" height="22" rx="11" fill="url(#heroGrad)" />

              <rect x="180" y="52" width="124" height="96" rx="10" fill="#2a2247" stroke="#342b56" />
              <circle cx="242" cy="90" r="20" fill="url(#heroGrad)" opacity="0.85" />
              <rect x="196" y="120" width="92" height="7" rx="3.5" fill="#c9c1e2" opacity="0.5" />
              <rect x="196" y="132" width="60" height="7" rx="3.5" fill="#c9c1e2" opacity="0.35" />

              {[0, 1, 2].map((i) => (
                <g key={i} transform={`translate(${16 + i * 104} 168)`}>
                  <rect width="92" height="40" rx="8" fill="#2a2247" stroke="#342b56" />
                  <circle cx="18" cy="20" r="8" fill="url(#heroGrad)" opacity="0.7" />
                  <rect x="34" y="14" width="46" height="6" rx="3" fill="#c9c1e2" opacity="0.5" />
                  <rect x="34" y="24" width="30" height="6" rx="3" fill="#c9c1e2" opacity="0.3" />
                </g>
              ))}

              <defs>
                <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f5b942" />
                  <stop offset="55%" stopColor="#e8833a" />
                  <stop offset="100%" stopColor="#ffd76b" />
                </linearGradient>
              </defs>
            </svg>
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
