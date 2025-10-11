import React, { useState } from 'react';

const ButtonCounter = ({ start }) => {
  const [tick, setTick] = useState(start);

  function handleClickTick() {
    setTick((prevTick) => prevTick + 1);
  }
  return (
    <div>
      <p>Count: {tick}</p>
      <button onClick={() => handleClickTick()}>Click Me</button>
    </div>
  );
};

export default ButtonCounter;
