import React, { Component } from 'react';
import { Notify, Loading } from 'notiflix';
import { Wrapper, ErrorText } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import API from 'services/fetchImages';
import Button from './Button/Button';

Notify.init({
  clickToClose: true,
  fontSize: '14px',
});

export default class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    largeImage: '',
    tags: '',
    total: 0,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages(query, page);
    }
  }

  fetchImages = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const data = await API.fetchImages(query, page);
      if (data.hits.length === 0) {
        Notify.failure('We did not find anything for your request');
        return;
      }
      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
        total: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  onOpenModal = (largeImage, tags) => {
    this.setState({ showModal: true, largeImage, tags });
  };

  onCloseModal = () => {
    this.setState({ showModal: false, largeImage: '', tags: '' });
  };

  render() {
    const { images, isLoading, total, error, showModal, largeImage, tags } =
      this.state;
    const totalPage = total / images.length;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSubmit} />

        {/* {isLoading && <Loader />} */}
        {isLoading ? Loading.arrows({ svgSize: '240px' }) : Loading.remove()}

        {images.length !== 0 && (
          <ImageGallery images={images} onOpenModal={this.onOpenModal} />
        )}

        {totalPage > 1 && !isLoading && images.length !== 0 && (
          <Button onClick={this.onLoadMore} />
        )}

        {showModal && (
          <Modal
            largeImage={largeImage}
            tags={tags}
            onCloseModal={this.onCloseModal}
          />
        )}

        {error && (
          <ErrorText>
            An unexpected error has occurred. Try to come back later.
          </ErrorText>
        )}
      </Wrapper>
    );
  }
}
