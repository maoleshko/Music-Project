import React from 'react';

function FilterButton(props) {
  const { filters, onSelectFilter } = props;
  const handleSelectFilter = (filter) => {
    onSelectFilter(filter);
  };
  return (
    <div className='menu-container'>
      {filters.map((filter) => (
        <button className='filter__button _btn-text menu-trigger' key={filter.id} onClick={() => handleSelectFilter(filter)}>
          {filter.label}
        </button>
      ))}

      
    </div>
  );
}

export default FilterButton;