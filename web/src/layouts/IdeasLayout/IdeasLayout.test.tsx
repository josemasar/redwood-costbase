import { render } from '@redwoodjs/testing/web'

import IdeasLayout from './IdeasLayout'

describe('IdeasLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IdeasLayout />)
    }).not.toThrow()
  })
})
