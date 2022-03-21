const PostForm = () => {
  return (
    <div>
      <label htmlFor='title'>Title</label><input id='title' type='text' />
      <label htmlFor='content'>Content</label><textarea id='content' />
      <button>Submit</button>
    </div>
  )
}

export default PostForm