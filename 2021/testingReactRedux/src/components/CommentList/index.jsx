const CommentList = ({list}) => {
 return (
  <div className="commentList">
   <h2>Comment List</h2>
   <div className="list">
    {list && list.length > 0 ? list.map(
     (v,i) => <p key={i}>{v.comment}</p>
    ): 'Comment List is empty...'}
   </div>
  </div>
 )
}

export default CommentList
