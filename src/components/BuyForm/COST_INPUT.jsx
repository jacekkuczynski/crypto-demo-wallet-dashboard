import React from "react";

export const COST_INPUT = ({ cost }) => {
  return (
    <>
      <label htmlFor="cost" type="number" value={cost}>
        Cost:
      </label>
      <input readOnly type="number" id="cost" value={cost}></input>
    </>
  );
};
