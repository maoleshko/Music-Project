import React from 'react';
import s from './filter.module.css';
import { setFilterYears, setFilterAuthor, setFilterGenre} from '../../store/slices/setFilters';
import { useDispatch } from 'react-redux';

export const Dropdown = ({ data, category }) => { 
    const dispatch = useDispatch()
    
    const handleFilterClick = (item) => {
       switch (category) {
        case 'Год выпуска': dispatch(setFilterYears({
            years: item,            
        }));           
            break;
        case 'Исполнители': dispatch(setFilterAuthor({
            author: item,            
        }));           
                break;
        case 'Жанры': dispatch(setFilterGenre({
            genre: item,            
        }));           
                break;
        default:
            break;
       }
    }
    return (
        <div className={s.dropdown}>
            {data.map((item, i) => (
                <div className={s.dropdown_item} key={i} onClick={() => handleFilterClick(item)}> {item} </div>
            ))}
        </div>
    );
};