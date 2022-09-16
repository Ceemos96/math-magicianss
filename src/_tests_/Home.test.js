import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Testing the Homepage', () => {
  it('Home is rendered', () => {
    const home = renderer
      .create(<Home />)
      .toJSON();
    expect(home).toMatchSnapshot();
  });
});
