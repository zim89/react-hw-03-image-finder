import React from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.scss';

function ImageGallery({ ...otherProps }) {
  return (
    <ul className="gallery">
      <ImageGalleryItem {...otherProps} />
    </ul>
  );
}

ImageGallery.propTypes = {};

export default ImageGallery;
