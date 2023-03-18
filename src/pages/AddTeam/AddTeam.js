import React, { useContext } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const AddTeam = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, setLoaddata, teams } = useContext(AuthContext)


    const createTeam = event => {
        event.preventDefault()
        if (user) {
            const teamName = event.target.name.value;
            const duration = event.target.duration.value;
            const budget = event.target.budget.value;
            const teamId = event.target.teamid.value;
            const { displayName, email, photoURL } = user;
            const data = { teamName, duration, displayName, email, photoURL, budget, teamId };
            fetch('https://team-work-sigma.vercel.app/create-team',
                // fetch('http://localhost:5000/create-team', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setLoaddata(true);
                    navigate('/team-management')
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            // console.log(teamName, duration);
        }
        else {
            console.log('Please Login')
        }

        event.target.reset();
    }
    const jointeam = event => {
        event.preventDefault()
        if (user) {
            const teamId = event.target.teamId.value;
            const teamLeaderMail = event.target.adminEmail.value;
            const position = event.target.position.value;
            const { displayName, email, photoURL } = user;
            const data = {  displayName, email, photoURL, teamLeaderMail, position, teamId };
            fetch('https://team-work-sigma.vercel.app/team-member',
                // fetch('http://localhost:5000/create-team', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setLoaddata(true);
                    navigate('/team-management')
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            // console.log(teamName, duration);
        }
        else {
            console.log('Please Login')
        }

        event.target.reset();
    }
    return (
        <div className="flex-grow overflow-hidden h-full flex flex-col">
            <div className="flex-grow flex overflow-x-hidden">
                <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
                    <div className="text-2xl text-gray-400 font-bold tracking-wider">TEAMS</div>
                    <div className="space-y-4 mt-3">
                        <Link to='/add-team' className="bg-white p-3 w-full flex flex-row items-center justify-between rounded-md dark:bg-gray-800 shadow">
                            Add Team <AiOutlinePlus></AiOutlinePlus>
                        </Link>
                        {
                            teams.map(team => {
                                return <button key={team._id} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                    <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                        <img src={team.photoURL} className="w-7 h-7 mr-2 rounded-full" alt="profile" />
                                        {team.teamName}
                                    </div>
                                    <div className="flex items-center w-full">
                                        <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">Team ID: {team.teamId}</div>
                                        <div className="ml-auto text-xs text-gray-500">${team.budget}</div>
                                    </div>
                                </button>
                            })
                        }
                    </div>
                </div>
                <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto h-screen flex items-center justify-center">
                    <div className='max-w-4xl grow mx-auto flex flex-col'>
                        <h2 className='text-2xl font-semibold mb-5'>Create A Team</h2>
                        <form onSubmit={createTeam} className='flex items-center justify-center w-full gap-2'>
                            <div className='grow flex gap-2'>
                                <input name='name' type="text" placeholder="Team Name" className="input bg-[#1f2937] w-full" required />
                                <input name='duration' type="text" placeholder="Team Duration" className="input bg-[#1f2937] w-full" required />
                                <input name='budget' type="text" placeholder="Budget" className="input bg-[#1f2937] w-full" required />
                                <input name='teamid' type="text" placeholder="Team ID" className="input bg-[#1f2937] w-full" required />
                            </div>
                            <div className='w-32'>
                                <button type='submit' className="bg-white p-3 w-full text-center btn  rounded-lg dark:bg-gray-800 shadow">
                                    Create
                                </button>
                            </div>
                        </form>
                        <div className="divider text-gray-600 my-8">or</div>
                        <h2 className='text-2xl font-semibold mb-5'>Join A Team</h2>
                        <form onSubmit={jointeam} className='flex items-center justify-center w-full gap-2'>
                            <div className='grow flex gap-2'>
                                <input name='teamId' type="text" placeholder="Team Id - Ex: 938237839" className="input bg-[#1f2937] w-full" required />
                                <input name='adminEmail' type="text" placeholder="Admin Email - Ex: david@gmail.com" className="input bg-[#1f2937] w-full" required />
                                <input name='position' type="text" placeholder="Position - Ex: Web Developer" className="input bg-[#1f2937] w-full" required />
                            </div>
                            <div className='w-32'>
                                <button type='submit' className="bg-white p-3 w-full text-center btn  rounded-lg dark:bg-gray-800 shadow">
                                    Join Now
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddTeam;