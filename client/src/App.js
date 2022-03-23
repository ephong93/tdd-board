import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { Main, PostForm, Post } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Router exact path='/' component={Main} />
        <Router path='/post-form' component={PostForm} />
        <Router path='/posts/:postId' component={Post} />
      </Routes>
    </Router>
  );
}

export default App;
