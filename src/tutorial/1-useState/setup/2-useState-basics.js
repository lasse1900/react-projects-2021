import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('Hello World!');

  const handleClick = () => {
    if (title !== 'Random Title') {
      setTitle('Random Title');
    } else {
      setTitle('Hello World!');
    }
  }

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  )
};

export default UseStateBasics;
