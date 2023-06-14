import React, {useState} from 'react';
import s from './filter.module.css';
import { useGetAllTracksQuery } from '../../store/api/musicApi';
import { CategoryButton } from './categoryButton';
import { Dropdown } from './dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { removeFilterYears, removeFilterAuthor, removeFilterGenre } from '../../store/slices/setFilters';


const FilterContent = () => {

    const [activeCategory, setActiveCategory] = useState(null);
    const dispatch = useDispatch()
    const {data} = useGetAllTracksQuery();

    const authorTrack = data.map(item => item.author)
    const author = Array.from(new Set(authorTrack));

    const genreTrack = data.map(item => item.genre,)
    const genre = Array.from(new Set(genreTrack));

    const years = ['Сначала новые','Сначала старые']   
         
    
    const handleCategoryClick = (categoryName) => {
        if (activeCategory === categoryName) {
            setActiveCategory(null);
        } else {
            setActiveCategory(categoryName);
        }
    };
    const filterAuthor = useSelector(state => state.setFilters.author);
    const filterGenre = useSelector(state => state.setFilters.genre);
    const filterYears = useSelector(state => state.setFilters.years)


  return (
      <div className={s.centerblock__filter}>
        <div className={s.filter}>
          <div className={s.filter__title}>Искать по:</div>
          <div className={s.filter__category_btn}>
          <div className={s.category}>
            <div onClick={() => dispatch(removeFilterAuthor())}
                    className={`${s.circle_count} ${filterAuthor.length === 0 ? s.hidden : ''}`}
                    > {filterAuthor.length} </div>               
                        <CategoryButton
                            category={'Исполнители'}
                            isActive={activeCategory === 'Исполнители'}
                            onClick={() => handleCategoryClick('Исполнители')}
                        />
                        {activeCategory === 'Исполнители' && (
                            <Dropdown data={author}
                            category={'Исполнители'}
                             />
                        )}  
                    </div>
                    <div className={s.category}>
                    <div onClick={() => dispatch(removeFilterYears())}
                    className={`${s.circle_count} ${filterYears.length === 0 ? s.hidden : ''}`}> {filterYears.length === 0 ? '0' : '1'} </div>
                        <CategoryButton
                            category={'Год выпуска'}
                            isActive={activeCategory === 'Год выпуска'}
                            onClick={() => handleCategoryClick('Год выпуска')}
                        />
                        {activeCategory === 'Год выпуска' && (
                            <Dropdown data={years}
                            category={'Год выпуска'}
                           />
                        )}
                    </div>
                    <div className={s.category}>
                    <div 
                    onClick={() => dispatch(removeFilterGenre())} 
                    className={`${s.circle_count} ${filterGenre.length === 0 ? s.hidden : ''}`}> {filterGenre.length} </div>
                        <CategoryButton
                            category={'Жанры'}
                            isActive={activeCategory === 'Жанры'}
                            onClick={() => handleCategoryClick('Жанры')}
                        />
                        {activeCategory === 'Жанры' && (
                            <Dropdown data={genre}
                            category={'Жанры'} />
                        )}                        
                  </div>
          </div>
        </div>   
      </div>
  );
};

export default FilterContent;