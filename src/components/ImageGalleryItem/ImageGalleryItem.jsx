import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.scss';

function ImageGalleryItem({ onOpenModal, ...otherProps }) {
  const { webformatURL, largeImageURL, tags } = otherProps;
  return (
    <img
      className="gallery__image"
      src={webformatURL}
      alt={tags}
      onClick={() => onOpenModal(largeImageURL, tags)}
    />
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
