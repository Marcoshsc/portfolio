import { capabilityGroups } from './data'

export function SkillMatrixSection() {
  return (
    <section className="portfolio-section" id="capabilities">
      <header className="portfolio-section__header">
        <h2 className="portfolio-heading">
          System <span className="portfolio-text-gradient">Capabilities</span>
        </h2>
        <p className="portfolio-section__intro">
          Architecting high-performance digital ecosystems through the
          intersection of traditional engineering excellence and modern
          cognitive computing.
        </p>
      </header>

      <div className="portfolio-grid portfolio-grid--capabilities">
        <article className="portfolio-card portfolio-card--feature">
          <div className="portfolio-card__header">
            <div>
              <span className="portfolio-eyebrow">
                {capabilityGroups.hero.label}
              </span>
              <h3>{capabilityGroups.hero.heading}</h3>
            </div>
          </div>
          <div className="portfolio-skill-cluster">
            {capabilityGroups.hero.items.map((item) => (
              <div className="portfolio-skill-item" key={item.title}>
                <div className="portfolio-skill-item__row">
                  <span>{item.title}</span>
                </div>
                <p className="portfolio-copy">{item.summary}</p>
                <div className="portfolio-chip-row">
                  {item.tags.map((tag) => (
                    <span
                      className={`portfolio-chip portfolio-chip--${item.tone}`}
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="portfolio-card">
          <h3>{capabilityGroups.frontend.heading}</h3>
          <div className="portfolio-bullets">
            {capabilityGroups.frontend.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="portfolio-chip-row">
            <span className="portfolio-chip portfolio-chip--secondary">
              {capabilityGroups.frontend.badge}
            </span>
          </div>
        </article>

        <article className="portfolio-card">
          <h3>{capabilityGroups.backend.heading}</h3>
          <div className="portfolio-bullets portfolio-bullets--two-col">
            {capabilityGroups.backend.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="portfolio-stat-row">
            {capabilityGroups.backend.stats.map((stat) => (
              <div className="portfolio-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="portfolio-card">
          <h3>{capabilityGroups.cloud.heading}</h3>
          <div className="portfolio-cloud-grid">
            {capabilityGroups.cloud.items.map((item) => (
              <div className="portfolio-cloud-grid__item" key={item.label}>
                <span
                  className={`portfolio-eyebrow portfolio-eyebrow--${item.tone}`}
                >
                  {item.label}
                </span>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="portfolio-card portfolio-card--convergence">
        <div>
          <h3>{capabilityGroups.convergence.heading}</h3>
          <p className="portfolio-section__intro">
            {capabilityGroups.convergence.summary}
          </p>
          <div className="portfolio-actions">
            {capabilityGroups.convergence.actions.map((action) => (
              <a
                className={`portfolio-button ${action.tone === 'primary' ? 'portfolio-button--primary' : 'portfolio-button--ghost'}`}
                href={action.href}
                key={action.label}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
        <div className="portfolio-metric-grid">
          {capabilityGroups.convergence.metrics.map((metric) => (
            <div
              className={`portfolio-metric portfolio-metric--${metric.tone}`}
              key={metric.label}
            >
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}
