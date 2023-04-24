import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.scss';

export default class ImageGalleryItem extends Component {
  static propTypes = {};

  render() {
    const { images, toggleModal } = this.props;

    return images.map(({ id, webformatURL, largeImageURL, tags }) => {
      return (
        <li key={id} className="gallery__item">
          <img
            className="gallery__image"
            src={webformatURL}
            alt={tags}
            onClick={() => toggleModal()}
          />
        </li>
      );
    });
  }
}

/*
import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.scss';

function ImageGalleryItem({ images }) {
  return images.map(({ id, webformatURL, tags }) => {
    return (
      <li key={id} className="gallery__item">
        <img className="gallery__image" src={webformatURL} alt={tags} />
      </li>
    );
  });
}

ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
*/
