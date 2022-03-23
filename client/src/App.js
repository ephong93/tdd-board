import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Main, PostForm, Post } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/post-form' element={<PostForm />} />
        <Route path='/posts/:postId' element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
