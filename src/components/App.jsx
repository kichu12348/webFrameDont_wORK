// App.jsx
import React from 'react';

const App = () => {

  let message = 'Hello, World!';
   
  return (
    <>
      <h1>Hello, World!</h1>
      <p>This is a simple web frameworks.</p>
      <p>{message}</p>
      <button onClick={() => message="hellow kuch"}>Click me!</button>
    </>
  );
};

export default App;
