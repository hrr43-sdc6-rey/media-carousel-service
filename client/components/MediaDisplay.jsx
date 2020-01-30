import React from 'react';
import styled from 'styled-components';


class MediaDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="image-wrapper">
        <section className="image-section">
          <div className="image-cover">
            <img src={this.props.images[0]} alt="an image of something" />
          </div>
          <div className="image-cover">
            <img src={this.props.images[1]} alt="an image of something" />
          </div>
          <div className="vertical-stack-images">
            <div className="image-cover">
              <img src={this.props.images[2]} alt="an image of something" />
            </div>
            <div className="image-cover">
              <img src={this.props.images[3]} alt="an image of something" />
            </div>
          </div>
          <div className="image-cover">
            <img src={this.props.images[4]} alt="an image of something" />
          </div>
        </section>
      </div>
    )
  }
};

export default MediaDisplay;