import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from '.';

const searchInput = () => screen.getByTestId(/search-input/i);
const searchButton = () => screen.getByTestId(/search-button/i);

test('Render SearchInput succesfully', () => {
  const onSubmit = jest.fn();
  render(<SearchInput value="value" onSubmit={onSubmit} />);

  expect(searchInput()).toHaveValue('value');
})

test('Modify SearchInput succesfully', () => {
  const onSubmit = jest.fn();
  render(<SearchInput onSubmit={onSubmit} />);

  expect(searchInput()).toHaveValue('');
  
  act(() => {
    userEvent.type(searchInput(), 'value');
  });

  expect(searchInput()).toHaveValue('value');
  
  userEvent.click(searchButton());

  expect(onSubmit).toHaveBeenCalledWith('value');
})