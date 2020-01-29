/*
For reviewer, please ignore this file. This was for experimenting with FE layout of the media display.
*/

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


const Wrapper = styled.section`
padding: 4em;
background: black;
display: flex;
`;

const SubSection = styled.section`
  display: grid;
  grid-template-columns: [col1] 312px [padding1] 5px [col2] 312px [padding2] 5px [col3] 156px [padding3] 5px [col4] 312px;
  grid-template-rows: [row1] 208px [padding] 5px [row2] 208px;
`;

const Fit100Div = styled.div`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

// experiment
const DivGrid = styled.div`
  grid-area: row1 / col1 / row2 / padding 1;
`

// experiment
const ImageFit = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`


// const ImageLargePosition1 = styled.img`
//   grid-area: row1 / col1 / row2 / padding 1;
// `;


// const ImageLargePosition2 = styled.img`
//   grid-area: row1 / col2 / row2 / padding 2;
// `;

// const ImageSmallPosition1 = styled.img`
//   grid-area: row1 / col3 / padding / padding 3;
// `;

// const ImageSmallPosition2 = styled.img`
//   grid-column: col3 / padding3;
//   grid-row: row2;
// `;

// const ImageLargePosition3 = styled.img`
//   grid-column: col4;
//   grid-row: row1 / row2;
// `;