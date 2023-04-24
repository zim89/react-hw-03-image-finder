// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Searchbar.scss';

export default class Searchbar extends Component {
  static propTypes = {};

  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    // FIXME:
    // if (this.state.pokemonName.trim() === '') {
    //   toast.error('Введите имя покемона.');
    //   return;
    // }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <div className="nav">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <FaSearch />
          </button>

          <input
            className="form__input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
