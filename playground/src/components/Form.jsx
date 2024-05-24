import { useState } from 'react';

function Form() {
  const [inputNumber, setInputNumber] = useState(0);
  const [inputString, setInputString] = useState(0);

  function handleNumberValue(e) {
    const { name, value, valueAsNumber } = e.target;

    if (name === 'numberString') {
      setInputString(value);
    } else if (name === 'numberCode') {
      setInputNumber(valueAsNumber);
    }
  }

  console.log('Input number:', typeof inputNumber);
  console.log('Input string:', typeof inputString);
  return (
    <>
      <form className="w-[300px] mx-auto">
        <div className="mb-5">
          <label htmlFor="numberString">Number type string</label>
          <input
            id="numberString"
            name="numberString"
            type="number"
            value={inputString}
            onChange={(e) => handleNumberValue(e)}
            className="border border-stone-800 p-2 text-slate-800 w-full text-lg"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="numberCode">Number type number</label>
          <input
            id="numberCode"
            name="numberCode"
            type="number"
            value={inputNumber}
            onChange={(e) => handleNumberValue(e)}
            className="border p-2 text-slate-800 border-stone-800 w-full block text-lg"
          />
        </div>

        {/* <button
          type="submit"
          className="px-2 py-4 bg-blue-600 text-white w-full text-2xl"
        >
          Send
        </button> */}
      </form>

      <div className="mt-4 ">
        <p className="text-lg text-red-500 mb-2">
          Input string type: {typeof inputString}
          <span className="block mt-1">{inputString}</span>
        </p>
        <p className="text-lg text-green-500 mb-2">
          Input number type: {typeof inputNumber}
          <span className="block mt-1">{inputNumber}</span>
        </p>
      </div>
    </>
  );
}

export default Form;
