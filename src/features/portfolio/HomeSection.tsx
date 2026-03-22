import { heroData } from './data'

export function HomeSection() {
  return (
    <section className="portfolio-home" id="home">
      <div className="portfolio-grid portfolio-home__grid">
        <div className="portfolio-home__copy">
          <span className="portfolio-pill portfolio-pill--secondary">
            {heroData.status}
          </span>
          <h1 className="portfolio-display">
            {heroData.titlePrefix}
            <span className="portfolio-text-gradient">
              {' '}
              {heroData.titleHighlight}
            </span>
          </h1>
          <p className="portfolio-lead">{heroData.summary}</p>
          <div className="portfolio-actions">
            <a
              className="portfolio-button portfolio-button--primary"
              href={heroData.primaryAction.href}
            >
              {heroData.primaryAction.label}
            </a>
            <a
              className="portfolio-button portfolio-button--ghost"
              href={heroData.secondaryAction.href}
            >
              {heroData.secondaryAction.label}
            </a>
          </div>
          <ul
            aria-label="Technology indicators"
            className="portfolio-inline-list"
          >
            {heroData.indicators.map((indicator) => (
              <li key={indicator}>{indicator}</li>
            ))}
          </ul>
        </div>

        <div className="portfolio-home__visual">
          <div className="portfolio-home__orb" />
          <div className="portfolio-card portfolio-home__portrait-card">
            <div className="portfolio-home__floating portfolio-home__floating--top">
              <span className="portfolio-home__floating-label">
                {heroData.floatingCardLabel}
              </span>
              <strong>{heroData.floatingCardValue}</strong>
            </div>
            <img
              alt="Marcos Cunha professional portrait"
              className="portfolio-home__portrait"
              src={heroData.portrait}
            />
            <div className="portfolio-home__floating portfolio-home__floating--bottom">
              <span className="portfolio-home__floating-label">
                {heroData.spotlightLabel}
              </span>
              <strong>{heroData.spotlightTitle}</strong>
              <span>{heroData.spotlightSummary}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-status-bar" role="status">
        <span className="portfolio-status-bar__pulse" aria-hidden="true" />
        <span>{heroData.availability}</span>
        <span className="portfolio-status-bar__divider" aria-hidden="true" />
        <span>{heroData.footerStatus}</span>
      </div>
    </section>
  )
}
