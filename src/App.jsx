import React, { useState } from 'react';
import './style/app.css';
import Search from './components/search/search';
import Filter from './components/filter/filter';
import CenterblockContent from './components/centerblock/centerblockContent';
import Personal from './components/personal/personal';
import SidebarBlock from './components/sidebar/sidebarBlock';
import Menu from './components/burgerMenu/menu';
import BarPlayer from './components/barPlayer/BarPlayer';
import SkeletonLoading from './components/skeletonLoading';


import Modal from './components/filter/Modal';
import List from './components/filter/List';
import Filterr from './components/Filter';




function App() {
  
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
          content = <List items={['Исполнитель 1', 'Исполнитель 2', 'Исполнитель 3']} />;
          break;
        case 2:
          content = <List items={['2020', '2019', '2018', '2017']} />;
          break;
        case 3:
          content = <List items={['Жанр 1', 'Жанр 2', 'Жанр 3']} />;
          break;
        default:
          content = null;
          break;
      }
      return content;
    };

  const [menuActive, setMenuActive] = useState(false)
  const item = [{id: 1, value:"Главное", href: "/main"}, {id: 2,value:"Мои треки", href: "/mytrack"}, {id: 3,value:"Войти", href: "/sign"}]
  return (
    <div className='app'>   
      <div className="wrapper">
        <div className="container">
          <main className="main">
          <nav className="main__nav nav">
          <div className="nav__logo logo"></div>
            <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
              <span/>
            </div>
          </nav>
          <div className="main__centerblock centerblock">
          <Search/>
          <h2 className="centerblock__h2">Треки</h2>
          <SkeletonLoading>
           
          </SkeletonLoading>
          
          <div>
          <div>
      <Filterr filters={filters} onSelectFilter={handleSelectFilter} />
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        {renderModalContent()}
      </Modal>
    </div>
          
          </div>
          <Filter/>          
          <CenterblockContent/>
          </div>
          <div className="main__sidebar sidebar">
            <Personal/>
            <SidebarBlock/>
          </div>
      </main>
      <BarPlayer/>
      <footer/>
      </div>
    </div>
      <Menu active={menuActive} setActive={setMenuActive} header={""} item={item}/>    
</div>
  );
}

export default App;




