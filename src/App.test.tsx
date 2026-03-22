import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('App', () => {
  it('renders the four main Stitch-derived portfolio sections', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /fullstack engineer & ai pioneer/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /system capabilities/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /shipped projects/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /operating principles/i,
      }),
    ).toBeInTheDocument()
  })
})
