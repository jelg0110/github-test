import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './SearchInput.module.scss';
import SearchInputType from './SearchInput';

export default function SearchInput({ onSubmit, inputProps, buttonProps }: SearchInputType) {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    if (inputProps && inputProps.onChange) {
      inputProps.onChange(event);
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      onSubmit(value);
    }
  }

  return (
    <form className={styles.SearchInput} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        name="search"
        {...inputProps}
        value={value}
        onChange={handleChange}
      />
      <button type="submit" {...buttonProps}>Search</button>
    </form>
  );
}