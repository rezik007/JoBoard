import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, Selector, type, action}) => (
  <Selector type={action} className={type}>{text}</Selector>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  Selector: PropTypes.string,
  type: PropTypes.oneOf(['btn-default', 'btn-strong', 'btn-subdued', 'btn-positive', 'btn-negative']),
  action: PropTypes.oneOf(['submit', 'button', 'reset'])
};

Button.defaultProps = {
  type: 'btn-default',
  Selector: 'button',
  noSelect: false,
};

export default Button;
