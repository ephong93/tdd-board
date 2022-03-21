import { useHistory } from 'react-router-dom'

const Main = () => {
  const history = useHistory()
  return (
    <div>
      <button
        onClick={history.push('/post-form')}
      >
        Post
      </button>
    </div>
  )
}

export default Main