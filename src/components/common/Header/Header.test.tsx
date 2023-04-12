import { render, screen } from '@testing-library/react';
import Header from '.';

jest.mock('react-router-dom', () => ({
  Link: (props: any) => <a {...props} href="#"></a>,
}));

test('Render Header succesfully', () => {
  render(<Header />);
  
  expect(screen.getByTestId(/header-title/i)).toHaveTextContent('Github Browser');
});
