import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.scss';

function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className="gallery">
      {images.map(({ id, ...otherProps }) => {
        return (
          <li key={id} className="gallery__item">
            <ImageGalleryItem onOpenModal={onOpenModal} {...otherProps} />
          </li>
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
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

export default ImageGallery;
