import { useEffect, useCallback, useState } from 'react'
import axios from 'axios'
import CommentForm from '../components/CommentForm'

const Post = ({ id }) => {
  const [post, setPost] = useState()

  const fetchPost = async (id) => {
    const response = await axios.get(`/posts/${id}`)
    setPost(response.data)
  }

  const createComment = async (comment) => {
    const response = await axios.post(`/posts/${id}/comments`, {
      ...comment,
      post_id: id
    })
    setPost(response.data)
  }

  useEffect(() => {
    fetchPost(id)
  }, [id])

  return (
    <div>
      { post ? 
        <>
          <div>{post.title}</div>
          <div>{post.author}</div>
          <div>{post.content}</div>
          <h1>Comments</h1>
          <CommentForm onSubmit={createComment} />
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