const Text = ({ setComment, comment }) => {
 return (
  <textarea onChange={(e) => setComment(e.target.value)} value={comment} />
 )
}

export default Text
