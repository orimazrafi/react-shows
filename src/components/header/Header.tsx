import React from "react";
import { useRefHook } from './../../hooks/useRefHook';


export const Header = (props: any) => {
    const [textRef] = useRefHook()

    return (
        <div className="input__container" id="aggregate_7aa" >
            <input
                type="text"
                ref={textRef}
                placeholder="Search..."
                className="form-control"
                name="query"
                value={props.text}
                onChange={props.handleChange} />
        </div>
    )
}