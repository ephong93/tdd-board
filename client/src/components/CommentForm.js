import { useState } from 'react'

const CommentForm = () => {
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
    </div>
  )
}

export default CommentForm