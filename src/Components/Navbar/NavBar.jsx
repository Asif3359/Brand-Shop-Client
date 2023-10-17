

import { NavLink } from "react-router-dom"

const NavBar = () => {
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
        <li><NavLink to="/profile" className='text-white no-underline'>profile</NavLink></li>
        <li><NavLink to="/login" className='text-white no-underline'>login</NavLink></li>
        <li><NavLink to="/register" className='text-white no-underline'>register</NavLink></li>
        <li><NavLink to="/logout" className='text-white no-underline'>logout</NavLink></li>
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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-20 top-8  p-2 shadow bg-green-400 rounded-box ">
                            {links1}
                        </ul>
                    </div>
                    <div className="hidden md:flex justify-end items-start">
                        <ul className="menu flex menu-horizontal px-1">
                            {links1}
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default NavBar;