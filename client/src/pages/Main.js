import { useHistory } from 'react-router-dom'

const Main = () => {
  const history = useHistory()

  return (
    <div>
      <h1>Posts</h1>
      <button
        onClick={history.push('/post-form')}
      >
        Post
      </button>
    </div>
  )
}

export default Main