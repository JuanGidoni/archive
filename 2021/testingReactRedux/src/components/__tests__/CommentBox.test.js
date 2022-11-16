import React from 'react';
import {
 mount
} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'root';

let wrapped;
const list = [];
const setList = jest.fn()
 .mockReturnValueOnce([list, {}])

beforeEach(() => {
 wrapped = mount(
  <Root>
   <CommentBox setList={setList} list={list} />
  </Root>
 );
});

afterEach(() => {
 wrapped.unmount();
});

it('has text area and 2 buttons', () => {
 expect(wrapped.find("textarea").length).toEqual(1);
 expect(wrapped.find("button").length).toEqual(2);
});

describe('Actions: textarea and submit/clear list', () => {
 beforeEach(() => {
  wrapped.find('textarea').simulate('change', {
   target: {
    value: 'new comment'
   }
  });
  wrapped.update();
 });

 it('has a text area that user can type in', () => {
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
 });

 it('form submit: add comment to list and clear textarea', () => {

  wrapped.find('form').simulate('submit', {
   list: [...list, { comment: 'new comment' }]
  });
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('');

 });

});
