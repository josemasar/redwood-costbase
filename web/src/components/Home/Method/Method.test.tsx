import { render } from '@redwoodjs/testing/web'

import Method from './Method'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Method', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Method />)
    }).not.toThrow()
  })
})
