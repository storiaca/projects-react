import { useEffect } from 'react';

const Test = () => {
  const obj = { a: 1 };

  useEffect(() => {
    console.log('Effect run');
  }, [obj]);
  return (
    <div>
      <h1>Test component</h1>
    </div>
  );
};

export default Test;
