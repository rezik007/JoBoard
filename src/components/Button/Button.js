import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, Selector, type, action, onClick }) => (
  <Selector type={action} className={type} onClick={onClick}>{text}</Selector>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['btn', 'btn--strong', 'btn--subdued', 'btn--positive', 'btn--negative']),
  action: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'btn',
  action: 'button',
  onClick: () => {}
};

export default Button;
