import React from 'react';
import ReactDOM from 'react-dom';
import MediaDisplay from './components/MediaDisplay.jsx';
import FooterBar from './components/FooterBar.jsx';
import './styles/styles.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <MediaDisplay />
        <FooterBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
