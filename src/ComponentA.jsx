// src/ComponentA.js
import React from 'react';
import useSharedStore from './store';

const ComponentA = () => {
  const sharedVariable = useSharedStore((state) => state.sharedVariable);

  return (
    <div>
      <h2>Component A</h2>
      <p>Shared Variable: {sharedVariable}</p>
      <button onClick={useSharedStore().increment}>Increment</button>
    </div>
  );
};

export default ComponentA;
