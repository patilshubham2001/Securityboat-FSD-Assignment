import React from 'react'
import MainLayout from '../layout/MainLayout'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/task');
    }
    
    return (
        <div>
            <MainLayout>
                <div className="home-container">
                    <h1>Welcome to Task Manager App</h1>
                    <span onClick={handleClick} style={{cursor:'pointer'}}>Join now to manage your tasks</span>
                    <span><i className="fa-solid fa-arrow-right"></i></span>
                </div>
            </MainLayout>
        </div>
    )
}

export default Home
