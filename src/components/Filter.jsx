import React from 'react';

function Filter(props) {
  const { filters, onSelectFilter } = props;
  const handleSelectFilter = (filter) => {
    onSelectFilter(filter);
  };
  return (
    <div>
      {filters.map((filter) => (
        <button key={filter.id} onClick={() => handleSelectFilter(filter)}>
          {filter.label}
        </button>
      ))}
    </div>
  );
}
export default Filter;