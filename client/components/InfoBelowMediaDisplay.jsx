import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
margin-top: 20px;
background: black;
display: flex;
`;

const FirstCol = styled.div`
  flex-basis: 35%;
`;

const SecondCol = styled.div`
  flex-basis: 65%;
`;

function InfoBelowMediaDisplay (props) {


  return (
    <div>
      <Wrapper>
      <section className="infoBelow">
        <FirstCol>
            <div className="activity-classification">{props.experience.activity}</div>
            <div className="activity-title">{props.experience.title}</div>
            <div>{props.experience.city}, {props.experience.country}</div>
            <div>{props.experience.averageRating} Stars / {props.experience.numberOfReviews} Reviews </div>
            <div>{props.experience.tags}</div>
        </FirstCol>
        <SecondCol>
        <div className="blank-black-div-matches-with-Art-Walk-div"></div>
            <div className="details-display">
              <div className="duration individual-detail">
                <div className="duration-icon">
                  <span className="duration-icon"></span>
                </div>
                <div className="duration-title-time">
                  <div className="duration-title">Duration</div>
                  <div className="hours">{props.experience.duration} hours</div>
                </div>
              </div>
              <div className="group-size individual-detail">
                <div className="group-size-icon">
                  <span className="group-size-icon"></span>
                </div>
                <div className="group-size-title-time">
                  <div className="group-size-title">Group size</div>
                  <div className="group-size">Up to {props.experience.groupSize} people</div>
                </div>
              </div>
              <div className="includes-or-cuisine individual-detail">
                <div className="includes-icon">
                  <span className="includes-icon"></span>
                </div>
                <div className="includes-title-items">
                  <div className="includes-title">Includes</div>
                  <div className="includes-items">{props.experience.includes}</div>
                </div>
              </div>
              <div className="hosted-in-language individual-detail">
                <div className="hosted-in-icon">
                  <span className="hosted-in-icon"></span>
                </div>
                <div className="hosted-in-title">
                  <div className="duration-title">Hosted in</div>
                  <div className="languages">{props.experience.hostedLanguages}</div>
                  </div>
                </div>
              </div>
        </SecondCol>
        <div className="details-container">
          <div>

          </div>
          <div>

            </div>
          </div>
      </section>
      </Wrapper>
    </div>

  )

}

export default InfoBelowMediaDisplay;