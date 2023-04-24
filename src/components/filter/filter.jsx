import React, {useState} from 'react';
import './filter.css';


function Filter() {
  const [open, setOpen] = useState(false)
  return (
    <div className="centerblock__filter filter">
       <div className="filter__title">Искать по:</div>
        <div className='menu-container'>
          <div className="filter__button button-author _btn-text menu-trigger menu-author" onClick={()=>{setOpen(!open)}}>исполнителю</div>
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
            <ul>
              <DropdownItem text = "1"/>
              <DropdownItem  text = "2"/>
              <DropdownItem  text = "3"/>
              <DropdownItem  text = "4"/>
              <DropdownItem  text = "5"/>
            </ul>
          </div>
        </div>

        <div className='menu-container'>
          <div className="filter__button button-year _btn-text menu-trigger menu-year" onClick={()=>{setOpen(!open)}}>году выпуска</div>
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
            <ul>
              <DropdownItem text = "1111"/>
              <DropdownItem  text = "2222"/>
              <DropdownItem  text = "3333"/>
              <DropdownItem  text = "4444"/>
              <DropdownItem  text = "5555"/>
            </ul>
          </div>
        </div>

        <div className='menu-container'>
          <div className="filter__button button-genre _btn-text menu-trigger menu-genre" onClick={()=>{setOpen(!open)}}>жанру</div>
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
            <ul>
              <DropdownItem text = "11"/>
              <DropdownItem  text = "22"/>
              <DropdownItem  text = "33"/>
              <DropdownItem  text = "44"/>
              <DropdownItem  text = "55"/>
            </ul>
          </div>
        </div>
      
    </div>
    
    )
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <a> {props.text} </a>
    </li>
  );
}


export default Filter;

