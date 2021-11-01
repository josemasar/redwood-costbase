import { render } from '@redwoodjs/testing/web'

import Features from './Features'

describe('Features', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Features />)
    }).not.toThrow()
  })
})
