import { useState } from 'react';
import styles from './Search.module.css';
import Notiflix from 'notiflix';
import { ImSearch } from 'react-icons/im';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query'));

  const handleInputChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSearchForm = e => {
    e.preventDefault();

    if (!searchQuery) {
      Notiflix.Notify.failure('Please, fill out the form');
      return;
    }

    onSubmit(searchQuery);
    // setSearchQuery('');
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={handleSearchForm}>
        <button type="submit" className={styles.searchForm_button}>
          <ImSearch />
        </button>

        <input
          className={styles.searchForm_input}
          value={searchQuery || ''}
          onChange={handleInputChange}
          type="text"
          placeholder="Search movies"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
