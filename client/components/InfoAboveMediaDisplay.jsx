import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
box-sizing: border-box;
width: 100vw;
background-color: black;
display: flex;
`;

const ListWrapper = styled.ul`
padding-line-start: 0px;
padding-left: 0px;
`;

function InfoAboveMediaDisplay(props) {
  return (
    <div>
      <Wrapper>
        <ListWrapper>
          <li className="listItem">
            <span className="city-country">
              {props.experience.city}
,
              {' '}
              {props.experience.country}
            </span>
          </li>
          <li className="listItem">
            <span className="slash"> / </span>
          </li>
          <li className="listItem">
            <span className="category">{props.experience.category}</span>
          </li>
          <li className="listItem">
            <span className="slash"> / </span>
          </li>
          <li className="listItem">
            <span className="activity">{props.experience.activity}</span>
          </li>
        </ListWrapper>
      </Wrapper>
    </div>
  );
}


export default InfoAboveMediaDisplay;
