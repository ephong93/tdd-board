import { useEffect, useState } from 'react'
import axios from 'axios'
import CommentForm from '../components/CommentForm'
import { useParams } from 'react-router'

const Post = () => {
  const [post, setPost] = useState()
  const [comments, setComments] = useState([])
  const { postId } = useParams()

  const fetchPost = async (postId) => {
    const response = await axios.get(`/api/posts/${postId}`)
    setPost(response.data.post)
  }

  const fetchComments = async (postId) => {
    const response = await axios.get(`/api/posts/${postId}/comments`)
    setComments(response.data.comments)
  }

  const createComment = async (comment) => {
    const response = await axios.post(`/api/comments`, {
      ...comment,
      post_id: postId
    })
    setComments(response.data.comments)
  }

  useEffect(() => {
    fetchPost(postId)
    fetchComments(postId)
  }, [postId])

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
              comments.map(comment => (
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