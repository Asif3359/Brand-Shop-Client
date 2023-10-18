import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const links1 = <>
        <li className="text-bold"><NavLink to="/" className='text-white no-underline'>Home</NavLink></li>
        <li tabIndex={0}>
            <details>
                <summary>Services</summary>
                <ul className="p-2 grid grid-cols-1 gap-1 right-2 w-full md:w-52 z-20">
                    <li><NavLink className='text-white no-underline'>Service 1</NavLink></li>
                    <li><NavLink className='text-white no-underline'>Service 1</NavLink></li>
                </ul>
            </details>
        </li>
        <li><NavLink to="/addProduct" className='text-white  no-underline '>Add Product</NavLink></li>
        <li><NavLink to="/profile" className=' no-underline p-1 rounded-full '>
            {
                user &&
                <>
                    <img className="rounded-full w-10 " src={user?.photoURL} alt="" />
                </>
            }
            {
                !user &&
                <>
                    <span className="rounded-full  text-gray-800 text-4xl "><FaUserCircle></FaUserCircle></span>
                </>
            }
        </NavLink></li>
        {
            !user &&
            <>
                <li><NavLink to="/login" className='text-white no-underline'>login</NavLink></li>
            </>
        }
        {/* <li><NavLink to="/register" className='text-white no-underline'>register</NavLink></li> */}
        {
            user &&
            <>
                <li><button className='text-white no-underline' onClick={logOut}>logout</button></li>
            </>
        }
    </>
    return (
        <div className='text-white container mx-auto'>
            <div className=" flex justify-between items-center ">
                <div className="flex justify-between items-center w-full lg:w-fit flex-1">
                    <div className="flex-1 justify-start ">
                        <NavLink to="/" className=' font-bold normal-case text-xl text-white no-underline' >daisyUI</NavLink>
                    </div>
                    <div className="dropdown flex flex-1 justify-end  md:hidden">
                        <label tabIndex={0} className="btn btn-sm btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-20 top-8  p-2 shadow bg-green-400 rounded-box space-y-1">
                            {links1}
                        </ul>
                    </div>
                    <div className="hidden md:flex justify-end items-start">
                        <ul className="menu flex menu-horizontal px-1 items-center mb-0 gap-1">
                            {links1}
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default NavBar;