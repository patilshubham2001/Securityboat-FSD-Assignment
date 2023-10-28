import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { Link } from 'react-router-dom'

const AddTask = () => {

  const [taskData, setTaskData] = useState({
    title: '',
    description: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });

  }

  const handleTask = () => {
    fetch('http://localhost:3001/user/task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData)
    }).then(response => response.json())
      .then((data) => {
        console.log(data);
      }).catch((err) => {
        console.error(err);
      })
  }
  return (
    <div>
      <MainLayout>
        <div className="task-container">
          <h2>Add Task</h2>
          <div className="form">
            <form>
              <label htmlFor="name">Title </label>
              <input type="text" name="title" value={taskData.title} placeholder="Enter email" onChange={handleInputChange} required />
              <label htmlFor="description">Description </label>
              <textarea type="text" name="description" value={taskData.description} className='text-area' placeholder="Enter password" onChange={handleInputChange} required />
              <Link to={'/task'}><button className='btn-login' onClick={handleTask}>Add Task</button></Link>
            </form>
          </div>
          <Link to="/task" className='backTotask'>Back to Tasks</Link>
        </div>
      </MainLayout>
    </div>
  )
}

export default AddTask
