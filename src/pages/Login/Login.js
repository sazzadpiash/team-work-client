import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const {signIn, signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const googleLoginHandler = () => {
        signInWithGoogle()
            .then(result => navigate(from, { replace: true }))
            .catch(error => console.error(error))
    }
    return (
        <div className='bg-gray-900 flex justify-center items-center mx-auto'>
            <div className='flex max-w-3xl items-center px-10 py-20 rounded-2xl bg-white text-gray-500'>
                <div className='w-1/2'>
                    <img className='w-full' src="https://matx-react-free.vercel.app/assets/images/illustrations/dreamer.svg" alt="" />
                </div>
                <div className='w-1/2 pl-10 '>
                    <form className='m-auto'>
                        <div className="flex justify-center">
                            <div className="relative mb-3 xl:w-96 border rounded" data-te-input-wrapper-init>
                                <input
                                    type="email"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[10px] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput1"
                                />
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate mt-[10px] px-[5px] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[19px] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none bg-white"
                                >Email
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative mb-3 xl:w-96 border rounded mt-2" data-te-input-wrapper-init>
                                <input
                                    type="password"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[10px] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput2"
                                />
                                <label
                                    htmlFor="exampleFormControlInput2"
                                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate mt-[10px] px-[5px] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[19px] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none bg-white"
                                >Password
                                </label>
                            </div>
                        </div>
                        <p className='flex justify-between'>
                            <Link className='text-xs text-gray-500 hover:text-primary '>Register</Link>
                            <Link className='text-xs text-gray-500 hover:text-primary '>Forget Password</Link>
                        </p>
                        <div className='flex gap-2 w-full justify-between'>
                            <div className='basis-1/2'>
                                <button type='submit' className='btn-primary w-full py-2 rounded mt-3 capitalize'>Login</button>

                            </div>
                            <div className='basis-1/2'>
                                <button onClick={()=>googleLoginHandler()} type='button' className='py-1 w-full text-center bg-gray-100 rounded mt-3 capitalize'><FcGoogle className='text-[28px] mx-auto'></FcGoogle></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;