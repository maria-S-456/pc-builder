import './App.css';
import Authpage from './components/Authpage';
import Dashboard from './components/Dashboard';
import Newpart from './components/Newpart';
import Main from './components/Main';
import Header from './components/Header';
import Registeruser from './components/Registeruser'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const {data} = await axios.get('/api/users')

      setUsers(data)
    }

    fetchUsers()
  }, [])
  //console.log({users}) // yes!!
  return (
    <div className="App">
    <Header />

    <Router>
     
      <Route users={users} path='/auth' component={Authpage} />
      <Route usrs={users} path='/main' component={Main} />
      <Route usrs={users} path='/new' component={Newpart} />

    </Router>
    </div>
  );
}

export default App;
