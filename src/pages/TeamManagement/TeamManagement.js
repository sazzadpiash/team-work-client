import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai'
import { AuthContext } from '../../context/AuthContext';
import Team from '../../components/TeamInner/Team';

const TeamManagement = () => {
    const params = useParams();
    const { teams, user } = useContext(AuthContext);
    return (
        <div className="flex-grow overflow-hidden h-full flex flex-col">
            <div className="flex-grow flex overflow-x-hidden">
                <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
                    <div className="text-2xl text-gray-400 font-bold tracking-wider">TEAMS</div>
                    <div className="space-y-4 mt-3">
                        <Link to='/add-team' className="bg-white p-3 w-full flex flex-row items-center justify-between rounded-md dark:bg-gray-800 shadow">
                            Add/Join Team <AiOutlinePlus></AiOutlinePlus>
                        </Link>

                        {
                            teams.map(team => {
                                return <Link to={`/team-management/${team.teamId}`} key={team._id} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                    <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                        <img src={team.photoURL} className="w-7 h-7 mr-2 rounded-full" alt="profile" />
                                        {team.teamName}
                                    </div>
                                    <div className="flex items-center w-full">
                                        <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">Team ID: {team.teamId}</div>
                                        <div className="ml-auto text-xs text-gray-500">${team.budget}</div>
                                    </div>
                                </Link>
                            })
                        }
                    </div>
                </div>
                <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
                    <div className="h-16 lg:flex w-full border-b border-gray-800 hidden px-10">
                        {/* <div className="flex h-full text-gray-400">
                            <Link className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Company</Link>
                            <Link className="cursor-pointer h-full border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white inline-flex mr-8 items-center">Users</Link>
                            <Link className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Expense Centres</Link>
                            <Link className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center">Currency Exchange</Link>
                        </div> */}
                        <div className="ml-auto flex items-center space-x-7">
                            {/* <button className="h-8 px-3 rounded-md shadow text-white bg-blue-500">Deposit</button> */}

                            <button className="flex items-center">
                                <span className="relative flex-shrink-0">
                                    <img className="w-7 h-7 rounded-full" src={user?.photoURL} alt="profile" />
                                    <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"></span>
                                </span>
                                <span className="ml-2">{user?.displayName}</span>
                                {/* <svg viewBox="0 0 24 24" className="w-4 ml-1 flex-shrink-0" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg> */}
                            </button>
                        </div>
                    </div>
                    {
                        params.id ? <Team teamId={params.id}></Team> : <div className='p-10'>
                            <h1 className='text-4xl mb-5 font-semibold'>All Teams</h1>
                            <div className='grid grid-cols-3 gap-5'>
                            {
                            teams.map(team => {
                                return <Link to={`/team-management/${team.teamId}`} key={team._id} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                    <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                        <img src={team.photoURL} className="w-7 h-7 mr-2 rounded-full" alt="profile" />
                                        {team.teamName}
                                    </div>
                                    <div className="flex items-center w-full">
                                        <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">Team ID: {team.teamId}</div>
                                        <div className="ml-auto text-xs text-gray-500">${team.budget}</div>
                                    </div>
                                </Link>
                            })
                        }
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default TeamManagement;