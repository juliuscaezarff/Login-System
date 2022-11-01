import { TextInput } from './TextInput';
import { Lock } from 'phosphor-react'

export const InputPassword = () => {

    return(
        <form className='focus-within:opacity-100 opacity-25 flex flex-col items-stretch w-full'>
            <label htmlFor='password' className='flex flex-col gap-3 '>
                <TextInput.Root>
                    <TextInput.Icon>
                    <Lock />
                    </TextInput.Icon>
                    <TextInput.Input type="password" id='password' placeholder="Type your password" />
                </TextInput.Root>
            </label>
        </form>
    )
}
