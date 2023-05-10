import React from 'react';
// import CenterblockContent from '../../components/centerblock/centerblockContent';

export const Favorites = () => {
    const id = 1; // Значение id может меняться динамически
    
fetch(`https://painassasin.online/catalog/selection/${id}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
    return (
        <div>
            <h1>Избранные</h1>
            {/* <CenterblockContent/> */}
            
        </div>
    )
}