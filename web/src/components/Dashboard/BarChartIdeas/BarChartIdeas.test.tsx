import { render } from '@redwoodjs/testing/web'

import BarChartIdeas from './BarChartIdeas'

describe('BarChartIdeas', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BarChartIdeas />)
    }).not.toThrow()
  })
})
