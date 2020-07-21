import React, { useCallback, memo } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { RootPage } from '../../pages';

type Props = RootPage;

function SearchForm({ type }: Props) {
  const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement, MouseEvent>) => {
    event.preventDefault();
  }, []);

  return (
    <SearchFormContainer>
      <form onSubmit={onSubmit}>
        <input type="search" placeholder={type === 'home' ? '채팅방 검색' : '채팅 검색'} />
        <SearchIcon onClick={onSubmit} />
      </form>
    </SearchFormContainer>
  );
}

export default memo(SearchForm);

const SearchFormContainer = styled.div`
  position: relative;
  width: calc(100% - 70px);
  height: 100%;

  form {
    position: absolute;
    left: 10px;
    top: 55%;
    transform: translateY(-50%);
    width: 70%;
    height: 50%;
  }

  input {
    padding: 0 10px 5px 5px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-size: 14px;
    color: white;
    border: none;
    border-bottom: 1px solid white;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 0;
  top: 0;
  width: 18px;
  height: 18px;
  color: white;
`;
