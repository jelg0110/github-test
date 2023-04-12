import { render } from '@testing-library/react';
import App from './App';

test('Render App succesfully', () => {
  const view = render(<App />);
  expect(view).toBeDefined();
});
