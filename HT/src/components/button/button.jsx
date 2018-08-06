import React from 'react';
import PropTypes from 'prop-types';
import Styles from './button.css';

const Button = ({ onClick, label }) => (
  <button className={ Styles.button } onClick={ onClick }>{ label }</button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;