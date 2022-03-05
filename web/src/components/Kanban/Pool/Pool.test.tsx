import { render } from '@redwoodjs/testing/web'

import Pool from './Pool'

describe('Pool', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Pool />)
    }).not.toThrow()
  })
})
