import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { CoreDirectivesSection } from './CoreDirectivesSection'
import { DeploymentsSection } from './DeploymentsSection'
import { SkillMatrixSection } from './SkillMatrixSection'

describe('portfolio sections', () => {
  it('renders skill matrix highlights and metrics', () => {
    render(<SkillMatrixSection />)

    expect(
      screen.getByRole('heading', { name: /ai & modern engineering/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/multi-agent systems/i)).toBeInTheDocument()
    expect(screen.getByText(/aws \/ azure/i)).toBeInTheDocument()
    expect(
      screen.getByText(
        /multi-agent workflows that improve engineering throughput/i,
      ),
    ).toBeInTheDocument()
    expect(screen.getByText(/graphql/i)).toBeInTheDocument()
    expect(screen.getByText(/9\.5\/10 gpa/i)).toBeInTheDocument()
    expect(screen.queryByText(/langgraph/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/crewai/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/120\+/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/99\.9/i)).not.toBeInTheDocument()
  })

  it('renders deployments cards for the referenced portfolio work', () => {
    render(<DeploymentsSection />)

    expect(
      screen.getByRole('heading', { name: /dti digital/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /agileengine/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/syngenta/i)).toBeInTheDocument()
    expect(screen.getByText(/rhi magnesita/i)).toBeInTheDocument()
    expect(screen.getByText(/graph theory/i)).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: /digital ecosystem/i }),
    ).not.toBeInTheDocument()
  })

  it('renders the core directives bento grid content', () => {
    render(<CoreDirectivesSection />)

    expect(
      screen.getByText(
        /strong ownership of assigned features and responsibilities/i,
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /end-to-end delivery/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/validating assumptions early/i),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /autonomy & collaboration/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/cross-team alignment/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /^modern engineering$/i }),
    ).toBeInTheDocument()
    expect(
      screen.getAllByText(/strong testing culture/i).length,
    ).toBeGreaterThan(0)
    expect(
      screen.getAllByText(/ai agent skill repository/i).length,
    ).toBeGreaterThan(0)
    expect(screen.queryByText(/48h/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/3 am/i)).not.toBeInTheDocument()
  })
})
