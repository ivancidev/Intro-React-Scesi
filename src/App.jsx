import './App.css';
import Calculator from './components/Calculator/Calculator';
import { Counter } from './components/Counter';
import Login from './pages/Login/Login';
import Tasks from './pages/Tasks/Tasks';
import UserAxios from './pages/UserProfile/UserAxios';
import Users from './pages/UserProfile/Users';

function App() {
  return (
    // <Counter />
    // <Tasks />
    // <Users />
    // <Login />
    // <Calculator />
    <UserAxios />  
  )
}

export default App;
