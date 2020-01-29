import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
padding: 4em;
background: black;
display: flex;
`;

function InfoBelowMediaDisplay () {


  return (
    <div>
      <section className="infoBelow">
      <Wrapper>
        <div className="details-container">
          <div>
            <div className="activity-classification">Art Walk</div>
            <div className="activity-title">Frida Tour</div>
            <div>Location</div>
            <div>Average rating</div>
            <div>Tags</div>
          </div>
          <div>
            <div className="blank-black-div-matches-with-Art-Walk-div"></div>
            <div className="details-display">
              <div className="duration individual-detail">
                <div className="duration-icon">
                  <span className="duration-icon"></span>
                </div>
                <div className="duration-title-time">
                  <div className="duration-title">Duration</div>
                  <div className="hours">2.5 hours</div>
                </div>
              </div>
              <div className="group-size individual-detail">
                <div className="group-size-icon">
                  <span className="group-size-icon"></span>
                </div>
                <div className="group-size-title-time">
                  <div className="group-size-title">Group size</div>
                  <div className="group-size">Up to 20 people</div>
                </div>
              </div>
              <div className="includes-or-cuisine individual-detail">
                <div className="includes-icon">
                  <span className="includes-icon"></span>
                </div>
                <div className="includes-title-items">
                  <div className="includes-title">Includes</div>
                  <div className="includes-items">Food, Drinks</div>
                </div>
              </div>
              <div className="hosted-in-language individual-detail">
                <div className="hosted-in-icon">
                  <span className="hosted-in-icon"></span>
                </div>
                <div className="hosted-in-title">
                  <div className="duration-title">Hosted in</div>
                  <div className="languages">English</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>

  )

}

export default InfoBelowMediaDisplay;