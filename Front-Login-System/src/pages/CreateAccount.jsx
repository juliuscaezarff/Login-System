import { ArrowLeft,  } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { Button } from '../components/Form/Button'
import { InputConfirmPassword } from '../components/Form/Inputs/InputConfirmPassword'
import { InputPassword } from '../components/Form/Inputs/InputPassword'
import { LoggedOutNavBar } from "../components/Form/LoggedOutNavBar"
import { Text } from "../components/util/Text"
import { InputEmail } from '../components/Form/Inputs/InputEmail'
import { InputPhone } from '../components/Form/Inputs/InputPhone'
import { InputName } from '../components/Form/Inputs/InputName'
import { useState } from 'react'

export const CreateAccount = () => {
    const [form, setForm] = useState({user: '', password: '', phone: '', confirmPassword: '', email: ''});

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
            to="/login"
            className='
                transition-all text-center text-[10px]
                hover:border-b-2 hover:border-purple-400 hover:text-purple-50 text-purple-400
            '
        >
            signUp
        </Link>

    return (
        <div className="bg-gradient-to-r relative from-black to-purple-900 w-screen h-screen">
            <LoggedOutNavBar />
            <div className='flex flex-col gap-2 px-4 m-auto w-[250px] sm:w-[260px]'>
                <div id='create-account' className='flex flex-col'>
                <button className='pt-8 pb-4 w-6'>
                    <Link to='/login'>
                        <ArrowLeft className='text-purple-50 text-[20px]'/>
                    </Link>
                </button>
                    <Text className='text-purple-50 hover:text-purple-100 text-center font-bold text-[23px]'>
                        Create Account
                    </Text>
                    <Text className='text-purple-50 text-[10px] text-center font-light pb-4'>
                        Please fill the input blow here
                    </Text>
                </div>
                <form onSubmit={submiteForm} className='z-50 flex-col items-stretch m-auto'>
                    <label onChange={changeForm}>
                        <div className='mt-4'>
                            <InputName
                                value={form.user}
                                name='user'
                                id='user'
                                type='text'
                            />
                        </div >
                        <div className='mt-4'>
                            <InputPhone
                                value={form.phone}
                                name='phone'
                                id='phone'
                            />
                        </div>
                        <div className='mt-4'>
                            <InputEmail
                                value={form.email}
                                name='email'
                                id='user'
                                type='text'
                            />
                        </div>
                        <div className='mt-4'>
                            <InputPassword
                                value={form.password}
                                name='password'
                                type='password'
                                id='password'
                            />
                        </div>
                        <div className='mt-4'>
                            <InputConfirmPassword
                                value={form.confirmPassword}
                                name='confirmPassword'
                                type='password'
                                id='password'
                            />
                        </div>
                    </label>
                    <div className='mt-4 text-center'>
                        <Button type='submit' text='SIGN UP'/>
                    </div>
                </form >
                <Text className='text-purple-50 text-[10px] text-center py-4'>Already have a account? {signUp} </Text>
            </div>
        </div>
    )
}