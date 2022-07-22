import { render, screen } from '@testing-library/react';
import App from './App';


/* test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})
*/

test('renders GitHub card', () => {
  render(<App />)
  const nameElement = screen.getByText(/YPhuong/i)
  expect(nameElement).toBeInTheDocument()
})
