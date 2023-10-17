import { useState } from 'react'
import { Outlet,NavLink } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='bg-green-500'>
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
    </>
  )
}

export default App
