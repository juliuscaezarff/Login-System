import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../components/Form/Button';
import { InputPassword } from '../components/Form/Inputs/InputPassword';
import { InputEmail } from '../components/Form/Inputs/InputEmail';
import { LoggedOutNavBar } from '../components/Form/LoggedOutNavBar';
import { UserAvatar } from '../components/Form/UserAvatar';
import { Text } from '../components/util/Text';

export const Login = () => {
    const [form, setForm] = useState({user: '', password: ''});

    const changeForm = (e) => {
        const {name, value} = e.target

        setForm({...form, [name]: value})
    }

    const submiteForm = (e) => {
        e.preventDefault()

        console.log(form)
    }

    const signUp =
        <Link 
            to='/createaccount'
            className='
                transition-all text-center text-[10px]
                hover:border-b-2 hover:border-purple-400 hover:text-purple-50 text-purple-400
            '
        >
            signUp
        </Link>

    return (
        <div className="bg-no-repeat bg-cover bg-center bg-bubble w-screen h-screen">
            <div className='p-3'>
                <LoggedOutNavBar />
            </div>
            <div className='
                w-[85vw] h-[85vh] m-auto bg-black bg-opacity-75 rounded-3xl shadow-sm
                sm:w-[45vw] 
                md:w-[55vw]
                lg:w-[35vw]
                2xl:w-[20vw]
                shadow-white'>
                <UserAvatar />
                <form onSubmit={submiteForm} className='flex flex-col gap-4 m-auto items-stretch w-full max-w-sm mt-8'>
                    <label onChange={changeForm} htmlFor='email' className='flex flex-col px-4'>
                        <div id='login' className='flex flex-col'>
                            <Text className='text-purple-50 hover:text-purple-100 font-bold text-[24px]'>Login</Text>
                            <Text className='text-purple-50 text-[12px] font-light mb-4'>Please sign in to continue</Text>
                            </div>
                            <div className='flex-col items-stretch w-full'>
                                <InputEmail
                                value={form.user}
                                name='user'
                                id='user'
                                type='email'
                                placeholder="Type your name"
                            />
                        </div>
                    </label>
                    <div onChange={changeForm} className='flex flex-col items-stretch w-full px-4'>
                        <InputPassword value={form.password}
                            name='password'
                            type='password'
                            id='password'
                            placeholder="Type your password"
                        />
                    </div>
                    <div className='mt-4 text-center'>
                        <Button type='submit' text='LOGIN'/>
                        <Text className='hover:text-purple-50 text-center text-[10px] text-purple-400'>
                            <a href="#">Forget Password?</a>
                        </Text>
                    </div>
                    <div className='text-center py-1'>
                        <Text className='text-center text-[8px] text-purple-50'>Don't have a account? {signUp}</Text>
                    </div>
                </form>
            </div>

        </div>
    )
}
