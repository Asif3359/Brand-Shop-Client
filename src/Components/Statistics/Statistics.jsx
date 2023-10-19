import React from 'react';

const Statistics = () => {
    return (
        <div>
            <div className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                        <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                        <dd className="text-gray-500 dark:text-gray-400">Public repositories</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                        <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                        <dd className="text-gray-500 dark:text-gray-400">Contributors</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                        <dd className="text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
                        <dd className="text-gray-500 dark:text-gray-400">Organizations</dd>
                    </div>
                </dl>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-10  px-2 '>

                <div className='flex-1 space-y-3'>
                    <h1 className='text-center text-3xl font-bold mb-5'>Clients question</h1>
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                What extra services do you offer?
                            </div>
                            <div className="collapse-content">
                                <p>Our event management company offers a comprehensive range of services to ensure the success of your corporate events</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                What is your pricing structure?
                            </div>
                            <div className="collapse-content">
                                <p>Our pricing structure is flexible and depends on several factors, including the type of event, its complexity, the scope of services required, and your specific needs and preferences. We understand that each event is unique, and our pricing reflects that individuality.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Can you provide references or contact information for past clients?
                            </div>
                            <div className="collapse-content">
                                <p>However, we'd be more than happy to share references or connect you with some of our satisfied clients who have given us permission to do so. These references can provide insights into their experiences working with our company and the quality of our services</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 ' >
                    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                        <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>
                        <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                            <li className="flex space-x-2 items-center">
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="leading-tight">Dynamic reports and dashboards</span>
                            </li>
                            <li className="flex space-x-2 items-center">
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="leading-tight">Templates for everyone</span>
                            </li>
                            <li className="flex space-x-2 items-center">
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="leading-tight">Development workflow</span>
                            </li>
                            <li className="flex space-x-2 items-center">
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="leading-tight">Limitless business automation</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Statistics;