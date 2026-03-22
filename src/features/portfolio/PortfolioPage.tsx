import './portfolio.css'

import { CoreDirectivesSection } from './CoreDirectivesSection'
import { DeploymentsSection } from './DeploymentsSection'
import { HomeSection } from './HomeSection'
import { SkillMatrixSection } from './SkillMatrixSection'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Experience', href: '#deployments' },
  { label: 'Principles', href: '#principles' },
]

export function PortfolioPage() {
  return (
    <div className="portfolio-app">
      <div className="portfolio-app__mesh" aria-hidden="true" />
      <header className="portfolio-topbar">
        <a className="portfolio-topbar__brand" href="#home">
          Marcos Cunha
        </a>
        <nav aria-label="Primary">
          <ul className="portfolio-topbar__nav">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="portfolio-main">
        <HomeSection />
        <SkillMatrixSection />
        <DeploymentsSection />
        <CoreDirectivesSection />
      </main>
    </div>
  )
}
