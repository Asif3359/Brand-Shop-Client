import React from 'react';
import {Link} from "react-router-dom"

const Register = () => {
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-2 py-4 mx-auto my-5 ">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Register
                            </h1>
                            <form className="space-y-2 md:space-y-3 mt-5 mb-3" action="#">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="full name" required />
                                </div>
                                <div>
                                    <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your photo url</label>
                                    <input type="text" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
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
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300"> Accept Our Terms And Condition</label>
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" value="Register" className="w-full btn btn-sm " />
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account yet? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">login</Link>
                                </p>
                            </form>
                            <div className='text-center flex flex-col space-y-2'>
                                <h1 className=''>Login WIth</h1>
                                <div className='border'></div>
                                <div className='flex justify-start item-center'>
                                    <button  className='btn btn-sm '>Google</button>
                                </div>
                            </div>
                            {
                                <div className='py-1'>
                                    <p className='text-green-500'></p>
                                </div>
                            }
                            {
                                <div>
                                    <p className='text-red-500'></p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;