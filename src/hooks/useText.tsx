import { useState } from 'react'

export const useText = () => {
    console.log('f')
    const [text, setText] = useState<any>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget
        setText(value)
    }
    return [text, handleChange]
}