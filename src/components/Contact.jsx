import { useState } from 'react'
import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { contactInfo } from '../data/content.js'
import './Contact.css'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

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
        <SectionHeading
          eyebrow="Kontakt"
          title="Razgovarajmo o vašem projektu"
          subtitle="Ispunite formu ili se javite direktno — obično odgovaram u roku od jednog radnog dana."
        />

        <div className="contact__grid">
          <div className="contact__info">
            <a className="contact__info-item" href={`mailto:${contactInfo.email}`}>
              <Icon name="mail" size={20} />
              <div>
                <span className="contact__info-label">Email</span>
                <span>{contactInfo.email}</span>
              </div>
            </a>
            <a className="contact__info-item" href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
              <Icon name="phone" size={20} />
              <div>
                <span className="contact__info-label">Telefon</span>
                <span>{contactInfo.phone}</span>
              </div>
            </a>
            <div className="contact__info-item">
              <Icon name="pin" size={20} />
              <div>
                <span className="contact__info-label">Lokacija</span>
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
              <label htmlFor="name">Ime i prezime</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Vaše ime"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="vas@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Poruka</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Recite mi nešto o vašem projektu..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary contact__submit">
              Pošalji poruku
              <Icon name="arrow" size={18} />
            </button>

            {status === 'sent' && (
              <p className="contact__success">
                <Icon name="check" size={16} />
                Hvala na poruci! Javit ću vam se uskoro na uneseni email.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
