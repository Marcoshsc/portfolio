import { deployments } from './data'

export function DeploymentsSection() {
  return (
    <section className="portfolio-section" id="deployments">
      <header className="portfolio-section__header portfolio-section__header--asymmetric">
        <h2 className="portfolio-heading">
          Shipped <span className="portfolio-text-gradient">Projects</span>
        </h2>
        <p className="portfolio-section__intro portfolio-section__intro--accented">
          Engineering scalable solutions across diverse industrial sectors. From
          distributed logistics to high-performance metallurgy platforms.
        </p>
      </header>

      <div className="portfolio-deployments">
        {deployments.map((deployment) => (
          <article
            className="portfolio-card portfolio-card--deployment"
            key={deployment.title}
          >
            <div className="portfolio-card__header">
              <div>
                <span
                  className={`portfolio-eyebrow portfolio-eyebrow--${deployment.tone}`}
                >
                  {deployment.eyebrow}
                </span>
                <h3>{deployment.title}</h3>
              </div>
              <span
                className={`portfolio-chip portfolio-chip--${deployment.tone}`}
              >
                {deployment.badge}
              </span>
            </div>
            <p className="portfolio-copy">{deployment.summary}</p>
            <div className="portfolio-deployments__grid">
              <div>
                <h4>{deployment.focusTitle}</h4>
                <ul className="portfolio-list">
                  {deployment.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              {deployment.projectBullets ? (
                <div>
                  <h4>{deployment.projectTitle}</h4>
                  <ul className="portfolio-list">
                    {deployment.projectBullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="portfolio-chip-row">
                {deployment.tags.map((tag) => (
                  <span
                    className={`portfolio-chip portfolio-chip--${deployment.tone}`}
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <footer className="portfolio-card__footer">
              <span>{deployment.footer}</span>
              <span aria-hidden="true">↗</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}
