import { render } from '@redwoodjs/testing/CardDashboardMain', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardDashboardMain />)
    }).not.toThrow()
  })
})
