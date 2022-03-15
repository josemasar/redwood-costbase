import { render } from '@redwoodjs/testing/web'

import CardDashboardMain from './CardDashboardMain'

describe('CardDashboardMain', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardDashboardMain />)
    }).not.toThrow()
  })
})
