const Posts = ({ posts }) => {
  return (
    <div>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>
              <span>
                {post.title}
              </span>
              <span>
                {post.author}
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Posts