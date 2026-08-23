import Icon from './Icon.jsx'
import './About.css'

const values = [
  {
    title: 'Direktna komunikacija',
    description: 'Bez posrednika i bez žargona — dogovaramo se jasno, brzo i transparentno.',
  },
  {
    title: 'Poštivanje rokova',
    description: 'Dogovoreni datum lansiranja je obaveza, ne procjena.',
  },
  {
    title: 'Moderne tehnologije',
    description: 'Stranice gradim u Reactu — brze, stabilne i spremne za rast.',
  },
]

export default function About() {
  return (
    <section id="o-meni" className="about">
      <div className="container about__inner">
        <div className="about__visual">
          <div className="about__avatar">NK</div>
          <div className="about__visual-ring" aria-hidden="true" />
        </div>

        <div className="about__content">
          <span className="pill">O meni</span>
          <h2>Iza NerKod stoji jedan developer — ja.</h2>
          <p>
            Obrt NerKod nastao je iz želje da manji biznisi i obrtnici dobiju web stranicu kakvu
            inače imaju samo velike firme — brzu, preglednu i napravljenu s razumijevanjem za
            njihov posao, a ne generičku predložak stranicu.
          </p>
          <p>
            Svakom projektu pristupam osobno, od prvog razgovora do lansiranja, s ciljem da
            stranica zaista odgovara vašim ciljevima — ne samo da lijepo izgleda.
          </p>

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
            Popričajmo o vašem projektu
          </a>
        </div>
      </div>
    </section>
  )
}
