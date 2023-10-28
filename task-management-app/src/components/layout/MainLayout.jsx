import React from 'react'
import Navbar from '../pages/Navbar'

const MainLayout = ({children , isLoggedIn}) => {
  return (
   <>
    <Navbar isLoggedIn={isLoggedIn}/>
     <div className="mainLayout-container">
        {children}
     </div>
   </>
  )
}

export default MainLayout
