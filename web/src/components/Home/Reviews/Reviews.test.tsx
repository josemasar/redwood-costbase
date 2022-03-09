import { render } from '@redwoodjs/testing/web'

import Reviews from './Reviews'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Reviews', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Reviews />)
    }).not.toThrow()
  })
})
