import { useRef } from "react"

import { Phone } from "phosphor-react"
import { IMaskInput } from 'react-imask';
import { TextInput } from "./TextInput";




export const InputPhone = () => {

    const ref = useRef(null)
    const inputPhoneRef = useRef(null)

    return (
        <form className='focus-within:opacity-100 opacity-25 p-0 flex flex-col items-stretch w-full'>
            <label htmlFor='password' className='flex flex-col gap-3 '>
                <TextInput.Root >
                    <TextInput.Icon>
                        <Phone />
                    </TextInput.Icon>
                        <IMaskInput
                            className='focus-within:opacity-100 outline-none bg-transparent flex flex-col w-full'
                            mask={'+{55} {00} 0 0000-0000'}
                            radix='.'
                            value={'{+} (DDD) 9 9999{-}9999'}
                            ref={ref}
                            inputRef={inputPhoneRef}
                        >
                    </IMaskInput>
                </TextInput.Root>
            </label>
        </form>
    )
}