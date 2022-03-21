import { useEffect, useCallback, useState } from 'react'
import axios from 'axios'

const Post = ({ id }) => {
  const [post, setPost] = useState()

  const fetchPost = useCallback(async (id) => {
    const response = await axios.get(`/posts/${id}`)
    setPost(response.data)
  }, [])

  useEffect(() => {
    fetchPost(id)
  }, [id, fetchPost])

  return (
    <div>
      { post ? 
        <>
          <div>{post.title}</div>
          <div>{post.author}</div>
          <div>{post.content}</div>
          <h1>Comments</h1>
          <ul>
            {
              post.comments.map(comment => (
                <li key={comment.id}>
                  <div>
                    {comment.author}
                  </div>
                  <div>
                    {comment.content}
                  </div>
                </li>
              ))
            }
          </ul>
        </>
        :
        <div>No Data</div>
      }
    </div>
  )
}

export default Post