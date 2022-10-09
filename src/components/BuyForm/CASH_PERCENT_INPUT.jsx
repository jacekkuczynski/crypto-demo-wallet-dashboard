export const CASH_PERCENT_INPUT = ({ rangeValue }) => {
  return (
    <>
      <label htmlFor="coinAmount">percentage of account</label>
      <input
        readOnly
        value={rangeValue}
        type="number"
        id="coinAmount"
        min="0"
        max="100"
        step="1"
      ></input>
    </>
  );
};
