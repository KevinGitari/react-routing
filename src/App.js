import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import Form from './components/Form';
import User from './components/User';
import { useEffect,useState } from 'react';





function App() {
  const [users, setUsers] = useState([])

    useEffect(() =>{
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(users => setUsers(users))
        .catch(error => console.log(error))
    },[])

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home users={users} />}/>
        <Route path='/about' element={<About />} />
        <Route path='/users/:id' element=  {<Form users={users} setUsers={setUsers}/>} />
      </Routes>
    </div>
  );
}

export default App;
