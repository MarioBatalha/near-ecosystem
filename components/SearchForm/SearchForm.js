import React, { useEffect, useRef } from 'react';

import styles from './SearchForm.module.css';

const SearchForm = () => {
    const searchValue = React.useRef('');
    
  return (
    <div className={styles.filtersSearch}>
      <input
        type="text"
        className={styles.filtersSearchInput}
        placeholder="Search"
      />

      <button className={styles.filtersSearchInput} type="submit"></button>
    </div>
  );
};
export default SearchForm;
