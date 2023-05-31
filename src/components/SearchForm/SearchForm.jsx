import { useState } from 'react';

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
        <input type="text" name="query" velue={value} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchForm;
