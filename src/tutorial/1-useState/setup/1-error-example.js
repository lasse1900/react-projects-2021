import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  // const handleClick = () => console.log('hello')
  const handleClick = () => {
    title = 'hello people';
    console.log('hello')
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

export default ErrorExample;
