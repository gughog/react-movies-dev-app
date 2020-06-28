import * as React from 'react';
import { Button } from 'components';
import { SearchInputText, SearchContainer } from './styles';

export const SearchInput = () => (
  <SearchContainer onSubmit={(e) => e.preventDefault()}>
    <SearchInputText />
    <Button icon="search" text="Search" />
  </SearchContainer>
);
