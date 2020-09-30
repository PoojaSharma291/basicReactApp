import React from 'react';

const LayoutComponent = () => {
// Basic Layout 
  function sayHello() {
    alert('This is your lucky hour');
  }
  function tick(){
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    ); 
  }
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  // setInterval(tick, 1000);
  return (
    <div>{element}<button onClick={sayHello}>Click me! To check your lucky hour of the day</button></div>
  )
};

export default LayoutComponent;