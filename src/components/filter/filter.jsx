import React, {useState} from 'react';
import './filter.css';
import Modal from './Modal';
import List from './List';
import FilterButton from './FilterButton';


function Filter() {
  const [isOpen, setIsOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const filters = [
      { id: 1, label: 'исполнителю' },
      { id: 2, label: 'году выпуска' },
      { id: 3, label: 'жанру' },
    ];
    const handleCloseModal = () => {
      setIsOpen(false);
    };
    const handleSelectFilter = (filter) => {
      setSelectedFilter(filter);
      setIsOpen(true);
    };
    const renderModalContent = () => {
      if (!selectedFilter) {
        return null;
      }
      let content = null;
      switch (selectedFilter.id) {
        case 1:
          content = <List className='autor' items={['Исполнитель 1', 'Исполнитель 2', 'Исполнитель 3']} />;
          break;
        case 2:
          content = <List className='year' items={['2020', '2019', '2018', '2017']} />;
          break;
        case 3:
          content = <List className='genre' items={['Жанр 1', 'Жанр 2', 'Жанр 3']} />;
          break;
        default:
          content = null;
          break;
      }
      return content;
    };
  return (
    <div className="centerblock__filter filter">
      <div className='filter__category'>
        <div className="filter__title">Искать по:</div>
        <FilterButton filters={filters} onSelectFilter={handleSelectFilter} /> 
      </div>
      <div>
        <Modal isOpen={isOpen} onClose={handleCloseModal} >
          {renderModalContent()}
        </Modal> 
      </div>        
    </div>
    )
}




export default Filter;
