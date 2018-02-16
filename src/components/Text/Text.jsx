import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text, Selector, type}) => (
  <Selector className={type}>{text}</Selector>
);

Text.propTypes = {
  text: PropTypes.string.isRequired,
  Selector: PropTypes.string,
  type: PropTypes.oneOf(['text-default', 'text-strong', 'text-subdued', 'text-positive', 'text-negative']),
};

Text.defaultProps = {
  type: 'text-default',
  Selector: 'p',
  noSelect: false,
};

export default Text;
