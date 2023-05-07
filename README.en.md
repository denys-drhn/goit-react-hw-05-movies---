<!-- import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  //  const params = useParams();
  //  console.log(params.movieId);
  const { movieId } = useParams();
  console.log(movieId);

  return <div>MovieDetails</div>;
};

export default MovieDetails; -->

<!-- ///////////////////////////////////////////////////////////// -->

<!-- Брав vote_average  для обчислення рейтингу.
const { genres } = movie;

return (
 <h3>Genres</h3>
  <p>{genres.map(item => item.name).join(' ')}</p>
) -->
<!-- ///////////////////////////////////////////////////////////////// -->

<!-- {!!movie.genres.length && (
                    <>
                      <h3>Genres</h3>
                      <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
                    </>
                  )} -->

<!-- ///////////////////////////////////////////////////////// -->
<!-- до return -->

    <!-- if (!movie) {
    	return <p>Loading...</p>;
    } -->

<!-- ///////////////////////////////////////////////////////////////// -->

import { useState } from 'react'; import { useSearchParams } from
'react-router-dom'; /_ import PropTypes from 'prop-types'; _/ import css from
'./Searchbar.module.css';

const Searchbar = ({ onSubmit }) => { const [search, setSearch] = useState('');
const [prevSearch, setPrevSearch] = useState(''); const [searchParams,
setSearchParams] = useSearchParams(); // console.log(searParams);

const handleChange = event => {
setSearch(event.currentTarget.value.toLowerCase()); };

const handleSubmit = event => { event.preventDefault(); if (search.trim() ===
'') { // если строка пустая и мbl нажали кнопку поиска alert('Please, fill in
the input field'); return; } if (search === prevSearch) { // проверка на
одинаковое слово alert('Same request'); setSearch(''); return; }
onSubmit(search); // props из App которому мbl передаем state из єтого
компонента в state App setPrevSearch(search); setSearch(''); // reset
setSearchParams({ query: search }); // добавляем параметр поиска в строку
запроса };

return ( <div className={css.Searchbar}>

<form className={css.SearchForm} onSubmit={handleSubmit}> <input
          className={css.SearchFormInput}
          name="search"
          value={search}
          onChange={handleChange}
          type="text"
          autoComplete="on"
          autoFocus
        /> <button type="submit" className={css.SearchFormButton}> Search
</button> </form> </div> ); };

export default Searchbar;

<!-- /////////////////////////////////// -->

/ проверка на одинаковое слово if (search === prevSearch) { / alert('Same
request'); setSearch(''); return;}

// setPrevSearch(search); // const [prevSearch, setPrevSearch] = useState('');
