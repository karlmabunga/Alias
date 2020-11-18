/* eslint-disable no-undef */
import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../components/App';

function Fixture() {
  return (
    <div>
      <input id="checked" defaultChecked />
      <input id="not" defaultChecked={false} />
      <input id="tertiary" defaultChecked checked={false} />
    </div>
  );
}
describe('App tests', () => {
  it('allows us to check for certain elements', () => {
    const wrapper = mount(<App />);
    expect(wrapper).not.toContainReact(<div>Random Div</div>);
  });
});
