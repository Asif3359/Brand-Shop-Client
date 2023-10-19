
import { Outlet, NavLink } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className=''>
      <div className='bg-[#b64930]'>
        <div className="hero-overlay bg-opacity-60"></div>
        <NavBar></NavBar>

      </div>
      <div className=''>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
