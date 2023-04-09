import { ChangeEvent, useState } from 'react';
import styles from './SearchInput.module.scss';
import SearchInputType from './SearchInput';

export default function SearchInput({ onSubmit }: SearchInputType) {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleSubmit = () => {
    if (value) {
      onSubmit(value);
    }
  }

  return (
    <div className={styles.SearchInput}>
      <input type="text" placeholder="Search..." name="search" value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}