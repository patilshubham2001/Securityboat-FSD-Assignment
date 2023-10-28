import React, { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { useNavigate } from 'react-router-dom'
import '../styling/Task.css'


const Task = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('jwt-token')
    if (token === null) {
      navigate('/login');
    }
  })

  const [data, setData] = useState([]);

  const fetchTask = () => {

    fetch('http://localhost:3001/user/fetch-task', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
      .then((response) => {
        console.log(response.data);
        setData(response.data.task);
      }).catch((err) => {
        alert(`Error ${err}`);
      })

  }

  useEffect(() => {
    fetchTask()
  }, [])

  const handleUpdate = (taskId) =>{
    navigate(`/update-task/${taskId}`);
  }

  const handleDelete = (taskId) =>{
    if (window.confirm('Are you sure you want to delete this task?')) {
      fetch(`http://localhost:3001/user/task-del/${taskId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          if (response.status === 200) {
            // Update the UI by filtering out the deleted task
            setData(data.filter((task) => task._id !== taskId));
          }
        })
        .catch((err) => {
          alert(`Error ${err}`);
        });
    }
  }


  return (
    <div>
      <MainLayout>
        <h2 style={{ margin: '10px' }}>WelCome User</h2>
        {
          data.length > 0 &&
          data.map((item) => {
            return (
              <div className="card-container" key={item._id}>
                <div>
                  <h3 class="task-title">{item.title}</h3>
                  <p class="task-description">{item.description}</p>
                </div>
                <div style={{ display: 'flex' }}>
                  <button className='btn-mod edit' onClick={() => handleUpdate(item._id)}><i className="fa-solid fa-pen-to-square"></i></button>
                  <button className='btn-mod delete' onClick={() => handleDelete(item._id)}><i className="fa-solid fa-trash"></i></button>
                </div>
              </div>
            )
          })
        }
      </MainLayout>
    </div>
  )
}

export default Task
