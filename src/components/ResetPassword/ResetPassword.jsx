import bgImage from '../../assets/login/login-bg.png';
import Navbar from '../Navbar/Navbar';

const ResetPassword = () => {
    return (
        <>
            <Navbar />
            <div
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh', // Adjust height as needed
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div className='lg:w-[600px] mx-auto shadow-xl bg-white p-16'>
                    <form>
                        <div>
                            <h1 className='text-4xl font-bold text-center my-4'>Login Account</h1>
                            <ul className='flex justify-center items-center gap-2 pb-10'>
                                <li>Home</li>
                                <li></li>
                                <li>Login Now</li>
                            </ul>
                        </div>

                        <div className='pb-10'>
                            <h1 className='text-3xl font-bold text-center my-2'>Reset Password</h1>
                            <p className='text-base text-center'>Enter your email address to request password reset.</p>
                        </div>

                        <div className='space-y-8'>
                            <div className='relative'>
                                <input type="text" placeholder='shimul@gmail.com ' className='border border-black py-3 px-5 w-full' />
                                <h1 className='absolute -top-2 left-4 px-1 bg-white text-sm'>Your Email</h1>
                            </div>
                            <button type='submit' className='border-2 bg-black text-white border-black py-3 px-5 w-full'>
                                Send Mail
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};



export default ResetPassword