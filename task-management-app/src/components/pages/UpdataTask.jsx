import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

const UpdateTask = () => {
  const { id } = useParams();
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    // Fetch task details by ID and populate the form
    fetch(`http://localhost:3001/user/fetch-task/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((response) => {
        setTaskData(response.data.task);
      })
      .catch((err) => {
        console.error(`Error: ${err}`);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleUpdateTask = () => {
    // Send the updated task data to the server
    fetch(`http://localhost:3001/user/task/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData),
    })
      .then((response) => {
        if (response.status === 200) {
          // Task updated successfully, you can redirect or handle as needed
        } else {
          console.error('Update failed');
        }
      })
      .catch((err) => {
        console.error(`Error: ${err}`);
      });
  };

  return (
    <div>
      <MainLayout>
        <div className="task-container">
          <h2>Update Task</h2>
          <div className="form">
            <form>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={taskData.title}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                value={taskData.description}
                className="text-area"
                onChange={handleInputChange}
                required
              />
              <Link to={'/task'}><button className="btn-login" onClick={handleUpdateTask}>
                Update Task
              </button></Link>
            </form>
          </div>
          <Link to="/task">Back to Tasks</Link>
        </div>
      </MainLayout>
    </div>
  );
};

export default UpdateTask;
