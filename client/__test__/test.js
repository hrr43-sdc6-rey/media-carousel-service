import React from 'react';
import Enzyme, {
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InfoBelowMediaDisplay from '../components/InfoBelowMediaDisplay';
import MediaDisplay from '../components/MediaDisplay';
import InfoAboveMediaDisplay from '../components/InfoAboveMediaDisplay';
import NavBar from '../components/NavBar';
import FooterBar from '../components/FooterBar';

Enzyme.configure({ adapter: new Adapter() });

describe('Photos And Info Test', () => {
  describe('InfoBelowMediaDisplay should render correctly ', () => {
    const testExperience = {
      includes: ['Et', 'Th'],
      hostedLanguages: ['Tenetur', 'Totam'],
      imageUrls: ['https://fec-media.s3.amazonaws.com/photo17.jpg', 'https://fec-media.s3.amazonaws.com/photo4.jpg', 'https://fec-media.s3.amazonaws.com/photo10.jpg', 'https://fec-media.s3.amazonaws.com/photo15.jpg', 'https://fec-media.s3.amazonaws.com/photo18.jpg'],
      experienceId: 1,
      title: 'Aut Quia Qui',
      city: 'Tessiechester',
      state: 'Maryland',
      country: 'Moldova',
      category: 'Et Placeat Molestiae',
      activity: 'Expedita Quia Sunt',
      averageRating: 2,
      numberOfReviews: 27,
      duration: 6,
      groupSize: 24,
      cuisine: 'Velit',
      costPerPerson: 245,
      videoUrl: 'http://akeem.com',
    };

    it('should be defined', () => {
      expect(InfoBelowMediaDisplay).toBeDefined();
    });

    const Wrapper = shallow(<InfoBelowMediaDisplay experience={testExperience} />);


    it('InfoBelowMediaDisplay should shallow render', () => {
      expect(Wrapper).toMatchSnapshot();
    });
  });

  describe('MediaDisplay should render correctly ', () => {
    const imageTest = ['https://fec-media.s3.amazonaws.com/photo17.jpg', 'https://fec-media.s3.amazonaws.com/photo4.jpg', 'https://fec-media.s3.amazonaws.com/photo10.jpg', 'https://fec-media.s3.amazonaws.com/photo15.jpg', 'https://fec-media.s3.amazonaws.com/photo18.jpg'];

    const Wrapper = shallow(<MediaDisplay images={imageTest} />);

    it('should be defined', () => {
      expect(MediaDisplay).toBeDefined();
    });

    it('MediaDisplay should shallow render', () => {
      // const Wrapper = shallow(<MediaDisplay />);

      expect(Wrapper).toMatchSnapshot();
    });

    it('expect 5 images to be rendered', () => {
      // const wrapper = shallow(<MediaDisplay />);
      expect(Wrapper.find('img')).toHaveLength(5);
    });
  });

  describe('InfoAboveMediaDisplay should render correctly ', () => {
    it('should be defined', () => {
      expect(InfoAboveMediaDisplay).toBeDefined();
    });

    it('InfoAboveMediaDisplay should shallow render', () => {
      const Wrapper = shallow(<InfoAboveMediaDisplay />);

      expect(Wrapper).toMatchSnapshot();
    });
  });

  describe('NavBar should render correctly ', () => {
    it('should be defined', () => {
      expect(NavBar).toBeDefined();
    });

    it('NavBar should shallow render', () => {
      const Wrapper = shallow(<NavBar />);
      expect(Wrapper).toMatchSnapshot();
    });
  });

  describe('FooterBar should render correctly ', () => {
    it('should be defined', () => {
      expect(FooterBar).toBeDefined();
    });

    it('FooterBar should shallow render', () => {
      const Wrapper = shallow(<FooterBar />);
      expect(Wrapper).toMatchSnapshot();
    });
  });
});


// {_id:{"$oid":"5e3b1fdf930faeb939794bf7"},
// includes:["Et"],
// hostedLanguages:["Tenetur","Totam"],
// imageUrls:["https://fec-media.s3.amazonaws.com/photo17.jpg","https://fec-media.s3.amazonaws.com/photo4.jpg","https://fec-media.s3.amazonaws.com/photo10.jpg","https://fec-media.s3.amazonaws.com/photo15.jpg","https://fec-media.s3.amazonaws.com/photo18.jpg"],
// experienceId:{"$numberInt":"1"},
// title:"Aut Quia Qui","city":"Tessiechester",
// state:"Maryland",
// country:"Moldova",
// category:"Et Placeat Molestiae",
// activity:"Expedita Quia Sunt",
// averageRating:{"$numberInt":"2"},
// numberOfReviews:{"$numberInt":"27"},
// duration:{"$numberInt":"6"},
// groupSize:{"$numberInt":"24"},
// cuisine:"Velit",
// costPerPerson:{"$numberInt":"245"},
// videoUrl:"http://akeem.com",
// __v:{"$numberInt":"0"}}

// {
// includes:["Et"],
// hostedLanguages:["Tenetur","Totam"],
// imageUrls:["https://fec-media.s3.amazonaws.com/photo17.jpg","https://fec-media.s3.amazonaws.com/photo4.jpg","https://fec-media.s3.amazonaws.com/photo10.jpg","https://fec-media.s3.amazonaws.com/photo15.jpg","https://fec-media.s3.amazonaws.com/photo18.jpg"],
// experienceId:1,
// title:"Aut Quia Qui","city":"Tessiechester",
// state:"Maryland",
// country:"Moldova",
// category:"Et Placeat Molestiae",
// activity:"Expedita Quia Sunt",
// averageRating:2,
// numberOfReviews:27,
// duration:6,
// groupSize:24,
// cuisine:"Velit",
// costPerPerson: 245,
// videoUrl:"http://akeem.com",
// }


// {_id:{"$oid":"5e3b1fdf930faeb939794bf7"},
// includes:["Et"],
// hostedLanguages:["Tenetur","Totam"],
// imageUrls:["https://fec-media.s3.amazonaws.com/photo17.jpg","https://fec-media.s3.amazonaws.com/photo4.jpg","https://fec-media.s3.amazonaws.com/photo10.jpg","https://fec-media.s3.amazonaws.com/photo15.jpg","https://fec-media.s3.amazonaws.com/photo18.jpg"],
// experienceId:{"$numberInt":"1"},
// title:"Aut Quia Qui","city":"Tessiechester",
// state:"Maryland",
// country:"Moldova",
// category:"Et Placeat Molestiae",
// activity:"Expedita Quia Sunt",
// averageRating:{"$numberInt":"2"},
// numberOfReviews:{"$numberInt":"27"},
// duration:{"$numberInt":"6"},
// groupSize:{"$numberInt":"24"},
// cuisine:"Velit",
// costPerPerson:{"$numberInt":"245"},
// videoUrl:"http://akeem.com",
// __v:{"$numberInt":"0"}}
