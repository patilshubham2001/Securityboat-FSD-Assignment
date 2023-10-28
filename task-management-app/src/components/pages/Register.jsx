import React, {useState} from 'react'
import MainLayout from '../layout/MainLayout'
import { Link } from 'react-router-dom'

const Register = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
}

const handleRegister = (e) => {
    e.preventDefault(); // Prevent the default form submission

    fetch('http://localhost:3001/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData);
    })
    .catch((err) => {
        console.log(`Error ${err}`);
    });
}
  return (
    <div>
      <MainLayout>
      <div className="main-container">
      <h2>Register</h2>
        <form>
          <label htmlFor="name">UserName</label>
          <input type="text" name="name" value={data.name} placeholder="Enter name" onChange={handleInputChange} required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={data.email} placeholder="Enter email" onChange={handleInputChange} required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={data.password} placeholder="Enter password" onChange={handleInputChange} required />
          <button className="btn-register" onClick={handleRegister}>Register</button>
          <Link to={'/login'}><span className="span">click here to login</span></Link>
        </form>
      </div>
      </MainLayout>
    </div>
  )
}

export default Register
