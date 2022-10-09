import { useSelector } from "react-redux";

export const SELECT_OPTIONS = ({ onChange }) => {
  const selectOptions = useSelector((state) => state.selectedCoins.value);

  return (
    <select
      id="selected"
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      <option></option>
      {selectOptions?.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};
