import React, { useState } from 'react';

function Form() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You submitted: ${inputValue}`);
    setInputValue(''); 
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          onChange={handleChange}
          value={inputValue}
          className='input'
          placeholder='Email'
          type='text'
        />
        <button className='btn' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
