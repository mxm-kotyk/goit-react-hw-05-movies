import { useState } from 'react';
import { Button, Input } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="query" value={value} onChange={handleChange} />
        <Button type="submit">Search</Button>
      </form>
    </>
  );
};

export default SearchForm;
