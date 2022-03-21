import { useEffect, useState } from 'react'
import axios from 'axios'

const Post = () => {
  const [post, setPost] = useState()
  
  const fetchPost = async () => {
    const response = await axios.get('/posts/1')
    setPost(response.data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div>
      <div>{post?.title}</div>
      <div>{post?.author}</div>
      <div>{post?.content}</div>
    </div>
  )
}

export default Post