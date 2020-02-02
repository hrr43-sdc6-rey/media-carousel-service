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
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      experience: {},
    };
  }

  componentDidMount() {
    const urlParams = window.location.href.split('/');
    const experienceId = parseInt(urlParams[urlParams.length - 1]);

    axios.get(`/api/experiences/${experienceId}`)
      .then((res) => {
        const experienceObj = res.data[0];

        this.setState({
          images: experienceObj.imageUrls,
          experience: experienceObj,
        });
      })
      .catch((err) => {
        console.error('Error with axios get', err);
      });
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
            <InfoBelowMediaDisplay experience={this.state.experience} />
          </Wrapper>
        </DivBlack>
        <div>
        Body
        </div>
        <div>
          <FooterBar experience={this.state.experience} />
        </div>
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
