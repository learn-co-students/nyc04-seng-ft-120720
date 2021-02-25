function Filter({
  isShowingOnlyGreased,
  setIsOnlyShowingGreased,
  sortBy,
  setSortBy,
}) {
  return (
    <div style={{ margin: "40px" }}>
      <label>
        Show Only Greased?
        <input
          type="checkbox"
          checked={isShowingOnlyGreased}
          onChange={(e) => setIsOnlyShowingGreased(e.target.checked)}
        />
      </label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Sort by name</option>
        <option value="weight">Sort by weight</option>
      </select>
    </div>
  );
}

export default Filter;
