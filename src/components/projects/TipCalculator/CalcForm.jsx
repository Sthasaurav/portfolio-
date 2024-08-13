import React from "react";

const CalcForm = ({ state, handleChange, calculateTotalAmount }) => {
  const predefinedTipPercentages = [10, 15, 20, 25];

  return (
    <div className="tip-calculator w-80 p-4 mt-44 mb-20 mx-auto rounded-lg bg-white/30 text-white shadow-lg backdrop-blur-sm border border-white/20">
      <h1 className="text-lg mb-4 text-center">Tip Calculator</h1>
      <div className="form-group mb-3">
        <label className="font-bold block mb-1">Bill Amount: </label>
        <input
          type="number"
          value={state.billAmount}
          name={"billAmount"}
          onChange={handleChange}
          className="w-full p-2 rounded bg-white/30 text-white placeholder-gray-200 shadow focus:outline-none focus:ring focus:ring-blue-500 text-sm"
        />
      </div>
      <div className="form-group mb-3">
        <label className="font-bold block mb-1">Tip Percentage: </label>
        <select
          name={"tipPercentage"}
          value={state.tipPercentage}
          onChange={handleChange}
          className="w-full p-2 rounded bg-white/30 text-black placeholder-gray-200 shadow focus:outline-none focus:ring focus:ring-blue-500 text-sm"
        >
          <option value="">Custom</option>
          {predefinedTipPercentages.map((percentage) => (
            <option key={percentage} value={percentage}>
              {percentage}%
            </option>
          ))}
        </select>
        {!state.tipPercentage && (
          <input
            type="number"
            name={"customTipPercentage"}
            onChange={handleChange}
            value={state.customTipPercentage}
            placeholder="Enter custom tip %"
            className="w-full p-2 mt-2 rounded bg-white/30 text-white placeholder-gray-200 shadow focus:outline-none focus:ring focus:ring-blue-500 text-sm"
          />
        )}
      </div>
      <div className="form-group mb-3">
        <label className="font-bold block mb-1">Split Count: </label>
        <input
          type="number"
          name="splitCount"
          value={state.splitCount}
          onChange={handleChange}
          min="1"
          className="w-full p-2 rounded bg-white/30 text-white placeholder-gray-200 shadow focus:outline-none focus:ring focus:ring-blue-500 text-sm"
        />
      </div>
      <div className="checkbox-group flex items-center gap-2 mb-3">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="includeTax"
            checked={state.includeTax}
            onChange={handleChange}
            className="w-4 h-4"
          />{" "}
          <span className="ml-2">Include Tax</span>
        </label>
        {state.includeTax && (
          <input
            type="number"
            name="taxPercentage"
            placeholder="Enter tax %"
            value={state.taxPercentage}
            onChange={handleChange}
            className="flex-1 p-2 rounded bg-white/30 text-white placeholder-gray-200 shadow focus:outline-none focus:ring focus:ring-blue-500 text-sm"
          />
        )}
      </div>
      <button
        onClick={calculateTotalAmount}
        className="w-full py-2 text-base font-semibold text-white bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500 rounded shadow hover:shadow-lg transition duration-300"
      >
        Calculate
      </button>
      <div className="mt-5">
        <h2 className="text-md">Total Amount: {state.totalAmount}</h2>
        <h2 className="text-md">Tip Amount: {state.tipAmount}</h2>
        <h2 className="text-md">Split Amount: {state.splitAmount}</h2>
      </div>
    </div>
  );
};

export default CalcForm;
