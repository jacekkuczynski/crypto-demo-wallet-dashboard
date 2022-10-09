import React from "react";

export const AMOUNT_INPUT = ({ amount }) => {
  return (
    <>
      <label htmlFor="amount" type="number">
        Amount:
      </label>
      <input readOnly type="number" id="amount" value={amount}></input>
    </>
  );
};
