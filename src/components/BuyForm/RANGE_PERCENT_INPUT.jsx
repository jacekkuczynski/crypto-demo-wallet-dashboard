export const RANGE_PERCENT_INPUT = ({ selectedCoin, onChange, rangeValue }) => {
  return (
    <>
      <label htmlFor="range">Select Percent of you cash</label>
      <input
        className={selectedCoin?.length < 1 ? "block" : "hidden"}
        readOnly
        defaultValue="0"
        type="range"
        disabled
      ></input>
      <input
        className={selectedCoin?.length < 1 ? "hidden" : "block"}
        type="range"
        min="0"
        max="100"
        step="1"
        id="range"
        value={rangeValue}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      ></input>
    </>
  );
};
