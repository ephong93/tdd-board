import { useState } from 'react'

const PostForm = ({
  onSubmit
}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <div>
      <label htmlFor='title'>Title</label><input id='title' type='text' />
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