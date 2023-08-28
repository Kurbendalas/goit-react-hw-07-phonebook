import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    const filterName = e.currentTarget.value;
    dispatch(setFilter(filterName));
  };

  return (
    <div className={css.filterContainer}>
      <label htmlFor="filter" className={css.filterLabel}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          value={filter.value}
          className={css.filterInput}
        />
      </label>
    </div>
  );
};

export { Filter };

