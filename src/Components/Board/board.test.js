import React from 'react';
import Board from './board';
import { shallow, mount } from 'enzyme';

describe('Board tests', () => {
  it('renders without crashing', () => {
    let squares = Array(9).fill(null);
    shallow(<Board squares={squares} />);
  });

  it('calls onclick event when a board square is clicked', () => {
    let squares = Array(9).fill(null);
    const onClick = jest.fn();
    const wrapper = mount(<Board squares={squares} onClick={onClick} />);
    wrapper
      .find('button.square')
      .first()
      .simulate('click');
    expect(onClick).toBeCalledWith(0);
  });
});
