import { render } from '@testing-library/react'
import { Wrapper } from '.'
import { WrapperBackgroundGreen } from './wrapperbackground'

describe('<Wrapper />', () => {
  it('should render the colors correctly', () => {
    const { container } = render(<Wrapper />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#2c2a32' })
  })
})

describe('<WrapperBackground />', () => {
  it('should render the colors correctly', () => {
    const { container } = render(<WrapperBackgroundGreen />)

    expect(container.firstChild).toHaveStyle(`
      background: linear-gradient(120deg, #2c2a32 57%, #48d8a4 33%);
    `)
  })
})
