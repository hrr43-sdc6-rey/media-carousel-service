import React from 'react';
import ReactDOM from 'react-dom';
import MediaDisplay from './components/MediaDisplay.jsx';
import FooterBar from './components/FooterBar.jsx';
import './styles/styles.css';
import styled from 'styled-components';


class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <MediaDisplay />
        </div>
        <div>
          <FooterBar />
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
