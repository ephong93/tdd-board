import { useEffect, useState } from 'react'
import axios from 'axios'

const Post = ({ id }) => {
  const [post, setPost] = useState()
  
  const fetchPost = async () => {
    const response = await axios.get(`/posts/${id}`)
    setPost(response.data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div>
      { post ? 
        <>
          <div>{post.title}</div>
          <div>{post.author}</div>
          <div>{post.content}</div>
        </>
        :
        <div>No Data</div>
      }
    </div>
  )
}

export default Post