import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const userLogOut = (loginOut) => {
        swal({
            title: "Are you sure to log out",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("you are logged out successfully !", {
                        icon: "success",
                    });
                    loginOut();
                } else {
                    swal("You are still login!!");
                }
            });
    }
    const links1 = <>
        <li className="text-bold"><NavLink to="/" className=' no-underline'>Home</NavLink></li>
        <li className="text-bold"><NavLink to="/myCart" className=' no-underline'>My Cart</NavLink></li>
        <li><NavLink to="/addProduct" className='  no-underline '>Add Product</NavLink></li>
        <li><NavLink to="/profile" className=' no-underline p-1 rounded-full '>
            {
                user?.photoURL &&
                <>
                    <img className="rounded-full w-10 " src={user?.photoURL} alt="" />
                </>
            }
            {
                !user?.photoURL &&
                <>
                    <span className="rounded-full  text-gray-800 text-4xl "><FaUserCircle></FaUserCircle></span>
                </>
            }
        </NavLink></li>
        {
            !user &&
            <>
                <li><NavLink to="/login" className=' no-underline'>login</NavLink></li>
            </>
        }
        {/* <li><NavLink to="/register" className=' no-underline'>register</NavLink></li> */}
        {
            user &&
            <>
                <li><button className=' no-underline' onClick={() => userLogOut(logOut)}>logout</button></li>
            </>
        }
    </>
    return (
        <div className=' container mx-auto py-3'>
            <div className=" flex justify-between items-center ">
                <div className="flex justify-between items-center w-full lg:w-fit flex-1">
                    <div className="flex-1 justify-start ">
                        <NavLink to="/" className=' font-bold normal-case text-xl  no-underline' >daisyUI</NavLink>
                    </div>
                    <div className="dropdown flex flex-1 justify-end  md:hidden">
                        <label tabIndex={0} className="btn btn-sm btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-20 top-8  p-2 bg-gray-600  rounded-box space-y-1">
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