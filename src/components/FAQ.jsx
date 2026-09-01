import { useState } from 'react'
import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import './FAQ.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const { t } = useLanguage()
  const { eyebrow, title, subtitle, items } = t.faq

  return (
    <section id="faq" className="faq">
      <div className="container faq__inner">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="faq__list">
          {items.map((item, index) => {
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
