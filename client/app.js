import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MediaDisplay from './components/MediaDisplay.jsx';
import FooterBar from './components/FooterBar.jsx';
import InfoAboveMediaDisplay from './components/InfoAboveMediaDisplay.jsx';
import InfoBelowMediaDisplay from './components/InfoBelowMediaDisplay.jsx';
import './styles/styles.css';
import styled from 'styled-components';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      experience: {}
    }
  }

  componentDidMount() {
    let urlParams = window.location.href.split('/');
    let experienceId = parseInt(urlParams[urlParams.length - 1]);

    axios.get(`/api/experiences/${experienceId}`)
      .then(res => {
        let experienceObj = res.data[0];

        this.setState({
          images: experienceObj.imageUrls,
          experience: experienceObj
        })
      })
      .catch(err => {
        console.error('Error with axios get', err);
      })
  }


  render() {
    return (
      <div className="main-container">
        <div>
          <InfoAboveMediaDisplay experience={this.state.experience} />
        </div>
        <div>
          <MediaDisplay images={this.state.images} />
        </div>
        <div>
          <InfoBelowMediaDisplay experience={this.state.experience} />
        </div>
        <div>
          {/* <FooterBar /> */}
        </div>
        <div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
