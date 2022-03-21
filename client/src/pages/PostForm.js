import { useState } from 'react'

const PostForm = ({
  onSubmit
}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  
  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  return (
    <div>
      <label htmlFor='author'>
        Author
      </label>
      <input
        id='author'
        type='text'
      />
      <label htmlFor='title'>
        Title
      </label>
      <input
        id='title'
        type='text'
        onChange={onChangeTitle}
        value={title}
      />
      <label htmlFor='content'>
        Content
      </label>
      <textarea
        id='content'
        onChange={onChangeContent}
        value={content}
      />
      <button
        onClick={() => onSubmit({ title, content })}
      >
        Submit
      </button>
    </div>
  )
}

export default PostForm