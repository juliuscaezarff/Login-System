import { Envelope } from "phosphor-react"
import { TextInput } from "./TextInput"

export const InputEmail = () => {
    return (
        <form  className='focus-within:opacity-100 opacity-25 flex flex-col items-stretch w-full'>
            <label htmlFor='email' className='flex flex-col gap-3 '>
                <TextInput.Root >
                    <TextInput.Icon>
                        <Envelope />
                    </TextInput.Icon>
                    <TextInput.Input
                        name='email'
                        id='name'
                        type='email'
                        placeholder="Type your e-mail" />
                </TextInput.Root>
            </label>
        </form>
    )
}