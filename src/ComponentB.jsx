// src/ComponentB.js
import React from 'react';
import useSharedStore from './store';

const ComponentB = () => {
  const sharedVariable = useSharedStore((state) => state.sharedVariable);

  return (
    <div>
      <h2>Component B</h2>
      <p>Shared Variable: {sharedVariable}</p>
      <button onClick={useSharedStore().decrement}>Decrement</button>
    </div>
  );
};

export default ComponentB;
