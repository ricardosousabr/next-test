import { render } from '@testing-library/react'
import Menu from './index'

it('renders homepage unchanged', () => {
  const { container } = render(<Menu />)
  expect(container).toMatchSnapshot()
})