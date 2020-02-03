import React from 'react';
import styled from 'styled-components';

const TestDiv = styled.div`
height: 25vh;
background: blue;
`;

class TestScrollA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarBottomPosition: null,
    };

    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }


  listenScrollEvent(e) {
    const navBar = document.querySelector('.test1').getBoundingClientRect();
    this.setState({ navbarBottomPosition: navBar.bottom });
    console.log('scroll navBarState', this.state.navbarBottomPosition, navBar);
    this.props.updateNavBarPosition(this.state.navbarBottomPosition);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }


  render() {
    return (
      <div className="test1">
        <TestDiv>
          <h1>This is section 1</h1>
        </TestDiv>
      </div>

    );
  }
}


export default TestScrollA;
