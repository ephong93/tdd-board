const PostForm = () => {
  return (
    <div>
      <label htmlFor='title'>Title</label><input id='title' type='text' />
      <label htmlFor='content'>Content</label><textarea id='content' />
    </div>
  )
}

export default PostForm