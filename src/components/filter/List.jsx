import React from 'react';

function List(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>;{item}</li>
      ))}
    /</ul>
  );
}
export default List;