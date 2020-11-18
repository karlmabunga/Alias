/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

describe('App tests', () => {
  it('allows us to check for certain elements', () => {
    const wrapper = mount(<App />);
    expect(wrapper).not.toContainReact(<div>Random Div</div>);
  });

  it('should be able to render', () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeDefined();
  });

  it('should have certain properties in state', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toHaveState('words');
    expect(wrapper).toHaveState('showInstructions');
    expect(wrapper).toHaveState('showGame');
    expect(wrapper).toHaveState('team1');
    expect(wrapper).toHaveState('team2');
  });

  it('should know to not show game board by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('showGame')).toEqual(false);
  });

  it('should know to not show instructions by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('showInstructions')).toEqual(false);
  });

  it('does not render an empty component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('has correct render content', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('span')).not.toExist();
    expect(wrapper.find('ul')).not.toExist();
  });

  it('contains correct selectors', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toContainMatchingElement('.mainheader');
    expect(wrapper).not.toContainMatchingElement('#Random');
  });
});
