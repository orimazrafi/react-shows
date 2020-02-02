import { useRef, useEffect } from "react";

export const useRefHook = () => {
    const textRef: any = useRef(null);
    useEffect(() => {
        textRef.current.focus()
    }, [])
    return [textRef]
}