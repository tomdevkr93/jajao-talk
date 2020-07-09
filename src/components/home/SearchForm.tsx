import React, { useCallback } from 'react';
import styled from 'styled-components';
function SearchForm() {
  const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  return (
    <SearchFormContainer>
      <form onSubmit={onSubmit}></form>
    </SearchFormContainer>
  );
}

export default SearchForm;

const SearchFormContainer = styled.div``;
