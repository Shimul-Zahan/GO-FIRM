import React, { useContext, useState } from 'react';
import bgImage from '../../assets/login/login-bg.png';
import gl from '../../assets/login/google.png';
import fb from '../../assets/login/fb.png';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { MyContext } from '../../Auth/AuthProvide';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate('')
    const {
        googleLogin,
    } = useContext(MyContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = async e => {
        e.preventDefault();
        const user = { email, password }
        try {
            const res = await axios.post('http://localhost:5000/api/login', user);
            if (res?.data?.email) {
                navigate('/');
                localStorage.setItem("GOFIRM-LOGIN", JSON.stringify(res?.data));
            }
        } catch (error) {
            console.error('Error adding category:', error);
        }
    }

    const createAccountWithGoogle = () => {
        googleLogin()
            .then(res => {
                const userInfo = {
                    name: res.user?.reloadUserInfo?.displayName,
                    email: res.user?.reloadUserInfo?.email,
                    image: res.user?.reloadUserInfo?.photoUrl,
                    password: 'google',
                    role: 'google',
                };
                console.log(userInfo);
                axios.post('http://localhost:5000/api/googleLogin', userInfo)
                    .then(response => {
                        if (response?.data?.email) {
                            navigate('/');
                            localStorage.setItem("GOFIRM-LOGIN", JSON.stringify(response?.data));
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error.message);
                    });
            })
            .catch(err => setError(err.message.slice(9, 100)));
    };


    return (
        <>
            <Navbar />
            <div
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div className='lg:w-[600px] mx-auto shadow-xl bg-white p-16'>
                    <form onSubmit={login}>
                        <div>
                            <h1 className='text-4xl font-bold text-center my-4'>Login Account</h1>
                            <ul className='flex justify-center items-center gap-2 pb-10'>
                                <Link to='/' className='underline'>Home</Link>
                                <li></li>
                                <Link className='underline' to='/reg'>Register Now</Link>
                            </ul>
                        </div>
                        <div className='flex justify-center items-center gap-2 pb-8'>
                            <button onClick={createAccountWithGoogle} className='border border-black w-full flex justify-center items-center gap-41 cursor-pointer'>
                                <img src={gl} alt="" className='h-12 w-12' />
                                <h1>Login With Google</h1>
                            </button>
                            <div className='border border-black w-full flex justify-center items-center gap-1 cursor-pointer'>
                                <img src={fb} alt="" className='h-12 w-12' />
                                <h1>Login With Facebook</h1>
                            </div>
                        </div>
                        <span className="flex items-center pb-8">
                            <span className="h-px flex-1 bg-black"></span>
                            <span className="shrink-0 px-4">or Sign in with Email</span>
                            <span className="h-px flex-1 bg-black"></span>
                        </span>

                        <div className='space-y-8'>
                            <div className='relative'>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='shimul@gmail.com ' className='border border-black py-3 px-5 w-full' />
                                <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Your Email</h1>
                            </div>
                            <div className='relative'>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='********' className='border border-black py-3 px-5 w-full' />
                                <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Your Password</h1>
                            </div>
                            <button type='submit' className='border-2 bg-black text-white border-black py-3 px-5 w-full'>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
