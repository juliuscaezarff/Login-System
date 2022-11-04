import { useRef } from "react"

import { Phone } from "phosphor-react"
import { IMaskInput } from 'react-imask';
import { TextInput } from "./TextInput";

export const InputPhone = () => {

    const ref = useRef(null)
    const inputPhoneRef = useRef(null)

    return (
        <label htmlFor='phone' className='focus-within:opacity-100 opacity-25 items-stretch w-full flex flex-col gap-3 text-[12px]'>
            <TextInput.Root className='bg-black'>
                <TextInput.Icon>
                    <Phone />
                </TextInput.Icon>
                    <IMaskInput
                        name='phone'
                        className='focus-within:opacity-100 outline-none bg-transparent flex flex-col w-full'
                        mask={'+{55} {00} 0 0000-0000'}
                        radix='.'
                        ref={ref}
                        inputRef={inputPhoneRef}
                        placeholder='Type a phone number'
                    >
                </IMaskInput>
            </TextInput.Root>
        </label>
    )
}