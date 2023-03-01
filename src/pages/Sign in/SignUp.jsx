import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Sign.css'
const SignUp = () => {
    const { createUser, userProfile, SignIn, } = useContext(AuthContext)
    const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm();
    const [error, setError] = useState({
        signInError: ""
    })
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data)
        const profile = {
            displayName: data.username
        }
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                userProfile(profile)
                    .then(() => {
                        reset()
                        toast.success("Your account successfully created", {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        })
                        navigate('/')
                    })
                    .catch(e => console.error(e.message))
            })
            .catch(e => {
                setError({ ...error, signInError: e.message })

            })
    };

    const loginWithGoogle = () => {
        SignIn(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("Your account successfully created", {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
            })
            .catch(e => console.error(e.message))
    }
    return (
        <div className='bg-sign p-10'>
            <div className="w-full max-w-md p-8 mx-auto rounded-md bg-slate-200 dark:bg-gray-900 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid" data-dashlane-rid="c1e2a49c61478f00" data-form-type="login">
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block dark:text-gray-400">Username</label>
                        <input {...register("username", { required: true })}
                            aria-invalid={errors.firstName ? "true" : "false"}
                            type="text" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-gray-900 dark:bg-white dark:text-black focus:dark:border-violet-400" />
                        {errors.username?.type === 'required' && <small role='alert'>username is required</small>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="email" className="block dark:text-gray-400">Email</label>
                        <input type="email" {...register("email", { required: "Email is required" })}
                            aria-invalid={errors.email ? "true" : "false"}
                            placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-gray-900 dark:bg-white dark:text-black focus:dark:border-violet-400" />
                        {errors.email && <small role="alert">{errors.email?.message}</small>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400">Password</label>
                        <input {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Your password should at least 6 characters"
                            }
                        })}
                            aria-invalid={errors.password ? "true" : "false"}
                            type="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-gray-900 dark:bg-white dark:text-black focus:dark:border-violet-400" required />
                        {errors.password && <small role="alert" className='text-red-500 dark:text-white'>{errors.password?.message}</small>}
                    </div>
                    <button disabled={isSubmitting} className="block w-full font-bold p-3 text-center rounded-lg dark:text-gray-600  dark:bg-gray-200 bg-gray-900 text-white" type='submit'>Sign Up</button>
                    {error?.signInError && <small role="alert" className='text-red-500 dark:text-white'>{error.signInError}</small>}
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="my-6 space-y-4">
                    <button onClick={loginWithGoogle} aria-label="Login with Google" type="submit" className="flex items-center justify-center w-full p-4 space-x-4 border-2 border-gray-900 rounded-md focus:ring-2 focus:ring-offset-1  dark:border-gray-400 focus:ring-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                    <Link to='/signIn' className='underline'>Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;