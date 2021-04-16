import './App.css';
import Authpage from './components/Authpage';
import Dashboard from './components/Dashboard';
import Newpart from './components/Newpart';
import {Route, BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Route path='/auth' component={Authpage} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/new' component={Newpart} />
    </Router>
    </div>
  );
}

export default App;
