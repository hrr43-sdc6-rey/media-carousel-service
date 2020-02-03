import React from 'react';
import styled from 'styled-components';

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

const FooterTestDark = styled.div`
display: flex;
flex-direction: row;
position: relative;
bottom: 0;
width 100vw;
justify-content: space-between;
height: 30px;
background: black;
color: white;
`;

const FooterTestLight = styled.div`
display: flex;
flex-direction: row;
position: relative;
bottom: 0;
width 100vw;
justify-content: space-between;
height: 30px;
background: white;
color: black;
`;

class TestFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerBarPosition: null,
    };

    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  listenScrollEvent(e) {
    const footer = document.querySelector('.test2').getBoundingClientRect();
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


    return (
      <>
        {isDarkMode ? (
          <WrapperDark>
            <FooterTestDark>
              <div className="test2">Footer test</div>
            </FooterTestDark>
          </WrapperDark>
        ) : (
          <WrapperLight>
            <FooterTestLight>
              <div className="test2">Footer test</div>
            </FooterTestLight>
          </WrapperLight>
        )}
      </>
    );
  }
}


export default TestFooter;
