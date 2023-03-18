import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const SideNavbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="bg-white dark:bg-gray-900 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex">
            <div className="h-16 text-blue-500 flex items-center justify-center">
            </div>
            <div className="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4">
                <Link to='/' className="h-10 w-12 text-gray-500 focus:bg-gray-700 focus:text-white rounded-md flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </Link>
                <Link to='/team-management' className="h-10 w-12 text-gray-500 focus:bg-gray-700 focus:text-white rounded-md flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                </Link>
                <a href='https://joyful-faun-26f433.netlify.app/lobby.html' className="h-10 w-12 text-gray-500 focus:bg-gray-700 focus:text-white rounded-md flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        <line x1="12" y1="11" x2="12" y2="17"></line>
                        <line x1="9" y1="14" x2="15" y2="14"></line>
                    </svg>
                </a>
                {
                    user ? <Link to='/myaccount' className="h-10 w-12 text-gray-500 focus:bg-gray-700 focus:text-white rounded-md flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth="1">
                            <path fill="none" d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512
								c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186
								c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646
								c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367
								c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328
								C15.328,9.982,12.943,12.367,10,12.367z"></path>
                        </svg>
                    </Link>
                        :
                        <Link to='/login' className="h-10 w-12 text-gray-500 focus:bg-gray-700 focus:text-white rounded-md flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth="1">
                                <path fill="none" d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512
								c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186
								c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646
								c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367
								c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328
								C15.328,9.982,12.943,12.367,10,12.367z"></path>
                            </svg>
                        </Link>
                }
                
                <button onClick={logOut} className="h-10 w-12 text-gray-500 rounded-md flex items-center justify-center">
                    <svg className='h-5 feather feather-log-out' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                </button>
            </div>
        </div>
    );
};

export default SideNavbar;