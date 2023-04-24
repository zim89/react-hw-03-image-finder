import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ onClick }) {
  return (
    <button className="load-button" type="button" onClick={() => onClick()}>
      Load more
    </button>
  );
}

Button.propTypes = { onClick: PropTypes.func.isRequired };

export default Button;
