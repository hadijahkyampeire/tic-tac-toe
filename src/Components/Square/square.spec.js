import React from 'react';
import Square from './square';
import { shallow } from 'enzyme';

describe('Square tests', () => {
  it('renders without crashing', () => {
    shallow(<Square />);
  });
});