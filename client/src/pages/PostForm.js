import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const PostForm = () => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const history = useHistory()

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value)
  }
  
  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onSubmit = async () => {
    const response = await axios.post('/posts', {
      author,
      title,
      content
    })
    if (response.status === 200) {
      history.push('/')
    }
  }

  return (
    <div>
      <label htmlFor='author'>
        Author
      </label>
      <input
        id='author'
        type='text'
        onChange={onChangeAuthor}
        value={author}
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
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  )
}

export default PostForm