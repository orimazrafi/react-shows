import { useState } from 'react'

export const useText = () => {
    const [text, setText] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget
        setText(value)
    }
    return [text, handleChange]
}