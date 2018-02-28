import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, action, placeholder}) => (
  <input type={action} className={type} placeholder={placeholder}/>
);

Text.propTypes = {
  type: PropTypes.oneOf(['input', 'input--positive', 'input--negative']),
  placeholder: PropTypes.string,
  action: PropTypes.oneOf(['submit', 'text', 'checkbox', 'radio']),
};

Text.defaultProps = {
  action: 'text'
};

export default Input;
