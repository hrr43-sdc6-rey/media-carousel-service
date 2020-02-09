import React from 'react';
import PropTypes from 'prop-types';
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
padding-top: 30px;
padding-bottom: 40px;
`;

const FirstCol = styled.div`
  flex-basis: 35%;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const SecondCol = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 65%;
`;

const IndvDetail = styled.div`
display: flex;
flex-direction: column;
flex-basis: 25%;
padding-right: 35px;
`;

const StarsAndReviews = styled.span`
padding-right: 8px;
`;

const DetailsGroup = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-around;
padding: 15px 0 0 0;
`;

class InfoBelowMediaDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarBottomPosition: null,
    };

    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent() {
    const navBar = document.querySelector('.infoBelowBottom').getBoundingClientRect();
    this.setState({ navbarBottomPosition: navBar.bottom });
    const { updateNavBarPosition } = this.props;
    const { navbarBottomPosition } = this.state;
    updateNavBarPosition(navbarBottomPosition);
  }

  render() {
    const { languages } = this.props;
    const { includes } = this.props;
    const {
      experience: {
        activity, title, city, country, averageRating, numberOfReviews, duration, groupSize,
      },
    } = this.props;

    return (
      <Wrapper className="infoBelowBottom">
        <section className="infoBelow">
          <FirstCol>
            <div className="activity-classification">{activity}</div>
            <div className="activity-title">{title}</div>
            <div className="activity-city-state">
              {city}
,
              {' '}
              {country}
            </div>
            <div className="average-rating">
              <StarsAndReviews>
                {averageRating}
              </StarsAndReviews>
              <StarsAndReviews>
                <FontAwesomeIcon icon={faStar} size="sm" />
              </StarsAndReviews>
              (
              {numberOfReviews}
                )
              <StarsAndReviews />
            </div>
          </FirstCol>
          <SecondCol>
            <DetailsGroup>
              <IndvDetail>
                <div className="duration-icon">
                  <FontAwesomeIcon icon={faClock} size="xs" />
                </div>
                <div className="duration-title-time">
                  <div className="duration-title" style={{ color: '#DCDCDC' }}>Duration</div>
                  <div className="hours">
                    {duration}
                    {' '}
hours
                  </div>
                </div>
              </IndvDetail>
              <IndvDetail>
                <div className="group-size-icon">
                  <FontAwesomeIcon icon={faUserFriends} size="sm" />
                </div>
                <div className="group-size-title-time">
                  <div className="group-size-title" style={{ color: '#DCDCDC' }}>Group size</div>
                  <div className="group-size">
Up to
                    {' '}
                    {groupSize}
                    {' '}
people
                  </div>
                </div>
              </IndvDetail>
              <IndvDetail>
                <div className="includes-icon">
                  <FontAwesomeIcon icon={faReceipt} size="sm" />
                </div>
                <div className="includes-title-items">
                  <div className="includes-title" style={{ color: '#DCDCDC' }}>Includes</div>
                  <div className="includes-items">
                    {includes.map((include) => (
                      <div key={include}>
                        {include}
,
                      </div>
                    ))}

                  </div>
                </div>
              </IndvDetail>
              <IndvDetail>
                <div className="hosted-in-icon">
                  <FontAwesomeIcon icon={faComments} size="sm" />
                </div>
                <div className="hosted-in-title">
                  <div className="duration-title" style={{ color: '#DCDCDC' }}>Hosted in</div>
                  <div className="languages">
                    {languages.map((language) => (
                      <div key={language}>
                        {language}
,
                      </div>
                    ))}
                  </div>
                </div>
              </IndvDetail>
            </DetailsGroup>
          </SecondCol>
        </section>
      </Wrapper>
    );
  }
}


InfoBelowMediaDisplay.propTypes = {
  experience: PropTypes.shape({
    activity: PropTypes.string,
    title: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    averageRating: PropTypes.number,
    numberOfReviews: PropTypes.number,
    duration: PropTypes.number,
    groupSize: PropTypes.number,
  }),
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  includes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InfoBelowMediaDisplay;
