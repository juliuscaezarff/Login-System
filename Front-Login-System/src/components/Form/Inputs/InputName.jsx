import { User } from "phosphor-react"
import { TextInput } from "./TextInput"

export const InputName = () => {
    return (
        <form className='focus-within:opacity-100 opacity-25 flex flex-col items-stretch w-full'>
            <label htmlFor='password' className='flex flex-col gap-3 '>
                <TextInput.Root>
                    <TextInput.Icon>
                    <User />
                    </TextInput.Icon>
                    <TextInput.Input
                        type='name'
                        id='name'
                        placeholder="Type your name"
                    />
                </TextInput.Root>
            </label>
        </form>
    )
}