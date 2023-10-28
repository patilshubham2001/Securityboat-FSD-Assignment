import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Task from './components/pages/Task';
import AddTask from './components/pages/AddTask';
import UpdateTask from './components/pages/UpdataTask';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/sign-up' element={<Register />} />
          <Route exact path='/task' element={<Task/>} />
          <Route exact path='/tasks/add' element={<AddTask/>} />
          <Route exact path='/update-task/:id' element={<UpdateTask/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
