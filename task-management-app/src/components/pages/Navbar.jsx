import React from 'react'
import '../styling/common.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ isLoggedIn }) => {

  const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem('jwt-token');
    navigate('/login');
  }

  const handleLogoClick = () =>{
      navigate('/');
      console.log("click");  
 }
  const token = localStorage.getItem('jwt-token');
  return (
    <div>
      <div className="nav-container">
        <h2 onClick={handleLogoClick}>Task Manager</h2>
        <ul>
          {isLoggedIn === false || token === null ? (
            <Link to={'/login'}><li>
              <button className='btn btn2'>Login</button>
            </li></Link>
          ) : (
            <>
              <Link to='/tasks/add'><li>
                <button className='btn btn2'>Add task </button>
              </li></Link>
              <li>
                <button className='btn btn2' onClick={handleLogout}>Logout</button>
              </li>
            </>
          )
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
