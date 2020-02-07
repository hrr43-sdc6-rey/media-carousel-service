import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


const Wrapper = styled.section`
box-sizing: border-box;
width: 100vw;
background: black;
display: flex;
`;

function MediaDisplay({ images }) {
  return (
    <Wrapper>
      <section className="image-section">
        <div className="image-cover">
          <img src={images[0]} alt="image 1" />
        </div>
        <div className="image-cover">
          <img src={images[1]} alt="image 2" />
        </div>
        <div className="vertical-stack-images">
          <div className="image-cover-stacked">
            <img src={images[2]} alt="image 3" />
          </div>
          <div className="image-cover-stacked">
            <img src={images[3]} alt="image 4" />
          </div>
        </div>
        <div className="image-cover-last">
          <img src={images[4]} alt="image 5" />
        </div>
        <div className="share-save">
          <div className="share">
            <button type="button" className="save-btn">
              <FontAwesomeIcon className="save-icon" icon={faShareSquare} size="1x" />
              <span className="share-text">Share</span>
            </button>
          </div>
          <div className="save">
            <button type="button" className="share-btn">
              <FontAwesomeIcon className="share-icon" icon={faHeart} size="1x" />
              <span className="save-text">Save</span>
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

MediaDisplay.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MediaDisplay;
