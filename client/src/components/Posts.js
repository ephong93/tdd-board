const Posts = ({ posts }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {
            posts?.map(post => (
              <tr key={post.id}>
                <td>
                  {post.title}
                </td>
                <td>
                  {post.author}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Posts