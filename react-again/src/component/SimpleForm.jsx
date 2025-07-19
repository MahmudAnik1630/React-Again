import React, { useState } from 'react';

function SimpleForm() {
  const [inputValue, setInputValue] = useState('');
  const [allValues, setAllValues] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() !== '') {
      setAllValues([...allValues, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const newValues = [...allValues];
    newValues.splice(index, 1);
    setAllValues(newValues);
  };

  return (
    <div className='form-container'>
      <h1>Simple Form</h1>
      <input type="text" value={inputValue} onChange={handleChange} className='input-field' />
      <button onClick={handleClick} className='add-button'>Add Task</button>

      {allValues.map((value, index) => (
        <div key={index} className='task-item'>
          <h1 style={{ display: 'inline-block', marginRight: '10px' }}>{value}</h1>
          <button onClick={() => handleDelete(index)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default SimpleForm;
