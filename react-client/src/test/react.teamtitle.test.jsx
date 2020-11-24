/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import TeamTitle from '../components/TeamTitle';

describe('TeamTitle tests', () => {
  it('allows us to check for certain elements', () => {
    const wrapper = mount(<TeamTitle />);
    expect(wrapper).not.toContainReact(<div>Instructions</div>);
  });

  it('should be able to render', () => {
    const wrapper = render(<TeamTitle />);
    expect(wrapper).toBeDefined();
  });

  it('does not render an empty component', () => {
    const wrapper = shallow(<TeamTitle />);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('has correct render content', () => {
    const wrapper = shallow(<TeamTitle />);
    expect(wrapper.find('form')).toExist();
    expect(wrapper.find('ul')).not.toExist();
    expect(wrapper.find('li')).not.toExist();
  });

  it('contains correct selectors', () => {
    const wrapper = mount(<TeamTitle />);
    expect(wrapper).toContainMatchingElement('.team1label');
    expect(wrapper).toContainMatchingElement('.team2label');
    expect(wrapper).toContainMatchingElement('.form');
    expect(wrapper).not.toContainMatchingElement('#Titles');
  });
});
