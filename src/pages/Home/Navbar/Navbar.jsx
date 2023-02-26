import React, { useContext, useState } from 'react';
import { HiViewList, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Switch from "react-switch";
import { AuthContext } from '../../../context/AuthProvider';
import logo from '../../../assets/logo/logo.png'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { toggleTheme, theme, user, logOut } = useContext(AuthContext)
    console.log(user);

    const userLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.log(e))
    }
    return (
        <div className='h-24'>
            <header className="p-4 dark:bg-gray-800 text-blue-900 dark:text-white fixed w-full">
                <div className="container flex justify-between h-16 mx-auto">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <h1 className='text-xl lg:text-2xl font-bold font-mono'>Hot Foodies</h1>
                        <img src={logo} className="w-10 h-10 lg:w-16 lg:h-16" alt="" srcset="" />
                    </a>
                    <ul className={`items-stretch space-x-3 absolute lg:static top-24 left-48 space-y-5 lg:space-y-0 p-5 w-36 border-2 lg:border-0 lg:flex ${open ? 'hidden' : 'block'}`}>
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/home'>Services</Link>
                        </li>
                        <li>
                            <Link to='/home'>Reviews</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blogs</Link>
                        </li>
                        <div className="items-center flex-shrink-0 block lg:hidden">
                            {
                                user?.uid ?
                                    <button onClick={userLogOut} type='submit' className="self-center px-3 py-3 rounded">Logout</button>
                                    :
                                    <Link to="/signIn"><button className="self-center px-3 py-3 rounded">Sign in</button></Link>
                            }
                            <Link to='/signUp'><button className="self-center px-2 py-2 font-semibold rounded dark:bg-slate-200 dark:text-gray-900">Sign up</button></Link>
                            <Switch onChange={() => toggleTheme()} checked={theme} className="mt-2" />
                        </div>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex space-x-2">
                        {
                            user?.uid ?
                                <button onClick={userLogOut} type='submit' className="self-center px-3 py-2 rounded">Logout</button>
                                :
                                <Link to="/signIn"><button className="self-center px-3 py-2 rounded">Sign in</button></Link>
                        }
                        <Link to="/signUp"><button className="self-center px-3 py-2 font-semibold rounded dark:bg-slate-200 dark:text-gray-900">Sign up</button></Link>
                        <Switch onChange={() => toggleTheme()} checked={theme} />
                    </div>
                    <button className="p-4 lg:hidden" onClick={() => setOpen(!open)}>
                        {
                            open ?
                                <HiViewList className='w-10 h-10'></HiViewList>
                                :
                                <HiX className='w-10 h-10'></HiX>
                        }
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Navbar;