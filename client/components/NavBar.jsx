import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.section`
box-sizing: border-box;
width: 100vw;
background: black;
position: sticky;
top: 0;
display: flex;
justify-content: space-between;
padding: 20px 20px 10px 0;
`;


const LogoAndSearch = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`;

const SearchIcon = styled.div`
padding-right: 20px;
`;

const SearchBar = styled.div`
border-radius: 4px;
background: white;
width: 35vw;
padding: 10px 10px 10px 10px;
`;

const SearchInput = styled.input`
padding-left: 8px;
font-size: 14px;
border: white;
`;

const Sections = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
color: white;
width: 45vw;
flex-wrap: nowrap;
padding: 10px;
`;

const Topics = styled.div`
padding-left: 12px;
display: flex;
flex-wrap: nowrap;
font-size: 12px;
`;

function NavBar() {
  return (
    <Wrapper>
      <LogoAndSearch>
        <SearchIcon>
          <FontAwesomeIcon className="airbnb-icon" icon={['fab', 'airbnb']} size="2x" style={{ color: 'white' }} />
        </SearchIcon>
        <SearchBar>
          <FontAwesomeIcon icon={faSearch} size="1x" style={{ color: 'grey' }} />
          <SearchInput type="text" placeholder="Search" />
        </SearchBar>
      </LogoAndSearch>
      <Sections>
        <Topics>English</Topics>
        <Topics>$ USD</Topics>
        <Topics>Become a Host</Topics>
        <Topics>Sign up</Topics>
        <Topics>Log in</Topics>
      </Sections>
    </Wrapper>
  );
}

export default NavBar;
