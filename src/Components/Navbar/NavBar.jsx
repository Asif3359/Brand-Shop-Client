import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
    const [brands , setBrands]=useState([]);
    const [theme, setThem] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light");
    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);

        fetch("/Brands.json")
        .then(res=>res.json())
        .then(data =>setBrands(data))
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setThem("dark");
        } else {
            setThem("light")
        }
    }

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
        <ul className=" relative  rounded-box">
            <li>
                <details >
                    <summary>Brands</summary>
                    <ul className=" bg-base-100 rounded-lg m-0 p-2 w-40 lg:absolute right-0 md:top-10 z-50 ">
                        <li className="wr-3">
                            {
                                brands.map( brand => <NavLink to={`/brands/${brand.id}`} key={brand.id}>{brand.brandName}</NavLink>)
                            }
                        </li>
                    </ul>
                </details>
            </li>
        </ul>
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
                    <span className="rounded-full  text-4xl "><FaUserCircle></FaUserCircle></span>
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
                        <NavLink to="/" className=' font-bold normal-case text-xl  no-underline' >
                            <div className="flex items-center gap-1">
                                <img src="/AA3.jpeg " className=" w-10 h-10  rounded-full" alt="" />
                                <h2 className="text-bold text-4xl">AA<sub>3</sub></h2>
                            </div>
                        </NavLink>
                    </div>
                    <div className="dropdown flex flex-1 justify-end  md:hidden">
                        <label tabIndex={0} className="btn btn-sm btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-20 top-8 -right-8  p-2 bg-base-100  rounded-box space-y-1">
                            {links1}
                        </ul>
                    </div>
                    <div className="hidden md:flex justify-end items-start">
                        <ul className="menu flex menu-horizontal px-1 items-center mb-0 gap-1">
                            {links1}
                        </ul>
                    </div>
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onChange={handleToggle} type="checkbox"
                            checked={theme === "light" ? false : true}
                        />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>

                </div>

            </div>

        </div>
    );
};

export default NavBar;