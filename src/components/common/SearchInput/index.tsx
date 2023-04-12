import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from './SearchInput.module.scss';
import SearchInputType from './SearchInput';

export default function SearchInput({ value, onSubmit, inputProps, buttonProps }: SearchInputType) {
  const [val, setVal] = useState('');

  useEffect(() => {
    if (value !== undefined) {
      setVal(value);
    }
  }, [value])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value)
    if (inputProps && inputProps.onChange) {
      inputProps.onChange(event);
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (val) {
      onSubmit(val);
    }
  }

  return (
    <form className={styles.SearchInput} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        name="search"
        {...inputProps}
        value={val}
        onChange={handleChange}
        data-testid="search-input"
      />
      <button type="submit" {...buttonProps} data-testid="search-button">Search</button>
    </form>
  );
}