import React from 'react';
import s from './filter.module.css';

export const CategoryButton = ({ category, isActive, onClick }) => {
    return (
        <button
        className={`${s.filter__button} ${isActive ? s.active : ""}`}
        onClick={onClick}
        >
            
            {category}
        </button>
    );
};