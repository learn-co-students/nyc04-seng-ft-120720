const buttons = ["All", 5, 4, 3, 2, 1];

function Filter({ search, setSearch, phase, setPhase }) {
  return (
    <>
      <div className="filter">
        {buttons.map((value) => {
          const className = phase === value ? "active" : null;
          const displayText = value === "All" ? "All" : `Phase ${value}`;
          return (
            <button
              key={value}
              className={className}
              onClick={() => setPhase(value)}
            >
              {displayText}
            </button>
          );
        })}
      </div>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}

export default Filter;
