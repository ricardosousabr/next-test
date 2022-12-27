import { render } from '@testing-library/react'
import Contact from './index'

it('renders homepage unchanged', () => {
  const { container } = render(<Contact />)
  expect(container).toMatchSnapshot()
})