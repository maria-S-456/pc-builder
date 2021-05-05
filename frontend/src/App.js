import './App.css';
import Authpage from './components/Authpage';
import Dashboard from './components/Dashboard';
import Newpart from './components/Newpart';
import Main from './components/Main';
import {Route, BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
    <h1>PC Builder</h1>
    <Router>
      <Route path='/auth' component={Authpage} />
      <Route path='/main' component={Main} />
      <Route path='/new' component={Newpart} />
    </Router>
    </div>
  );
}

export default App;
