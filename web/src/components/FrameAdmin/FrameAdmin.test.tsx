import { render } from '@redwoodjs/testing/web'

import FrameAdmin from './FrameAdmin'

describe('FrameAdmin', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FrameAdmin />)
    }).not.toThrow()
  })
})
