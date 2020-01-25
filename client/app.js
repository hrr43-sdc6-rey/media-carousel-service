import React from 'react';
import ReactDOM from 'react-dom';
import PhotoCarousel from './components/PhotoCarousel.jsx';
import './styles/styles.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <PhotoCarousel />
        <ScrollBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
