import { useEffect, useState } from 'react'

const Post = () => {
  const [post, setPost] = useState()

  useEffect(() => {
    setPost({
      title: 'Sample Title',
      author: 'Sample Author',
      content: 'Sample Content'
    })
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