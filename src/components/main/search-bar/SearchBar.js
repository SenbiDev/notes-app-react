import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../../../contexts/LocaleContext';
import { notesPageContent } from '../../../utils/contents';

function SearchBar({ searchParams, setSearchParams, namePage }) {
  const keyword = searchParams.get('keyword') ?? '';
  const { locale } = useContext(LocaleContext);
  const { searchBar } = notesPageContent[locale];

  const onChangeEventHandler = (e) => {
    e.preventDefault();
    setSearchParams({ keyword: e.target.value });
  };

  return (
    <>
      <h2 className="font-bold text-2xl mt-8 mb-4 text-center">
        {namePage}
      </h2>
      <section id="search-bar" className="text-center">
        <input
          className="border-2 border-slate-800 font-bold rounded-md w-11/12 h-9 mb-10 p-2 bg-[#EEEEEE]"
          type="text"
          placeholder={searchBar}
          value={keyword}
          onChange={onChangeEventHandler}
        />
      </section>
    </>
  );
}

SearchBar.propTypes = {
  searchParams: PropTypes.object.isRequired,
  setSearchParams: PropTypes.func.isRequired,
  namePage: PropTypes.string.isRequired,
};

export default SearchBar;
