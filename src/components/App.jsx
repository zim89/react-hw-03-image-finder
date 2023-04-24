import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import API from 'services/fetchImages';

export default class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    searchPage: 1,
    showModal: false,
  };
  Query;

  async componentDidMount() {
    const { searchQuery, searchPage } = this.state;

    try {
      const data = await API.fetchImages(searchQuery);
      this.setState({ images: [...data.hits] });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchQuery;
    const nextSearch = this.props.searchQuery;

    const { searchQuery, searchPage } = this.state;
    if (prevSearch !== nextSearch) {
      try {
        const data = await API.fetchImages(searchQuery);
        this.setState({ images: [...data.hits] });
      } catch (error) {
        console.log(error);
      }
    }
  }

  async fetchImages(query, page) {
    try {
      return await API.fetchImages(query, page);
    } catch (error) {
      console.log(error);
    }
  }

  handleSearchQuery = searchQuery => {
    this.setState({ searchQuery });
  };

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchQuery} />
        <ImageGallery images={images} toggleModal={this.toggleModal} />
        {showModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}
