export const handleSubmit = (event) => {
  event.preventDefault();
  const selected = event.currentTarget.selected.value;

  console.log(selected);
};
