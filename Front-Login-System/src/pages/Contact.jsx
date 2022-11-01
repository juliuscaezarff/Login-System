import { Link } from 'react-router-dom'
import { LoggedOutNavBar } from "../components/Form/LoggedOutNavBar"
import { Text } from "../components/util/Text"

export const Contact = () => {
    const login =
        <Link 
            to="/login"
            className='
                transition-all text-center text-[15px]
                sm:text-[25px]
                hover:border-b-2 hover:border-purple-400 hover:text-purple-50 text-purple-400
            '
        >
            login
        </Link>

    return (
        <div className="bg-no-repeat bg-cover bg-center bg-bubble w-screen h-screen">
            <div className='p-3'>
                <LoggedOutNavBar />
            </div>
                <div className='w-[80vw] text-center m-auto py-[28vh]'>
                    <Text className='
                        text-center text-[15px]
                        sm:text-[25px]
                         text-purple-50
                    '>
                        Please {login} to continue with us :)
                    </Text>
                </div>
        </div>
    )
}