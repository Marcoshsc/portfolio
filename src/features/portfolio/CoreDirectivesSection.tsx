import { directives } from './data'

export function CoreDirectivesSection() {
  return (
    <section className="portfolio-section" id="principles">
      <header className="portfolio-section__header">
        <h2 className="portfolio-heading">Operating Principles</h2>
        <p className="portfolio-section__intro">{directives.intro}</p>
      </header>

      <div className="portfolio-grid portfolio-grid--directives">
        <article className="portfolio-card portfolio-card--spotlight">
          <span className="portfolio-eyebrow">
            {directives.ownership.label}
          </span>
          <h3 className="portfolio-heading portfolio-heading--hero">
            {directives.ownership.title}
          </h3>
          <blockquote>{directives.ownership.quote}</blockquote>
          <p className="portfolio-copy">{directives.ownership.summary}</p>
        </article>

        <article className="portfolio-card portfolio-card--primary">
          <h3>{directives.delivery.title}</h3>
          <p>{directives.delivery.summary}</p>
          <ul className="portfolio-list">
            {directives.delivery.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>

        <article className="portfolio-card">
          <span className="portfolio-pill portfolio-pill--secondary">
            {directives.collaboration.label}
          </span>
          <h3>{directives.collaboration.title}</h3>
          <p className="portfolio-copy">{directives.collaboration.summary}</p>
          <div className="portfolio-stat-row">
            {directives.collaboration.stats.map((stat) => (
              <div className="portfolio-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="portfolio-card portfolio-card--autonomy">
          <div>
            <h3>{directives.engineering.title}</h3>
            <div className="portfolio-list-block">
              {directives.engineering.items.map((item) => (
                <div key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="portfolio-logic-card">
            <h4>{directives.engineering.practicesHeading}</h4>
            <div className="portfolio-list-block">
              {directives.engineering.practices.map((item) => (
                <div key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
