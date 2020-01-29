import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import MediaDisplay from './components/MediaDisplay.jsx';
import FooterBar from './components/FooterBar.jsx';
=======
import PhotoCarousel from './components/PhotoCarousel.jsx';
>>>>>>> f9a5d7688e4c65a6485fe1bfe77f629aa5d5aff0
import './styles/styles.css';

class App extends React.Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <MediaDisplay />
        <FooterBar />
=======
        <PhotoCarousel />
        <ScrollBar />
>>>>>>> f9a5d7688e4c65a6485fe1bfe77f629aa5d5aff0
      </div>
    )
  }
}

<<<<<<< HEAD

=======
>>>>>>> f9a5d7688e4c65a6485fe1bfe77f629aa5d5aff0
ReactDOM.render(<App />, document.getElementById('app'));
