import { useState } from 'react'

const PostForm = ({
  onSubmit
}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  
  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div>
      <label htmlFor='title'>
        Title
      </label>
      <input
        id='title'
        type='text'
        onChange={onChangeTitle}
      />
      <label htmlFor='content'>Content</label><textarea id='content' />
      <button
        onClick={() => onSubmit({ title, content })}
      >
        Submit
      </button>
    </div>
  )
}

export default PostForm