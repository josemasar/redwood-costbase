import { render } from '@redwoodjs/testing/web'

import BarChartTasks from './BarChartTasks'

describe('BarChartTasks', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BarChartTasks />)
    }).not.toThrow()
  })
})
