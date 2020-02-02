import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.section`
box-sizing: border-box;
width: 100vw;
margin-left: auto;
margin-right: auto;
padding-left: 50px;
padding-right: 50px;
display: flex;
background-color: red;
position: sticky;
`;

const Footer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const CostAndReviews = styled.div`
display: flex;
flex-direction: column;
`;

const Reviews = styled.div`
display: flex;
flex-direction: row;
`;

const ShowDates = styled.button`
border-radius: 4px;
font-size: 16px;
`;


function FooterBar(props) {
  // logic for number of stars
  /*
  const numStars = props.experience.averageRating

  */
  const numStars = props.experience.averageRating;
  let stars;

  if (numStars === 5) {
    stars = (
      <div>
        <FontAwesomeIcon icon={faStar} size="sm" />
        <FontAwesomeIcon icon={faStar} size="sm" />
        <FontAwesomeIcon icon={faStar} size="sm" />
        <FontAwesomeIcon icon={faStar} size="sm" />
        <FontAwesomeIcon icon={faStar} size="sm" />
      </div>
    );
  } else if (numStars === 4) {
    stars = (
      <div>
        <FontAwesomeIcon icon={faStar} size="sm" />
        <FontAwesomeIcon icon={faStar} size="sm" />
        <FontAwesomeIcon icon={faStar} size="sm" />
        <FontAwesomeIcon icon={faStar} size="sm" />
      </div>
    );
  } else if (numStars === 3) {
    stars = (
      <div>
        <FontAwesomeIcon icon={faStar} size="sm" />
        <FontAwesomeIcon icon={faStar} size="sm" />
        <FontAwesomeIcon icon={faStar} size="sm" />
      </div>
    );
  } else if (numStars === 2) {
    stars = (
      <div>
        <FontAwesomeIcon icon={faStar} size="sm" />
        <FontAwesomeIcon icon={faStar} size="sm" />
      </div>
    );
  } else if (numStars === 1) {
    stars = (
      <div>
        <FontAwesomeIcon icon={faStar} size="sm" />
      </div>
    );
  } else {
    stars = (
      <div> </div>
    );
  }


  return (
    <Wrapper>
      <Footer>
        <CostAndReviews>
          <div className="ft-bar-cost">
From $
            {props.experience.costPerPerson}
/person
          </div>
          <Reviews>
            <div className="ft-bar-reviews">{props.experience.averageRating}</div>
            {stars}
            <div className="ft-bar-reviews">
              {props.experience.numberOfReviews}
              {' '}
reviews
            </div>
          </Reviews>
        </CostAndReviews>
        <ShowDates>
          Show Dates
        </ShowDates>
      </Footer>
    </Wrapper>
  );
}

export default FooterBar;
