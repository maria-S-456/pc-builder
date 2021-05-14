import './App.css';
import Authpage from './components/Authpage';
import Dashboard from './components/Dashboard';
import Newpart from './components/Newpart';
import Main from './components/Main';
import Header from './components/Header';
import Registeruser from './components/Registeruser'
import {Route, BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
    <Header />
    
    <Router>
     
      <Route path='/auth' component={Authpage} />
      <Route path='/main' component={Main} />
      <Route path='/new' component={Newpart} />

    </Router>
    </div>
  );
}

export default App;
