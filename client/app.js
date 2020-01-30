import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MediaDisplay from './components/MediaDisplay.jsx';
import FooterBar from './components/FooterBar.jsx';
import InfoAboveMediaDisplay from './components/InfoAboveMediaDisplay.jsx';
import InfoBelowMediaDisplay from './components/InfoBelowMediaDisplay.jsx';
import './styles/styles.css';
import styled from 'styled-components';


const dummyData = [
  {
      "includes": [
          "Reiciendis",
          "Commodi",
          "Sequi",
          "Quos"
      ],
      "hostedLanguages": [
          "Voluptatem",
          "Enim"
      ],
      "imageUrls": [
          "https://fec-media.s3.amazonaws.com/photo1.jpg",
          "https://fec-media.s3.amazonaws.com/photo17.jpg",
          "https://fec-media.s3.amazonaws.com/photo9.jpg",
          "https://fec-media.s3.amazonaws.com/photo14.jpg",
          "https://fec-media.s3.amazonaws.com/photo3.jpg"
      ],
      "_id": "5e333fe3d342d53e6b61c7e7",
      "experienceId": 4,
      "title": "Officiis Earum Mollitia",
      "city": "East Lysannefort",
      "state": "Arizona",
      "country": "Thailand",
      "category": "Itaque Harum Sint",
      "activity": "Quae In Beatae",
      "averageRating": 3,
      "numberOfReviews": 47,
      "duration": 4,
      "groupSize": 40,
      "cuisine": "Sint",
      "costPerPerson": 264,
      "videoUrl": "https://arnold.biz",
      "__v": 0
  }
]

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
