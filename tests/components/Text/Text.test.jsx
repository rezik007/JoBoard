import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Text from '../../../src/components/Text';

Enzyme.configure({ adapter: new Adapter() });

describe("Text component", () => {
  const defaultProps = {
    text: "Default text",
  };

  test("should render default text", () => {
    const wrapper = shallow(<Text {...defaultProps} />);

    expect(wrapper.text()).toBe('Default text');
    expect(wrapper.hasClass('text-default')).toBeTruthy();
  });

  test("should render strong text", () => {
    const wrapper = shallow(<Text {...defaultProps} type="text-strong" />);

    expect(wrapper.hasClass('text-strong')).toBeTruthy();
  });

  test("should render subdued text", () => {
    const wrapper = shallow(<Text {...defaultProps} type="text-subdued" />);

    expect(wrapper.hasClass('text-subdued')).toBeTruthy();
  });

  test("should render positive text", () => {
    const wrapper = shallow(<Text {...defaultProps} type="text-positive" />);

    expect(wrapper.hasClass('text-positive')).toBeTruthy();
  });

  test("should render negative text", () => {
    const wrapper = shallow(<Text {...defaultProps} type="text-negative" />);

    expect(wrapper.hasClass('text-negative')).toBeTruthy();
  });
});
