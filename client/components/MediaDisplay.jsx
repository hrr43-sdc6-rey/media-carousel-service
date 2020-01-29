import React from 'react';
import styled from 'styled-components';


class MediaDisplay extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="image-wrapper">
        <section class="image-section">
          <div class="image-cover">
            <img src="https://picsum.photos/id/1018/312/416" alt="an image of something" />
          </div>
          <div class="image-cover">
            <img src="https://picsum.photos/id/1047/312/416" alt="an image of something" />
          </div>
          <div class="vertical-stack-images">
            <div class="image-cover">
              <img src="https://picsum.photos/id/1055/200/300" alt="an image of something" />
            </div>
            <div class="image-cover">
              <img src="https://picsum.photos/id/106/156/208" alt="an image of something" />
            </div>
          </div>
          <div class="image-cover">
            <img src="https://picsum.photos/id/1069/312/416" alt="an image of something" />
          </div>
        </section>
      </div>
    )
  }
};

export default MediaDisplay;