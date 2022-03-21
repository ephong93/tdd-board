import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Main, PostForm, Post } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Router exact path='/' component={Main} />
        <Router path='/post-form' component={PostForm} />
        <Router path='/posts/:postId' component={Post} />
      </Switch>
    </Router>
  );
}

export default App;
