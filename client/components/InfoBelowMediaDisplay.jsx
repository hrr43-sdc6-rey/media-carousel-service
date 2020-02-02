import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar, faClock, faUserFriends, faReceipt, faComments,
} from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.section`
box-sizing: border-box;
width: 100vw;
background: black;
display: flex;
`;

const FirstCol = styled.div`
  flex-basis: 35%;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const SecondCol = styled.div`
  flex-basis: 65%;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

function InfoBelowMediaDisplay(props) {
  return (
    <div>
      <Wrapper>
        <section className="infoBelow">
          {/* <div className="firstCol"> */}
          <FirstCol>
            <div className="activity-classification">{props.experience.activity}</div>
            <div className="activity-title">{props.experience.title}</div>
            <div className="activity-city-state">
              {props.experience.city}
,
              {' '}
              {props.experience.country}
            </div>
            <div className="average-rating">
              <span>{props.experience.averageRating}</span>
              <span>{' '}</span>
              <span>
                <FontAwesomeIcon icon={faStar} size="sm" />
              </span>
              {/* <span>&#9734;</span> */}
              <span>{' '}</span>
              <span>
                (
                {props.experience.numberOfReviews}
                )
              </span>
            </div>
            <div>{props.experience.tags}</div>
          </FirstCol>
          <SecondCol>
            <div className="blank-black-div-matches-with-Art-Walk-div" />
            <div className="details-display">
              <div className="duration individual-detail">
                <div className="duration-icon">
                  <FontAwesomeIcon icon={faClock} size="xs" />
                </div>
                <div className="duration-title-time">
                  <div className="duration-title">Duration</div>
                  <div className="hours">
                    {props.experience.duration}
                    {' '}
hours
                  </div>
                </div>
              </div>
              <div className="group-size individual-detail">
                <div className="group-size-icon">
                  <FontAwesomeIcon icon={faUserFriends} size="sm" />
                </div>
                <div className="group-size-title-time">
                  <div className="group-size-title">Group size</div>
                  <div className="group-size">
Up to
                    {' '}
                    {props.experience.groupSize}
                    {' '}
people
                  </div>
                </div>
              </div>
              <div className="includes-or-cuisine individual-detail">
                <div className="includes-icon">
                  <FontAwesomeIcon icon={faReceipt} size="sm" />
                </div>
                <div className="includes-title-items">
                  <div className="includes-title">Includes</div>
                  <div className="includes-items">{props.experience.includes}</div>
                </div>
              </div>
              <div className="hosted-in-language individual-detail">
                <div className="hosted-in-icon">
                  <FontAwesomeIcon icon={faComments} size="sm" />
                </div>
                <div className="hosted-in-title">
                  <div className="duration-title">Hosted in</div>
                  <div className="languages">{props.experience.hostedLanguages}</div>
                </div>
              </div>
            </div>
          </SecondCol>

          {/* </div> */}
          {/* <div className="secondCol"> */}

          {/* </div> */}
        </section>
      </Wrapper>
    </div>

  );
}

export default InfoBelowMediaDisplay;
