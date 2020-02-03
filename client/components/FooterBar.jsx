import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
} from '@fortawesome/free-solid-svg-icons';

// const Wrapper = styled.section`
// box-sizing: border-box;
// width: 100vw;
// margin-left: auto;
// margin-right: auto;
// padding-left: 50px;
// padding-right: 50px;
// display: flex;
// background-color: red;
// position: fixed;
// bottom: 0;
// `;

const WrapperDark = styled.section`
box-sizing: border-box;
width: 100vw;
margin-left: auto;
margin-right: auto;
padding-left: 50px;
padding-right: 50px;
display: flex;
background-color: black;
position: fixed;
bottom: 0;
`;

const WrapperLight = styled.section`
box-sizing: border-box;
width: 100vw;
margin-left: auto;
margin-right: auto;
padding-left: 50px;
padding-right: 50px;
display: flex;
background-color: white;
position: fixed;
bottom: 0;
`;

const FooterDark = styled.div`
display: flex;
flex-direction: row;
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
position: relative;
bottom: 0;
width 100vw;
justify-content: space-between;
background: white;
color: black;
`;

const CostAndReviewsDiv = styled.div`
`;

const CostAndReviews = styled.div`
display: flex;
flex-direction: column;
align-self: flex-start;
// position: absolute;
// top: 0;
// left: 0;
`;

const Reviews = styled.div`
display: flex;
flex-direction: row;
`;

const ShowDatesDiv = styled.div`
`;

const ShowDates = styled.button`
border-radius: 4px;
font-size: 16px;
`;

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
                    <div className="ft-bar-reviews">{this.props.experience.averageRating}</div>
                    {stars}
                    <div className="ft-bar-reviews">
                      {this.props.experience.numberOfReviews}
                      {' '}
reviews
                    </div>
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
                    <div className="ft-bar-reviews">{this.props.experience.averageRating}</div>
                    {stars}
                    <div className="ft-bar-reviews">
                      {this.props.experience.numberOfReviews}
                      {' '}
reviews
                    </div>
                  </Reviews>
                </CostAndReviews>
              </CostAndReviewsDiv>
              <ShowDatesDiv>
                <ShowDates>
            Show Dates
                </ShowDates>
              </ShowDatesDiv>
            </FooterLight>
          </WrapperLight>
        )}
      </>
    );
  }
}

// function FooterBar(props) {
//   const numStars = props.experience.averageRating;
//   let stars;

//   if (numStars === 5) {
//     stars = (
//       <div>
//         <FontAwesomeIcon icon={faStar} size="sm" />
//         <FontAwesomeIcon icon={faStar} size="sm" />
//         <FontAwesomeIcon icon={faStar} size="sm" />
//         <FontAwesomeIcon icon={faStar} size="sm" />
//         <FontAwesomeIcon icon={faStar} size="sm" />
//       </div>
//     );
//   } else if (numStars === 4) {
//     stars = (
//       <div>
//         <FontAwesomeIcon icon={faStar} size="sm" />
//         <FontAwesomeIcon icon={faStar} size="sm" />
//         <FontAwesomeIcon icon={faStar} size="sm" />
//         <FontAwesomeIcon icon={faStar} size="sm" />
//       </div>
//     );
//   } else if (numStars === 3) {
//     stars = (
//       <div>
//         <FontAwesomeIcon icon={faStar} size="sm" />
//         <FontAwesomeIcon icon={faStar} size="sm" />
//         <FontAwesomeIcon icon={faStar} size="sm" />
//       </div>
//     );
//   } else if (numStars === 2) {
//     stars = (
//       <div>
//         <FontAwesomeIcon icon={faStar} size="sm" />
//         <FontAwesomeIcon icon={faStar} size="sm" />
//       </div>
//     );
//   } else if (numStars === 1) {
//     stars = (
//       <div>
//         <FontAwesomeIcon icon={faStar} size="sm" />
//       </div>
//     );
//   } else {
//     stars = (
//       <div> </div>
//     );
//   }


//   return (
//     <Wrapper>
//       <Footer>
//         <CostAndReviewsDiv>
//           <CostAndReviews>
//             <div className="ft-bar-cost">
// From $
//               {props.experience.costPerPerson}
// /person
//             </div>
//             <Reviews>
//               <div className="ft-bar-reviews">{props.experience.averageRating}</div>
//               {stars}
//               <div className="ft-bar-reviews">
//                 {props.experience.numberOfReviews}
//                 {' '}
// reviews
//               </div>
//             </Reviews>
//           </CostAndReviews>
//         </CostAndReviewsDiv>
//         <ShowDatesDiv>
//           <ShowDates>
//             Show Dates
//           </ShowDates>
//         </ShowDatesDiv>
//       </Footer>
//     </Wrapper>
//   );
// }

// ReactDOM.render(<FooterBar experience={props.experience} />, document.getElementById('footer'));

export default FooterBar;
