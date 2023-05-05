import { useState } from 'react';
import { toast } from 'react-toastify';
/* import PropTypes from 'prop-types'; */
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');
  const [prevSearch, setPrevSearch] = useState('');

  const handleChange = event => {
    setSearch(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      // если строка пустая и мbl нажали кнопку поиска
      toast.error('Please, fill in the input field');
      return;
    }
    if (search === prevSearch) {
      // проверка на одинаковое слово
      toast.info('Same request');
      setSearch('');
      return;
    }
    onSubmit(search); // props из App которому мbl передаем state из єтого компонента в state App
    setPrevSearch(search);
    setSearch(''); // reset
  };

  return (
    <div className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <input
          className={css.SearchFormInput}
          name="search"
          value={search}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
        />
        <button type="submit" className={css.SearchFormButton}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
