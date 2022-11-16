import React from 'react';
import { shallow } from 'enzyme'
import Root from 'Root';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
 wrapped = shallow(<App />);
});

afterEach(() => {
 wrapped.unmount();
});

describe('App with Comment Box and List', () => {
 it('shows a Comment Box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
 });

 it('shows a Comment List', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
 });
});

