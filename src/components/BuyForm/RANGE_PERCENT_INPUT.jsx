export const RANGE_PERCENT_INPUT = ({ selectedCoin, onChange, rangeValue }) => {
  console.log(rangeValue);

  return (
    <>
      <label htmlFor="range">Select Percent of you cash</label>
      {selectedCoin?.length < 1 ? (
        <input type="range" disabled></input>
      ) : (
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          id="range"
          value={rangeValue}
          onChange={(e) => {
            e.preventDefault();
            onChange(e.target.value);
          }}
        ></input>
      )}
    </>
  );
};
