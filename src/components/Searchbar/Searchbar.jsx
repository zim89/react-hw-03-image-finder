// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { Notify } from 'notiflix';
import './Searchbar.scss';

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    const { search } = this.state;

    e.preventDefault();

    if (search.trim() === '') {
      Notify.failure('Search query cannot be an empty string');
      return;
    }

    this.props.onSubmit(search);
    this.setState({ search: '' });
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
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
