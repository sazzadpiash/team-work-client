import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Team = ({ teamId }) => {
    const { user } = useContext(AuthContext);
    const [team, setTeam] = useState();
    const [teamMembers, setTeamMember] = useState();


    useEffect(() => {
        fetch(`https://team-work-sigma.vercel.app/team/${teamId}`)
            .then(res => res.json())
            .then(data => {
                setTeam(data);
            })
            .catch(error => {
                console.log(user?.email);
            })
    }, [teamId])

    useEffect(() => {
        fetch(`https://team-work-sigma.vercel.app/team-member/${teamId}`)
            .then(res => res.json())
            .then(data => {
                setTeamMember(data);
            })
            .catch(error => {
                console.log(user?.email);
            })
    }, [teamId])
    return (
        <>
            <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
                <div className="flex w-full items-center">
                    <div className="flex items-center text-3xl text-gray-900 dark:text-white">
                        <img src={team?.photoURL} className='rounded-full w-16 h-16 mr-4' alt="profile" />
                        <div className='flex flex-col gap-2 h-fit justify-between'>
                            <span className='text-2xl'>{team?.teamName}</span>
                            <span className='text-sm text-gray-500'>Team Leader: {team?.displayName}</span>
                        </div>
                    </div>
                    <div className="ml-auto sm:flex hidden items-center justify-end">
                        <div className="text-right">
                            <div className="text-xs text-gray-400 dark:text-gray-400">Project Timeline</div>
                            <div className="text-gray-900 text-lg dark:text-white">{team?.duration} Days</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-3 sm:mt-7 mt-4">
                    <Link href="#" className="px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5">Activities</Link>
                </div>
            </div>
            <div className="sm:p-7 p-4">
                <div className='grid grid-cols-3 gap-5'>
                    {
                        teamMembers ? teamMembers.map(teamMember => <div key={teamMember._id} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                            <div className='border-b mb-3 border-gray-700'>
                                <div className='flex items-center gap-2 text-xs'>
                                    100%
                                    <progress className="progress progress-primary h-1" value="100" max="100"></progress>
                                </div>
                                <div>
                                    <h4 className='text-xl font-bold mt-5'>Home Page</h4>
                                    <p className='mb-3'>Details about the work and deadline </p>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md uppercase">{teamMember.position}</div>
                                <div className="ml-auto text-xs text-gray-500">{teamMember.displayName}</div>
                            </div>
                        </div>)
                        : 
                        <p>Loading...</p>
                    }
                </div>
            </div>
        </>


    );
};

export default Team;