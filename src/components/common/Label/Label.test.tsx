import { render, screen } from '@testing-library/react';
import Label from '.';

test('Render Label succesfully', () => {
  render(<Label color="red">label</Label>);

  expect(screen.getByTestId(/label/i)).toHaveTextContent('label');
  expect(screen.getByTestId(/label/i)).toHaveStyle({
    borderColor: 'red',
    backgroundColor: 'red',
  });
});
