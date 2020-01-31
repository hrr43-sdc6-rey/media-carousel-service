import React from 'react';
import Enzyme, { render, shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter()});

import InfoBelowMediaDisplay from '../client/components/InfoBelowMediaDisplay';

import MediaDisplay from '../client/components/MediaDisplay';

import InfoAboveMediaDisplay from '../client/components/InfoAboveMediaDisplay';



describe('InfoBelowMediaDisplay should render correctly ', () => {
  it('should be defined', () => {
    expect(InfoBelowMediaDisplay).toBeDefined();
  });

  it('InfoBelowMediaDisplay should shallow render', () => {
    const Wrapper = shallow(<InfoBelowMediaDisplay />)
    // if passing props props={[]}
    expect(Wrapper).toMatchSnapshot()
  });
})

describe('MediaDisplay should render correctly ', () => {
  it('should be defined', () => {
    expect(MediaDisplay).toBeDefined();
  });

  it('MediaDisplay should shallow render', () => {
    const Wrapper = shallow(<MediaDisplay />)

    expect(Wrapper).toMatchSnapshot()
  });

  it('expect 5 images to be rendered', () => {
    const wrapper = shallow(<MediaDisplay />)

    expect(wrapper.find('img')).toHaveLength(5)
  });
});

describe('InfoAboveMediaDisplay should render correctly ', () => {
  it('should be defined', () => {
    expect(InfoAboveMediaDisplay).toBeDefined();
  });

  it('InfoAboveMediaDisplay should shallow render', () => {
    const Wrapper = shallow(<InfoAboveMediaDisplay />)

    expect(Wrapper).toMatchSnapshot()
  });
})


