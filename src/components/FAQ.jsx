import { useState } from 'react'
import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { faqItems } from '../data/content.js'
import './FAQ.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="container faq__inner">
        <SectionHeading
          eyebrow="Najčešća pitanja"
          title="Sve što vas zanima prije nego krenemo"
          subtitle="Niste pronašli odgovor na svoje pitanje? Slobodno se javite putem kontakt forme."
        />

        <div className="faq__list">
          {faqItems.map((item, index) => {
            const isOpen = index === openIndex
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
                <button
                  className="faq-item__trigger"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <Icon name="chevron" size={20} className="faq-item__chevron" />
                </button>
                <div className="faq-item__panel">
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
