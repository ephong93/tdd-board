import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Main, PostForm } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Router exact path='/' component={Main} />
        <Router path='/post-form' component={PostForm} />
        <Router path='/posts/' component={PostForm} />

      </Switch>
    </Router>
  );
}

export default App;
