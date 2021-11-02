import { render } from '@redwoodjs/testing/web'

import StartNow from './StartNow'

describe('StartNow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartNow />)
    }).not.toThrow()
  })
})
