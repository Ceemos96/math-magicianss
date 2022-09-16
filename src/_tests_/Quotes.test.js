import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

describe('Testing the Quotes function', () => {
  it('Home is rendered', () => {
    const quotes = renderer
      .create(<Quotes />)
      .toJSON();
    expect(quotes).toMatchSnapshot();
  });
});
