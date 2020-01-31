import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
margin-top: 20px;
background: black;
display: flex;
`;

const listWrapper = styled.ul`
padding-line-start: 0px;
`;

function InfoAboveMediaDisplay (props) {

  return (
    <div>
      <Wrapper>
          <listWrapper>
          <li className="listItem">
              <a>
                <span className="city-country">{props.experience.city}, {props.experience.country}</span>
              </a>
            </li>
            <li className="listItem">
              <span className="slash"> / </span>
            </li>
            <li className="listItem">
              <a>
                <span className="category">{props.experience.category}</span>
              </a>
            </li>
            <li className="listItem">
              <span className="slash"> / </span>
            </li>
            <li className="listItem">
              <a>
                <span className="activity">{props.experience.activity}</span>
              </a>
            </li>
          </listWrapper>
      </Wrapper>
    </div>
  )
}


export default InfoAboveMediaDisplay;

