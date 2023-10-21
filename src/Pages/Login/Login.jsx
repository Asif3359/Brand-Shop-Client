import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [loginSuccessMessage, setLoginSuccessMessage] = useState(null);
    const [loginErrorMessage, setLoginErrorMessage] = useState(null);
    const { socialLogIn, logInUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const socialLoginWith = (googleLogIn) => {

        setLoginSuccessMessage("");
        setLoginErrorMessage("");

        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                const ourUsr = {
                    email: user.email,
                    lastLogAt: user.metadata?.lastSignInTime,
                    displayName: user.displayName,
                }
                fetch('https://brand-server-asif-ahammeds-projects.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(ourUsr)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        navigate(location?.state ? location.state : "/");
                        console.log(data.acknowledged);
                    })
                setLoginSuccessMessage("User Successfully logged in ");
                navigate(location?.state ? location.state : "/");
                toast.success('User Successfully logged in', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            })
            .catch(error => {
                console.log(error.message);
                setLoginErrorMessage(error.message)
                toast.error('User could not login successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }
    const handleLogIn = (e) => {
        e.preventDefault();
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        console.log(Email, Password);

        setLoginSuccessMessage("");
        setLoginErrorMessage("");

        logInUser(Email, Password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const ourUsr = {
                    email: user.email,
                    lastLogAt: user.metadata?.lastSignInTime,
                    displayName: user.displayName,
                }
                // console.log(user);
                fetch('https://brand-server-asif-ahammeds-projects.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(ourUsr)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        navigate("/");
                        console.log(data.acknowledged);
                    })
                setLoginSuccessMessage("User Logged in Successfully");
                navigate(location?.state ? location.state : "/");
                toast.success('User Successfully logged in', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            })
            .catch(error => {
                const errorCoe = error.code;
                if (errorCoe === "auth/invalid-login-credentials") {
                    setLoginErrorMessage("Invalid email or password");
                    toast.error('Invalid email ro password!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                else {
                    setLoginErrorMessage(errorCoe);
                    toast.error('Something went error !', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
    }
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-2 py-4 mx-auto my-5 ">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form onSubmit={handleLogIn} className="space-y-4 md:space-y-6 mt-5 mb-3" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="please select this" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" value="log in" className="w-full btn btn-sm " />
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</Link>
                                </p>
                            </form>
                            <div className='text-center flex flex-col space-y-2'>
                                <h1 className=''>Login With</h1>
                                <div className='border'></div>
                                <div className='flex justify-start item-center'>
                                    <button onClick={() => socialLoginWith(socialLogIn)} className='btn btn-sm '>Google</button>

                                </div>
                            </div>
                            {
                                loginSuccessMessage
                                &&
                                <div className='py-1'>
                                    <p className='text-green-500'>{loginSuccessMessage}</p>
                                </div>
                            }
                            {
                                loginErrorMessage
                                &&
                                <div>
                                    <p className='text-red-500'>{loginErrorMessage}</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;