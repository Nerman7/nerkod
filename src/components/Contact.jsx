import { useState } from 'react'
import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import './Contact.css'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const { t } = useLanguage()
  const { eyebrow, title, subtitle, emailLabel, phoneLabel, locationLabel, form: formText } =
    t.contact
  const contactInfo = t.contactInfo

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('sent')
    setForm(initialForm)
  }

  return (
    <section id="kontakt" className="contact">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="contact__grid">
          <div className="contact__info">
            <a className="contact__info-item" href={`mailto:${contactInfo.email}`}>
              <Icon name="mail" size={20} />
              <div>
                <span className="contact__info-label">{emailLabel}</span>
                <span>{contactInfo.email}</span>
              </div>
            </a>
            <a className="contact__info-item" href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
              <Icon name="phone" size={20} />
              <div>
                <span className="contact__info-label">{phoneLabel}</span>
                <span>{contactInfo.phone}</span>
              </div>
            </a>
            <div className="contact__info-item">
              <Icon name="pin" size={20} />
              <div>
                <span className="contact__info-label">{locationLabel}</span>
                <span>{contactInfo.location}</span>
              </div>
            </div>

            <div className="contact__social">
              <a href="#" aria-label="Instagram">
                <Icon name="instagram" size={19} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Icon name="linkedin" size={19} />
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">{formText.nameLabel}</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={formText.namePlaceholder}
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">{formText.emailLabel}</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={formText.emailPlaceholder}
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">{formText.messageLabel}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={formText.messagePlaceholder}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary contact__submit">
              {formText.submit}
              <Icon name="arrow" size={18} />
            </button>

            {status === 'sent' && (
              <p className="contact__success">
                <Icon name="check" size={16} />
                {formText.success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
