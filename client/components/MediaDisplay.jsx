import React from 'react';
import styled from 'styled-components';


class MediaDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="image-wrapper">
        <section class="image-section">
          <div class="image-cover">
            <img src={this.props.images[0]} alt="an image of something" />
          </div>
          <div class="image-cover">
            <img src={this.props.images[1]} alt="an image of something" />
          </div>
          <div class="vertical-stack-images">
            <div class="image-cover">
              <img src={this.props.images[2]} alt="an image of something" />
            </div>
            <div class="image-cover">
              <img src={this.props.images[3]} alt="an image of something" />
            </div>
          </div>
          <div class="image-cover">
            <img src={this.props.images[4]} alt="an image of something" />
          </div>
        </section>
      </div>
    )
  }
};

export default MediaDisplay;