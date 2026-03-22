import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HomeSection } from './HomeSection'

describe('HomeSection', () => {
  it('renders hero copy, actions, and status details from the Stitch design', () => {
    render(<HomeSection />)

    expect(screen.getByText(/system initialized/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /fullstack engineer & ai pioneer/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/fluent english/i)).toHaveLength(2)
    expect(
      screen.getByRole('link', { name: /explore my work/i }),
    ).toHaveAttribute('href', '#deployments')
    expect(
      screen.getByText(/end-to-end feature ownership/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/^fullstack developer$/i)).toBeInTheDocument()
    expect(screen.getByText(/^react$/i)).toBeInTheDocument()
    expect(screen.getByText(/cloud & devops/i)).toBeInTheDocument()
    expect(screen.queryByText(/architect/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/systems \+ ai/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/typescript/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/project velocity/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/ready for deployment/i)).not.toBeInTheDocument()
  })
})
