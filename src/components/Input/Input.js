import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, action, placeholder, onChange}) => (
  <input type={action} className={type} placeholder={placeholder} onChange={onChange}/>
);

Text.propTypes = {
  type: PropTypes.oneOf(['input', 'input--positive', 'input--negative']),
  placeholder: PropTypes.string,
  action: PropTypes.oneOf(['submit', 'text', 'checkbox', 'radio']),
  onChange: PropTypes.func
};

Text.defaultProps = {
  action: 'text',
  onChange: () => {}
};

export default Input;
