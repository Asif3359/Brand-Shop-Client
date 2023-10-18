
import { Outlet, NavLink } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className=''>
      <div className='bg-green-500'>
        <NavBar></NavBar>
      </div>
      <div className=''>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
