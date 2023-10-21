
import { Outlet, NavLink } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <div>
        <div className='px-2 md:px-2 lg:px-2'>
          <NavBar></NavBar>
        </div>

      </div>
      <div className='px-2'>
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
