import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
    const { user, teams } = useContext(AuthContext);
    return (
        <div className="flex-grow overflow-hidden h-full flex justify-between items-center px-20">
            <div className='w-1/3'>
                <h1 className='text-5xl font-bold'>Team Work</h1>
                <h1 className='text-lg mt-3'>Premium Video Meeting and Team Manager</h1>
                <p className='mt-4'>We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.</p>
                <a href='https://joyful-faun-26f433.netlify.app/lobby.html' className='btn btn-primary mt-5'>Join a meeting now</a>
            </div>
            <div className='w-2/3'>
                <img className='w-full' src="https://res.cloudinary.com/dteeny3pa/image/upload/v1678955880/4380_lcwubz.svg" alt="" />
            </div>
        </div>
    );
};

export default Home;