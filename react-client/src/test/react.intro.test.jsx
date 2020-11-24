/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Intro from '../components/Intro';
import App from '../components/App';

describe('Intro tests', () => {
  it('allows us to check for certain elements', () => {
    const wrapper = mount(<Intro />);
    expect(wrapper).not.toContainReact(<div>Random Div</div>);
  });

  it('should be able to render', () => {
    const wrapper = render(<Intro />);
    expect(wrapper).toBeDefined();
  });

  it('does not render an empty component', () => {
    const wrapper = shallow(<Intro />);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('has correct render content', () => {
    const wrapper = shallow(<Intro />);
    expect(wrapper.find('span')).not.toExist();
    expect(wrapper.find('ul')).not.toExist();
  });

  it('contains correct selectors', () => {
    const wrapper = mount(<Intro />);
    expect(wrapper).toContainMatchingElement('.introheader');
    expect(wrapper).toContainMatchingElement('.start');
    expect(wrapper).toContainMatchingElement('.instructions');
    expect(wrapper).not.toContainMatchingElement('#Instruction');
  });

  it('should stop showing instructions when clicking that button', () => {
    const intro = mount(<Intro />);
    const app = mount(<App />);
    const button = intro.find('button');
    button.find('.instructions').simulate('click');
    expect(app.state().showInstructions).toBe(false);
  });

  it('should stop showing instruction when ready to play game', () => {
    const intro = mount(<Intro />);
    const app = mount(<App />);
    const button = intro.find('button');
    button.find('.start').simulate('click');
    expect(app.state().showInstructions).toBe(false);
  });
});
