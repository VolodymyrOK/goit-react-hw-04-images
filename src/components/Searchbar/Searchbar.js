import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import {
  SearchFormButton,
  SearchInput,
  SearchbarForm,
} from './Searchbar.styled';
import { MessageToast } from 'components/Messages/Messages';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const changeRequest = evt => {
    setQuery(evt.currentTarget.value);
  };

  const searchRequest = evt => {
    evt.preventDefault();
    if (!query.trim()) {
      setQuery('');
      MessageToast('emptysearch', 'Enter data to Search');
      return;
    }
    const queryExt = Date.now() + '/' + query.toLowerCase();
    onSubmit(queryExt);
    setQuery('');
  };

  return (
    <SearchbarForm onSubmit={searchRequest}>
      <SearchFormButton type="submit">
        <ImSearch />
      </SearchFormButton>
      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        name="query"
        placeholder="Search images and photos"
        value={query}
        onChange={changeRequest}
      />
    </SearchbarForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
