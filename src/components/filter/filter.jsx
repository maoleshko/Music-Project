import React, {useState} from 'react';
import s from './filter.module.css';
import { useGetAllTracksQuery } from '../../store/api/musicApi';

  const CategoryButton = ({category, isActive, onClick }) => {
    return (
      <button
        className={`${s.filter__button} ${isActive ? s.active : ""}`}
        onClick={onClick}
      >
        {category}
      </button>
    );
  };

  const Dropdown = ({ data }) => {
    return (
      <div className={s.dropdown}>
        {data.map((item) => (
          <div key={item} className={s.dropdown_item}>
            {item}
          </div>
        ))}
      </div>
      
    );
  };

const FilterContent = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const {data = []} = useGetAllTracksQuery();
  
const authorList = Array.from(new Set(data.map(item => item.author)));
 

  const genreList = Array.from(new Set(data.map(item => item.genre)));
   console.log(genreList, authorList)
  
  const categories = [
    { name: "Исполнители", data: ["Исполнитель 1", "Исполнитель 2", "Исполнитель 3", "Исполнитель 4", "Исполнитель 5"] },
    { name: "Год выпуска", data: ["По убывания", "По возрастанию"] },
    { name: "Жанры", data: ["Жанр 1", "Жанр 2", "Жанр 3"] }
  ];

  const handleCategoryClick = (categoryName) => {
    if (activeCategory === categoryName) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryName);
    }
  };


  
  return (
      <div className={s.centerblock__filter}>
          
          <div className={s.filter}>
      
        <div className={s.filter__title}>Искать по:</div>
          <div className={s.filter__category_btn} >
                {categories.map((category) => (
              <div key={category.name} className={s.category}>
                <CategoryButton
                  category={category.name}
                  isActive={activeCategory === category.name}
                  onClick={() => handleCategoryClick(category.name)}
                />
                {activeCategory === category.name && (
                  <Dropdown data={category.data} />
                )}
              </div>
            ))}
          </div>
        </div>   
      </div>
  );
};

export default FilterContent;