import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, action, placeholder, onChange, value}) => (
  <input type={action} className={type} placeholder={placeholder} onChange={onChange} value={value}/>
);

Text.propTypes = {
  type: PropTypes.oneOf(['input', 'input--positive', 'input--negative']),
  placeholder: PropTypes.string,
  action: PropTypes.oneOf(['submit', 'text', 'checkbox', 'radio']),
  onChange: PropTypes.func,
  value: PropTypes.string
};

Text.defaultProps = {
  action: 'text',
  onChange: () => {},
  value: '',
  placeholder: ''
};

export default Input;
