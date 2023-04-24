import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.scss';

function ImageGalleryItem({ ...otherProps }) {
  const { images, onOpenModal } = otherProps;
  return images.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <li key={id} className="gallery__item">
        <img
          className="gallery__image"
          src={webformatURL}
          alt={tags}
          onClick={() => onOpenModal(largeImageURL, tags)}
        />
      </li>
    );
  });
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
