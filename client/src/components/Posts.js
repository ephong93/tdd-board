import { useHistory } from 'react-router-dom'

const Posts = ({ posts }) => {
  const history = useHistory()

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
              <tr
                key={post.id}
                onClick={() => history.push(`/posts/${post.id}`)}
              >
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