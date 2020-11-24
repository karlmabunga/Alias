/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Row from '../components/Row';

describe('Row tests', () => {
  const words = [[1, 'AFRICA'], [2, 'AGENT'], [3, 'AIR'], [4, 'ALIEN'], [5, 'ALPS']];
  const colors = {
    1: 'red', 2: 'blue', 3: 'red', 4: 'blue', 5: 'purple',
  };

  it('allows us to check for certain elements', () => {
    const wrapper = mount(<Row words={words} colors={colors} />);
    expect(wrapper).not.toContainReact(<div>Random Div</div>);
  });

  it('should be able to render', () => {
    const wrapper = render(<Row words={words} colors={colors} />);
    expect(wrapper).toBeDefined();
  });

  it('does not render an empty component', () => {
    const wrapper = shallow(<Row words={words} colors={colors} />);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('has correct render content', () => {
    const wrapper = shallow(<Row words={words} colors={colors} />);
    expect(wrapper.find('span')).not.toExist();
    expect(wrapper.find('ul')).not.toExist();
  });

  it('contains correct selectors', () => {
    const wrapper = mount(<Row words={words} colors={colors} />);
    expect(wrapper).toContainMatchingElement('.td');
    expect(wrapper).toContainMatchingElement('.neutral');
    expect(wrapper).not.toContainMatchingElement('#MatchingWords');
  });

  // it('should remove classname of neutral from tile', () => {
  //   const wrapper = shallow(<Row words={words} colors={colors} />);
  //   const gameTile = wrapper.find('td');
  //   const purple = gameTile.find('.purple');
  //   purple.simulate('click');
  //   // expect(wrapper).not.toContainMatchingElement('#5 .neutral');
  //   // expect(gameTile.find('#1')).not.toExist();
  //   // console.log(JSON.stringify(gameTile));
  //   expect(purple).not.toContainMatchingElement('.neutral');
  // });
});
