import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Posts from '../components/Posts'

const Main = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const isMounted = useRef(false)

  const fetchPosts = async () => {
    const response = await axios.get('/posts')
    if (isMounted.current) {
      setPosts(response.data)
    }
  }

  useEffect(() => {
    isMounted.current = true
    fetchPosts()
    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      <Posts posts={posts} />
      <button
        onClick={navigate('/post-form')}
      >
        Post
      </button>
    </div>
  )
}

export default Main