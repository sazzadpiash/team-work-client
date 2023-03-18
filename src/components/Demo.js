import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Demo = () => {
    return (
        <div>
            <div className="flex-grow overflow-hidden h-full flex flex-col">
                <div className="flex-grow flex overflow-x-hidden">
                    <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
                        <div className="text-2xl text-gray-400 font-bold tracking-wider">TEAMS</div>
                        <div className="space-y-4 mt-3">
                            <Link to='/add-team' className="bg-white p-3 w-full flex flex-row items-center justify-between rounded-md dark:bg-gray-800 shadow">
                                Add Team <AiOutlinePlus></AiOutlinePlus>
                            </Link>
                            <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
                                    Google Team
                                </div>
                                <div className="flex items-center w-full">
                                    <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">Devid Costa</div>
                                    <div className="ml-auto text-xs text-gray-500">$1,902.00</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
                        <form className='max-w-3xl mx-auto flex gap-2 items-center justify-center h-screen'>
                            <div className='grow flex gap-2'>
                                <input name='name' type="text" placeholder="Team Name" className="input bg-[#1f2937] w-full" required />
                                <input name='duration' type="text" placeholder="Team Duration" className="input bg-[#1f2937] w-full" required />
                            </div>
                            <div className='w-32'>
                                <button type='submit' className="bg-white p-3 w-full text-center btn  rounded-lg dark:bg-gray-800 shadow">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demo;