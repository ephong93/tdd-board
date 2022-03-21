import { useState } from 'react'

const CommentForm = ({
  postId,
  onSubmit
}) => {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value)
  }

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  return (
    <div>
      <label htmlFor='author'>Author</label>
      <input
        id='author'
        onChange={onChangeAuthor}
        value={author}
      />
      <label htmlFor='content'>Content</label>
      <input
        id='content'
        onChange={onChangeContent}
        value={content}
      />
      <button
        onClick={() => 
          onSubmit({
            postId,
            author,
            content
          }
        )}
      >
        Submit
      </button>
    </div>
  )
}

export default CommentForm