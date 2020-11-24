/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import TurnTitle from '../components/TurnTitle';

describe('TurnTitle tests', () => {
  it('allows us to check for certain elements', () => {
    const wrapper = mount(<TurnTitle />);
    expect(wrapper).not.toContainReact(<span>Reds Turn</span>);
  });

  it('should be able to render', () => {
    const wrapper = render(<TurnTitle />);
    expect(wrapper).toBeDefined();
  });

  it('does not render an empty component', () => {
    const wrapper = shallow(<TurnTitle />);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('has correct render content', () => {
    const wrapper = shallow(<TurnTitle />);
    expect(wrapper.find('form')).not.toExist();
    expect(wrapper.find('ul')).not.toExist();
    expect(wrapper.find('div')).toExist();
  });

  it('contains correct selectors', () => {
    const wrapper = mount(<TurnTitle />);
    expect(wrapper).toContainMatchingElement('.nextTurn');
    expect(wrapper).not.toContainMatchingElement('#turns');
  });
});
