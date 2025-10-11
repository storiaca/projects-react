import React, { useState } from 'react';

const PriceCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [type, setType] = useState('standard');
  const [totalPrice, setTotalPrice] = useState(0);

  function handleType(e) {
    setType(e.target.value);
  }

  function handleWeight(e) {
    setWeight(parseFloat(e.target.value) || 0);
  }

  function handleTotalPrice(e) {
    setTotalPrice(parseFloat(e.target.value) || 0);
  }

  function calculateTotalPrice(t, w, tp) {
    let discount = 0;

    if (t === 'standard') {
      discount = 0.06;
    } else if (t === 'seasonal') {
      discount = 0.12;
    } else if (t === 'weight') {
      discount = w > 10 ? 0.18 : 0.06;
    }

    return tp - tp * discount;
  }

  const discountedPrice = calculateTotalPrice(type, weight, totalPrice);

  return (
    <div>
      <label htmlFor="type">Select Type:</label>
      <select id="type" name="type" onChange={handleType} value={type}>
        <option value="standard">Standard</option>
        <option value="seasonal">Seasonal</option>
        <option value="weight">Weight</option>
      </select>

      <br />

      <label htmlFor="weight">Weight (kg):</label>
      <input
        type="number"
        id="weight"
        onChange={handleWeight}
        name="weight"
        step="0.01"
        value={weight}
      />

      <br />

      <label htmlFor="totalPrice">Total Price ($):</label>
      <input
        type="number"
        value={totalPrice}
        onChange={handleTotalPrice}
        id="totalPrice"
        name="totalPrice"
        step="0.01"
      />

      <div>
        <strong>Discounted price: </strong>
        <span id="discountedPrice">${discountedPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default PriceCalculator;
