import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import './styles/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import NavBar from './components/NavBar.jsx';
import MediaDisplay from './components/MediaDisplay.jsx';
import FooterBar from './components/FooterBar.jsx';
import InfoAboveMediaDisplay from './components/InfoAboveMediaDisplay.jsx';
import InfoBelowMediaDisplay from './components/InfoBelowMediaDisplay.jsx';

library.add(fab);

const DivBlack = styled.div`
background: black;
margin: 0;
`;

const Wrapper = styled.section`
margin-left: auto;
margin-right: auto;
padding-left: 50px;
padding-right: 50px
background: black;
display: flex;
`;

const TestDivBody = styled.section`
height: 25vh;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      experience: {},
      navBarPosition: null,
      footerBarPosition: null,
      footerDarkMode: null,
      languages: [],
      includes: [],

    };

    this.checkNavAndFooter = this.checkNavAndFooter.bind(this);
    this.updateNavBarPosition = this.updateNavBarPosition.bind(this);
    this.updateFooterBarPosition = this.updateFooterBarPosition.bind(this);
    this.isDarkMode = this.isDarkMode.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkNavAndFooter);

    const urlParams = window.location.href.split('/');
    const experienceId = parseInt(urlParams[urlParams.length - 1], 10) || 1;

    axios.get(`http://localhost:3001/api/experiences/${experienceId}`)
      .then((res) => {
        const experienceObj = res.data[0];

        this.setState({
          images: experienceObj.imageUrls,
          experience: experienceObj,
          languages: experienceObj.hostedLanguages,
          includes: experienceObj.includes,
        });
      })
      .catch((err) => {
        console.error('Error with axios get', err);
      });
  }

  checkNavAndFooter() {
    const { navBarPosition, footerBarPosition } = this.state;

    this.setState({ footerDarkMode: this.isDarkMode(navBarPosition, footerBarPosition) });
  }

  isDarkMode(navBarPosition, footerBarPosition) {
    return this.state.navBarPosition >= this.state.footerBarPosition;
  }

  updateNavBarPosition(navbarPosition) {
    this.setState({ navBarPosition: navbarPosition });
    this.checkNavAndFooter();
  }

  updateFooterBarPosition(footerPosition) {
    this.setState({ footerBarPosition: footerPosition });
    this.checkNavAndFooter();
  }


  render() {
    return (
      <div>
        <DivBlack>
          <Wrapper>
            <NavBar />
          </Wrapper>
          <Wrapper>
            <InfoAboveMediaDisplay experience={this.state.experience} />
          </Wrapper>
          <Wrapper>
            <MediaDisplay images={this.state.images} />
          </Wrapper>
          <Wrapper>
            <InfoBelowMediaDisplay
              experience={this.state.experience}
              languages={this.state.languages}
              includes={this.state.includes}
              updateNavBarPosition={this.updateNavBarPosition}
            />
          </Wrapper>
        </DivBlack>
        <div />
        <TestDivBody />
        <div>
          <FooterBar
            experience={this.state.experience}
            updateFooterBarPosition={this.updateFooterBarPosition}
            footerDarkMode={this.state.footerDarkMode}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('photos-and-info'));
