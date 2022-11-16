import { useState } from 'react'

import { connect } from 'react-redux'
import * as actions from 'actions'

import Button from "components/Button"
import Header from "components/Header"
import Text from "components/Text"

const CommentBox = (props) => {
 const [comment, setComment] = useState('');

 return (
  <div className="commentBox">
   <Header text="Comment Box" />
   <Text setComment={setComment} comment={comment} />
   <div className="comment">
    <code>{comment}</code>
   </div>
   <Button comment={comment} setComment={setComment} sendToRedux={props.saveComment} setList={props.setList} list={props.list} />
  </div>
 )
}

export default connect(null, actions)(CommentBox);
