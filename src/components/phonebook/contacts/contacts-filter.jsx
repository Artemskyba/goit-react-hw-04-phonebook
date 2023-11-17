export const Filter = ({ filter, updateFilter }) => {
  return (
    <>
      <h4>Find contacts by name</h4>
      <input
        type="text"
        value={filter}
        onChange={e => updateFilter(e.target.value)}
      ></input>
    </>
  );
};
