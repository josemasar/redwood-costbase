import { render } from '@redwoodjs/testing/web'

import Kanban from './Kanban'

describe('Kanban', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Kanban />)
    }).not.toThrow()
  })
})
