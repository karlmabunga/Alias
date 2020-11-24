/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import GameBoard from '../components/GameBoard';
import App from '../components/App';

describe('GameBoard tests', () => {
  const words = ['AFRICA', 'AGENT', 'AIR', 'ALIEN', 'ALPS', 'AMAZON', 'AMBULANCE', 'AMERICA', 'ANGEL', 'ANTARCTICA', 'APPLE', 'ARM', 'ATLANTIS', 'AUSTRALIA', 'AZTEC', 'BACK', 'BALL', 'BAND', 'BANK', 'BAR', 'BARK', 'BAT', 'BATTERY', 'BEACH', 'BEAR'];

  it('allows us to check for certain elements', () => {
    const wrapper = mount(<GameBoard words={words} />);
    expect(wrapper).not.toContainReact(<div>Random Div</div>);
  });

  it('should be able to render', () => {
    const wrapper = render(<GameBoard words={words} />);
    expect(wrapper).toBeDefined();
  });

  it('should have certain properties in state', () => {
    const wrapper = mount(<GameBoard words={words} />);
    expect(wrapper).toHaveState('showColors');
    expect(wrapper).toHaveState('gameOver');
    expect(wrapper).toHaveState('colors');
    expect(wrapper).toHaveState('red');
    expect(wrapper).toHaveState('blue');
    expect(wrapper).toHaveState('redIsNext');
  });

  it('should know to not show colors for words by default', () => {
    const wrapper = shallow(<GameBoard words={words} />);
    expect(wrapper.state('showColors')).toEqual(false);
  });

  it('does not render an empty component', () => {
    const wrapper = shallow(<GameBoard words={words} />);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('has correct render content', () => {
    const wrapper = shallow(<GameBoard words={words} />);
    expect(wrapper.find('span')).not.toExist();
    expect(wrapper.find('ul')).not.toExist();
  });

  it('contains correct selectors', () => {
    const wrapper = mount(<GameBoard words={words} />);
    expect(wrapper).toContainMatchingElement('.homewrapper');
    expect(wrapper).toContainMatchingElement('.masterview');
    expect(wrapper).not.toContainMatchingElement('#GameMasterView');
  });

  it('should not only find one of each selector', () => {
    const wrapper = mount(<GameBoard words={words} />);
    expect(wrapper).toContainExactlyOneMatchingElement('.masterviewbutton');
    expect(wrapper).toContainExactlyOneMatchingElement('.board');
    expect(wrapper).toContainExactlyOneMatchingElement('#tbody');
  });

  it('should go to home page and toggle showing game in state', () => {
    const wrapper = mount(<GameBoard words={words} />);
    const wrapperApp = mount(<App />);
    const homeButton = wrapper.find('button');
    homeButton.find('.home').simulate('click');
    expect(wrapperApp.state().showGame).toBe(false);
  });

  it('resets the GameBoards state to a fresh game when clicking on new game button', () => {
    const wrapper = mount(<GameBoard words={words} getWords={() => {}} />);
    const newGame = wrapper.find('button');
    newGame.find('.newgame').simulate('click');
    expect(wrapper.state().red).toBe(9);
    expect(wrapper.state().blue).toBe(8);
    expect(wrapper.state().gameOver).toBe(false);
    expect(wrapper.state().redIsNext).toBe(true);
  });

  it('should show the colors of each cell when clicking on the grandmaster view button', () => {
    const wrapper = mount(<GameBoard words={words} />);
    const grandmaster = wrapper.find('button');
    grandmaster.find('.masterviewbutton').simulate('click');
    expect(wrapper.state().showColors).toBe(true);
  });

  it('changes the turn when clicking on the the entire game tile', () => {
    const wrapper = mount(<GameBoard words={words} />);
    const gameTile = wrapper.find('tbody');
    gameTile.find('#tbody').simulate('click');
    expect(wrapper.state().redIsNext).toBe(true);
  });
});
