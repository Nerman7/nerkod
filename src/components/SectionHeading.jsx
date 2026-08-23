import './SectionHeading.css'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <span className="pill">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  )
}
