import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const WrapperDark = styled.section`
box-sizing: border-box;
width: 100vw;
margin-left: auto;
margin-right: auto;
padding: 10px 50px 10px 50px;
display: flex;
background-color: black;
position: fixed;
bottom: 0;
border-top: solid .25px #DCDCDC;
`;

const WrapperLight = styled.section`
box-sizing: border-box;
width: 100vw;
margin-left: auto;
margin-right: auto;
padding: 10px 50px 10px 50px;
display: flex;
background-color: white;
position: fixed;
bottom: 0;
border-top: solid .25px #DCDCDC;
`;

const FooterDark = styled.div`
display: flex;
flex-direction: row;
align-items: center;
position: relative;
bottom: 0;
width 100vw;
justify-content: space-between;
background: black;
color: white;
`;

const FooterLight = styled.div`
display: flex;
flex-direction: row;
align-items: center;
position: relative;
bottom: 0;
width 100vw;
justify-content: space-between;
background: white;
color: black;
`;

const CostAndReviews = styled.div`
display: flex;
flex-direction: column;
align-self: flex-start;
`;

const Reviews = styled.div`
display: flex;
flex-direction: row;
padding-top: 3px;
`;

const IndReview = styled.div`
padding-right: 5px;
`;

const ShowDates = styled.button`
border-radius: 4px;
font-size: 12px;
background: #FF5A5F;
color: white;
padding: 10px 20px 10px 20px;
`;

const ShowDatesDiv = styled.div``;
const CostAndReviewsDiv = styled.div``;

class FooterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerBarPosition: null,
    };

    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  listenScrollEvent(e) {
    const footer = document.querySelector('.footerTop').getBoundingClientRect();
    console.log('footer', footer, footer.top);
    this.setState({ footerBarPosition: footer.top });
    this.props.updateFooterBarPosition(this.state.footerBarPosition);
    console.log('listenScroll Footer', this.state.footerBarPosition);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    const isDarkMode = this.props.footerDarkMode;

    const numStars = this.props.experience.averageRating;
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
      <>
        {isDarkMode ? (
          <WrapperDark className="footerTop">
            <FooterDark>
              <CostAndReviewsDiv>
                <CostAndReviews>
                  <div className="ft-bar-cost">
From $
                    {this.props.experience.costPerPerson}
/person
                  </div>
                  <Reviews>
                    <IndReview style={{ color: 'white' }}>{this.props.experience.averageRating}</IndReview>
                    <IndReview style={{ color: 'white' }}>{stars}</IndReview>
                    <IndReview style={{ color: 'white' }}>
                      {this.props.experience.numberOfReviews}
                      {' '}
reviews
                    </IndReview>
                  </Reviews>
                </CostAndReviews>
              </CostAndReviewsDiv>
              <ShowDatesDiv>
                <ShowDates>
            Show Dates
                </ShowDates>
              </ShowDatesDiv>
            </FooterDark>
          </WrapperDark>
        ) : (
          <WrapperLight className="footerTop">
            <FooterLight>
              <CostAndReviewsDiv>
                <CostAndReviews>
                  <div className="ft-bar-cost">
From $
                    {this.props.experience.costPerPerson}
/person
                  </div>
                  <Reviews>
                    <IndReview style={{ color: '#008489' }}>{this.props.experience.averageRating}</IndReview>
                    <IndReview style={{ color: '#008489' }}>{stars}</IndReview>
                    <IndReview style={{ color: '#808080' }}>
                      {this.props.experience.numberOfReviews}
                      {' '}
reviews
                    </IndReview>
                  </Reviews>
                </CostAndReviews>
              </CostAndReviewsDiv>
              <ShowDatesDiv>
                <ShowDates>
            Show dates
                </ShowDates>
              </ShowDatesDiv>
            </FooterLight>
          </WrapperLight>
        )}
      </>
    );
  }
}

export default FooterBar;
