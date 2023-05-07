import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');
  const [prevSearch, setPrevSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  //   const movieName = searchParams.get('query');
  //   console.log(movieName);

  const handleChange = event => {
    setSearch(event.currentTarget.value.toLowerCase());
    // добавляем параметр поиска в строку запроса с условием
    if (event.currentTarget.value.toLowerCase() === '') {
      setSearchParams({});
    } else {
      setSearchParams({ query: event.currentTarget.value.toLowerCase() });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      // если строка пустая и мbl нажали кнопку поиска
      alert('Please, fill in the input field');
      return;
    }
    // проверка на одинаковое слово
    if (search === prevSearch) {
      alert('Same request');
      setSearch('');
      return;
    }

    //  console.log(searchParams);

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
          autoComplete="on"
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
