import { render } from '@redwoodjs/testing/web'

import CardDashboard1 from './CardDashboard1'

describe('CardDashboard1', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardDashboard1 />)
    }).not.toThrow()
  })
})
