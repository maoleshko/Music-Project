import React from 'react';

function List(props) {
  const { items } = props;
  return (
    <ul className={'dropdown-menu'}>
      {items.map((item) => (
        <li className = 'dropdownItem' key={item}>{item}</li>
      ))}
    </ul>
  );
}
export default List;