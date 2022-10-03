import './App.css';
import { userList } from './components/userList'
import { users } from './components/userList'
import { Users } from './components/Users'

function App() {

  return (
    <div className="App">
      <Users users={users} />
    </div>
  );
}

export default App;
