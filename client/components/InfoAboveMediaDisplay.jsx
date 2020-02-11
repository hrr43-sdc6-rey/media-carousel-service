import React from 'react';
import PropTypes from 'prop-types';
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
  const {
    experience: {
      city, country, category, activity,
    },
  } = props;

  return (
    <Wrapper>
      <ListWrapper>
        <li className="listItem">
          <span className="city-country">
            {city}
,
            {' '}
            {country}
          </span>
        </li>
        <li className="listItem">
          <span className="slash"> / </span>
        </li>
        <li className="listItem">
          <span className="category">{category}</span>
        </li>
        <li className="listItem">
          <span className="slash"> / </span>
        </li>
        <li className="listItem">
          <span className="activity">{activity}</span>
        </li>
      </ListWrapper>
    </Wrapper>
  );
}

InfoAboveMediaDisplay.propTypes = {
  experience: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    category: PropTypes.string,
    activity: PropTypes.string,
  }),
};


export default InfoAboveMediaDisplay;
