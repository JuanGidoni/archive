const Button = ({ comment, setComment, list, setList }) => {
   const addClearComment = (e) => {
      e.preventDefault();
      setList([...list, { comment: comment }]);
      setComment('');

      localStorage.setItem('list', JSON.stringify([...list, { comment: comment }]))
   }
   const clearList = () => {
      localStorage.removeItem('list');
      setList([]);
   }
   return (
      <form className="buttons" onSubmit={(e) => addClearComment(e)}>
         <button type="submit">
            Add Comment
         </button>
         <button type="button" onClick={() => clearList()} id="__test_clearlist">
            Clear List
         </button>
      </form>
   )
}

export default Button
