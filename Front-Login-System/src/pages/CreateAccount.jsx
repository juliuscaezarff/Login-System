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

export const CreateAccount = () => {
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
                <div className='flex flex-col gap-2 px-4'>
                    <div id='create-account' className='flex flex-col'>
                    <button className='pt-8 pb-4'>
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
                        <InputName />
                        <InputPhone />
                        <InputEmail />
                        <InputPassword />
                        <InputConfirmPassword />
                    <div className='mt-4 text-center'>
                        <Button type='submit' text='SIGN UP'/>
                    </div>
                    <Text className='text-purple-50 text-[10px] text-center py-4'>Already have a account? {signUp} </Text>
                </div>
            </div>
        </div>
    )
}