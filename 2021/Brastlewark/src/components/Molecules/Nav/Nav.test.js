import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';

describe('<Nav />', () => {
 it('renders correctly and match snapshot', () => {
  const tree = renderer
   .create(<Router><Nav /></Router>)
   .toJSON();
  expect(tree).toMatchSnapshot();
 });
});