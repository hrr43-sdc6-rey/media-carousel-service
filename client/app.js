import React from 'react';
import ReactDOM from 'react-dom';
import MediaDisplay from './components/MediaDisplay.jsx';
import FooterBar from './components/FooterBar.jsx';
import InfoAboveMediaDisplay from './components/InfoAboveMediaDisplay.jsx';
import InfoBelowMediaDisplay from './components/InfoBelowMediaDisplay.jsx';
import './styles/styles.css';
import styled from 'styled-components';


class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div>
          <InfoAboveMediaDisplay />
        </div>
        <div>
          <MediaDisplay />
        </div>
        <div>
          <InfoBelowMediaDisplay />
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
